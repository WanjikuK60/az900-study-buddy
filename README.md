# Study Buddy — AZ-900, made clearer

Study Buddy is an **unofficial** browser-based learning companion for Microsoft Azure Fundamentals (AZ-900). It helps beginners connect cloud concepts to plain-language explanations, familiar Kenyan examples, Kiswahili support, and original practice questions.

## Try the app

Open `index.html` in a browser or start a local web server:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>. No account, API key, or dependency installation is needed.

## Features

- Fifteen concise study notes across all three skill areas in the public Microsoft Learn AZ-900 skills outline.
- Topic search and domain filters.
- English and Kiswahili explanations.
- Kenyan everyday-life examples and short exam reminders.
- Nine multiple-choice practice questions written for this project, with feedback and explanations. They are **not** copied or recalled real exam questions.
- Progress stored in this browser only; **Reset progress** clears it.
- Responsive layout with keyboard-friendly controls.

## Exam outline and accuracy

The study path reflects the public Microsoft Learn outline: cloud concepts (25–30%), Azure architecture and services (35–40%), and Azure management and governance (30–35%). Exam objectives and service details can change. Review the [current Microsoft Learn AZ-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900) before studying or sitting the exam.

Study Buddy is an independent learning aid. It is **not an official Microsoft product**, is not affiliated with or endorsed by Microsoft, and does not guarantee exam results. This project uses no Microsoft logos. Its practice questions are original educational material based on the public skills outline.

## AI transparency

Despite the hackathon theme, this static prototype does **not** call a live AI model. It matches questions to reviewed local notes so that it can run without a backend and does not send learner questions to an external service. The AI prompt and safety requirements for a possible future server-side tutor are described in [AI-PROMPT.md](./AI-PROMPT.md). Never place an AI API key in browser code.

## Project materials

- `index.html` — accessible app structure and navigation
- `styles.css` — responsive visual design
- `app.js` — study notes, question matching, quiz, language selection, and local progress
- `AI-PROMPT.md` — responsible future AI integration plan
- `PRODUCT-BRIEF.md` — project scope, audience, and learning loop
- `PITCH.md` — three-minute hackathon pitch
- `DEMO-SCRIPT.md` — short demo guide

## Source

Official exam domain names and weightings are based on the [Microsoft Learn AZ-900 skills outline](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900). This independent project does not reproduce the exam or use official exam questions.
