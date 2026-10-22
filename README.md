# Study Buddy — AZ-900, made clearer

Study Buddy is a welcoming, unofficial study companion for people preparing for Microsoft Azure Fundamentals (AZ-900). It explains cloud topics in plain language, uses careful examples grounded in everyday life in Kenya, offers English, Kiswahili, and beta Sheng answer modes, and provides original practice questions.

## Try it

Open `index.html` in a browser, or run a local web server from this folder:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

The project is a dependency-free static site. It works without an API key or account. Study history is stored in the browser's local storage; use **Reset progress** to clear it.

## What it does

- Covers all three AZ-900 skill areas in Microsoft's published study guide.
- Presents 15 bite-sized concepts with a technical definition first, an explicitly labeled Kenyan everyday analogy, an exam reminder, and a related self-check.
- Answers supported topic questions from reviewed study notes in English, Kiswahili, or beta Sheng.
- Lets learners choose Beginner, Intermediate, or Exam-ready emphasis and request “Explain like I'm new.”
- Includes filters, topic search, 15 original multiple-choice practice questions, feedback explaining why each distractor is incorrect, and a locally saved weak-topic review list.
- Adapts for mobile screens and supports keyboard navigation and assistive technology.

The current prototype uses local topic matching and reviewed notes rather than a live generative-AI service. It does not send learner questions to an external service. Sheng is an experimental draft and should be reviewed by fluent speakers. The future AI/quiz prompts, design rationale, safety requirements, and testing notes are documented in [AI-PROMPT.md](./AI-PROMPT.md). Never put a model API key in browser code.

## Prompt design and checks

The future tutor prompt puts the real Azure definition before a local analogy so a memorable example cannot replace the technical fact. It asks for an exam tip and a short understanding check, makes language and learner level explicit, and requires the tutor to say when the reviewed source does not support an answer. The separate quiz prompt requests four choices and an explanation for every distractor while explicitly forbidding copied or recalled exam items. Full prompts and the rationale are in [AI-PROMPT.md](./AI-PROMPT.md).

Validation run: `node --check app.js`, `git diff --check`, and a content-integrity check covering 15 topics, 15 mapped questions, the Sheng answer set, and all distractor-rationale arrays. A browser smoke check confirmed the topic library renders, a Sheng cloud answer appears, learner-level selection updates, and “Explain like I’m new” shortens the definition. The content and interface were adjusted to label analogies, clarify that M-Pesa is not evidence of Azure hosting, caution that regions or generators alone do not guarantee recovery, and add a distinct rationale for every incorrect quiz choice. Sheng is a first draft and needs review by fluent speakers.

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
- `AI-PROMPT.md` — grounded prompt and safe server-side integration plan
- `PRODUCT-BRIEF.md` — user, problem, and product scope
- `PITCH.md` — hackathon pitch outline
- `DEMO-SCRIPT.md` — short live demo guide

## Accuracy and safety

Study Buddy is an independent, unofficial learning aid, not an official Microsoft product and not a guarantee of exam results. Quiz questions are original learning checks, not copied or recalled exam questions. Explanations are deliberately concise; analogies are memory aids, not exact technical equivalences. Review product details and service availability against Microsoft Learn, especially before an exam. The app does not request personal information or transmit study questions.

## Source

The exam objectives and skill-area weights are based on the [Microsoft Learn study guide for Exam AZ-900](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900), skills measured as of July 20, 2026. Azure service descriptions link back to the official study guide and Microsoft Learn documentation.
