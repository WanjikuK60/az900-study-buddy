# Product brief — Study Buddy

## The learner problem

For a new cloud learner, words such as regions, elasticity, and shared responsibility can feel abstract. Dense definitions do not always show what to remember for AZ-900 or how a concept connects to daily life.

## The product

Study Buddy is a friendly, unofficial AZ-900 learning companion. It leads with a reviewed technical definition, adds a familiar Kenyan analogy with caveats, gives an exam reminder and self-check, and provides original practice questions. Learners can select English, Kiswahili, or beta Sheng answers and choose beginner, intermediate, or exam-ready emphasis.

## Audience

Beginners studying for AZ-900, especially learners who benefit from plain language, local examples, and a low-friction study tool that works in a browser without an account.

## Learning loop

1. Pick one concept from the official exam domains.
2. Ask Study Buddy or browse its short explanation.
3. Connect the definition to an everyday example, noting where the analogy stops.
4. Try an original practice question and review why each distractor is incorrect.
5. Revisit weaker quiz topics using progress saved on the same device.

## Scope and honesty

The current build includes 15 reviewed concept notes, English/Kiswahili/beta Sheng answer text, three learner levels, topic search and filtering, 15 original questions, distractor explanations, and local weak-topic tracking. Supported concepts are answered from reviewed notes first. When deployed and configured, unmatched questions can use a server-side Anthropic-backed FastAPI service. Those answers are labeled AI-generated and should be checked against Microsoft Learn; the current fallback is not retrieval-grounded. Without the backend URL, the static study tools remain available.

## Success signals

- Learners can reach a concept through search, a topic card, or a suggested question.
- Each supported answer leads with a technical definition and clearly labels the analogy, exam reminder, and a related self-check.
- Learners can practise, understand wrong choices, and revisit weak topics without signing in.
- The content remains traceable to the current Microsoft Learn exam objectives.

## Next steps

Review the content with learners, an Azure subject-matter reviewer, and fluent Kiswahili/Sheng speakers. Improve the AI fallback with versioned Microsoft Learn retrieval and stronger production rate limiting before broad public use.
