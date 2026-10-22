# Study Buddy — AZ-900, made clearer

Study Buddy is a welcoming, unofficial study companion for people preparing for Microsoft Azure Fundamentals (AZ-900). It explains cloud topics in plain language, uses careful examples grounded in everyday life in Kenya, offers English, Kiswahili, and beta Sheng answer modes, and provides original practice questions.

## Try it

Open `index.html` in a browser, or run a local web server from this folder:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

The GitHub Pages frontend is static and works without an account or backend. Reviewed topic answers and practice remain available without AI. To enable the optional AI fallback for unmatched questions, deploy the FastAPI backend as described below. Study history is stored in the browser's local storage; use **Reset progress** to clear it.

## What it does

- Covers all three AZ-900 skill areas in Microsoft's published study guide.
- Presents 15 bite-sized concepts with a technical definition first, an explicitly labeled Kenyan everyday analogy, an exam reminder, and a related self-check.
- Localizes the full interface in English and Kiswahili; topic explanations also offer beta Sheng.
- Answers supported topic questions from reviewed study notes in English, Kiswahili, or beta Sheng before considering an AI fallback.
- For unmatched questions, optionally calls a server-side Anthropic-backed FastAPI endpoint; the API key is never shipped to the browser. AI answers are labeled and should be verified on Microsoft Learn.
- Lets learners choose Beginner, Intermediate, or Exam-ready emphasis and request “Explain like I'm new.”
- Includes filters, topic search, 15 original multiple-choice practice questions, feedback explaining why each distractor is incorrect, and a locally saved weak-topic review list.
- Adapts for mobile screens and supports keyboard navigation and assistive technology.

Reviewed answers stay in the browser. When the optional backend is configured, only questions without a reviewed match are sent to the AI service; the privacy notice appears before the learner submits. AI answers are not retrieval-grounded, may be wrong, and must be verified against Microsoft Learn. Sheng is an experimental draft and should be reviewed by fluent speakers. The deployed system prompt, original quiz prompt, design rationale, and safety notes are documented in [AI-PROMPT.md](./AI-PROMPT.md). Never put a model API key in browser code.

## AI approach and prompt design

The approach is **reviewed notes first, AI for unmatched questions**. The prompt puts the real definition before a local analogy, asks for an exam tip and understanding check, sets the requested language and level, and instructs the model to admit uncertainty and never reproduce real exam questions. It is scope-constrained but not retrieval-augmented; model responses are labeled and should be checked against Microsoft Learn. The separate original quiz prompt requests four choices and a distinct explanation for each distractor. See [AI-PROMPT.md](./AI-PROMPT.md) for the exact prompts and rationale.

## Deploy the optional AI backend

1. Create or select an Anthropic API account and choose a currently supported model ID. Do not share the API key in chat or commit it.
2. In Render, create a new Blueprint from this repository and select `render.yaml`. The service root is `backend/`; Render installs the requirements and runs FastAPI. The blueprint prompts for `ANTHROPIC_API_KEY` and `ANTHROPIC_MODEL`.
3. In the Render service environment, set `ALLOWED_ORIGINS` to the exact frontend origins, for example `https://wanjikuk60.github.io`. Add local origins only if needed for development.
4. After the service is healthy, check `https://YOUR-SERVICE.onrender.com/health`.
5. Set `window.STUDY_BUDDY_API_URL` in [config.js](./config.js) to the backend base URL, with no `/chat` suffix, then publish the updated static site.
6. Submit an unmatched AZ-900 question and confirm the answer is labeled as AI-generated. If the backend is unavailable, reviewed topics and the original quiz remain usable.

The API key must be entered in Render's environment settings, never in `config.js`, the GitHub repository, or the browser. The included in-memory rate limit is a basic demo safeguard, not production-grade abuse prevention; use provider spending limits and stronger rate limiting before broad public use. Learner questions sent to the backend are forwarded to Anthropic.

The static frontend works with no backend configured. To run backend tests:

```powershell
Set-Location backend
python -m pip install -r requirements.txt
python -m pytest
```

These checks cover health, explicit missing-configuration errors, request validation, mocked model interaction, rate limiting, and allowed GitHub Pages CORS. The content and interface label analogies, clarify that M-Pesa is not evidence of Azure hosting, caution that regions or generators alone do not guarantee recovery, and explain every incorrect quiz choice. Sheng is a first draft and needs review by fluent speakers.

## Exam scope

The content follows the AZ-900 study guide whose skills are measured as of **July 20, 2026**:

| Exam domain | Weight in the study guide |
| --- | ---: |
| Describe cloud concepts | 25–30% |
| Describe Azure architecture and services | 35–40% |
| Describe Azure management and governance | 30–35% |

The outline can change. Always compare your study plan with the [current Microsoft AZ-900 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900) and [Azure Fundamentals certification page](https://learn.microsoft.com/credentials/certifications/azure-fundamentals/).

## Project files

- `index.html` — accessible app layout and navigation
- `styles.css` — responsive visual design
- `app.js` — reviewed topic notes, English/Kiswahili/beta Sheng answers, level modes, original quiz questions, and local weak-topic tracking
- `config.js` — optional public backend URL; never place secrets here
- `backend/main.py` — FastAPI AI fallback; provider secret stays in the host environment
- `render.yaml` — Render Blueprint for deploying the optional API
- `AI-PROMPT.md` — deployed system prompt, original quiz prompt, and integration safety notes
- `PRODUCT-BRIEF.md` — user, problem, and product scope
- `PITCH.md` — hackathon pitch outline
- `DEMO-SCRIPT.md` — short live demo guide

## Accuracy and safety

Study Buddy is an independent, unofficial learning aid, not an official Microsoft product and not a guarantee of exam results. Quiz questions are original learning checks, not copied or recalled exam questions. Explanations are deliberately concise; analogies are memory aids, not exact technical equivalences. Review product details and service availability against Microsoft Learn, especially before an exam. The app does not request personal information. If the optional backend is configured, unmatched questions are sent to the backend and Anthropic; do not enter personal or confidential information.

## Source

The exam objectives and skill-area weights are based on the [Microsoft Learn study guide for Exam AZ-900](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900), skills measured as of July 20, 2026. Azure service descriptions link back to the official study guide and Microsoft Learn documentation.
