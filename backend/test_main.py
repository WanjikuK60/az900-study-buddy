from fastapi.testclient import TestClient
from types import SimpleNamespace

import main


client = TestClient(main.app)


def setup_function() -> None:
    with main._rate_limit_lock:
        main._request_times.clear()


def test_health_is_available_without_an_api_key() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_chat_returns_clear_configuration_error(monkeypatch) -> None:
    monkeypatch.delenv("ANTHROPIC_API_KEY", raising=False)
    monkeypatch.delenv("ANTHROPIC_MODEL", raising=False)

    response = client.post("/chat", json={"question": "Explain Azure regions"})

    assert response.status_code == 503
    assert "not configured" in response.json()["detail"]


def test_chat_validates_question_length() -> None:
    response = client.post("/chat", json={"question": "x" * 181})

    assert response.status_code == 422


def test_chat_sends_language_and_level_to_model(monkeypatch) -> None:
    calls = []

    class FakeMessages:
        def create(self, **kwargs):
            calls.append(kwargs)
            return SimpleNamespace(content=[SimpleNamespace(text="Definition: a test answer.")])

    class FakeClient:
        messages = FakeMessages()

    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-key")
    monkeypatch.setenv("ANTHROPIC_MODEL", "test-model")
    monkeypatch.setattr(main.anthropic, "Anthropic", lambda **_kwargs: FakeClient())

    response = client.post(
        "/chat",
        json={"question": "Explain Azure regions", "language": "sw", "level": "exam"},
    )

    assert response.status_code == 200
    assert response.json() == {"answer": "Definition: a test answer."}
    assert calls[0]["model"] == "test-model"
    assert "Selected language: sw" in calls[0]["messages"][0]["content"]
    assert "Learner level: exam" in calls[0]["messages"][0]["content"]


def test_chat_rejects_requests_after_rate_limit(monkeypatch) -> None:
    monkeypatch.setattr(main, "RATE_LIMIT", 1)
    monkeypatch.setattr(main, "generate_answer", lambda _payload: "A reviewed test answer.")

    first = client.post("/chat", json={"question": "Explain Azure regions"})
    second = client.post("/chat", json={"question": "Explain cloud computing"})

    assert first.status_code == 200
    assert second.status_code == 429


def test_chat_cors_allows_the_github_pages_site() -> None:
    response = client.options(
        "/chat",
        headers={
            "Origin": "https://wanjikuk60.github.io",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type",
        },
    )

    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "https://wanjikuk60.github.io"
