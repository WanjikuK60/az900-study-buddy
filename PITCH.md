# Study Buddy — three-minute hackathon pitch

## 1. Problem (about 30 seconds)

“When I was learning cloud fundamentals, words like availability zones, elasticity, and shared responsibility could sound abstract. Beginners need more than definitions: they need an example that makes sense, and a clear connection to the exam.”

## 2. Product (about 60 seconds)

“Meet Study Buddy, a simple AZ-900 study companion. It checks 15 reviewed concepts first, giving a plain-language definition, a familiar Kenyan example, and an exam reminder. When the optional backend is configured, questions beyond those notes go to a live AI tutor. That answer is clearly labeled AI-generated and points learners back to Microsoft Learn to verify. Learners can also switch languages and practise with original questions.”

**Demo:** Ask about a reviewed topic, then an unmatched AZ-900 concept to demonstrate the optional AI fallback. Switch language and answer an original practice question.

## 3. Target learners (about 25 seconds)

“It is for beginners preparing for Azure Fundamentals, including learners who want accessible language, local context, and a study tool that opens in a browser without an account.”

## 4. Impact and scale (about 35 seconds)

“The study path follows Microsoft's three AZ-900 domains, so it is easy to see what to study next. The same pattern—simple explanation, contextual example, practice, and reviewed sources—could support other entry-level certifications after careful content review.”

## 5. Responsible build (about 30 seconds)

“The website still works when the backend is unavailable. The optional FastAPI service keeps the Anthropic key server-side, limits requests, and labels generated answers. The current prompt is scoped to AZ-900 but does not retrieve source passages, so we tell learners to verify with Microsoft Learn instead of claiming the model is always right.”

## Close

“Study Buddy turns one learner's questions into a clearer starting point for the next cloud builder. Thank you.”

## Deployment and language-review note

Do not claim that the live AI demo is active until the Render service is configured with a provider key and model and `config.js` points to its tested URL. Kiswahili and Sheng content still needs review by fluent speakers; Sheng is marked beta.
