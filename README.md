# LiteBridge – Intelligent Web Simplification Extension

**LiteBridge** is a browser extension that declutters webpages by removing ads, pop-ups, trackers, and layout noise—leaving only the essential content. It currently uses rule-based filtering and DOM parsing, with plans to integrate machine learning for smarter content detection.

---

## Features

- **Clean Page Rendering**  
  Removes non-essential elements using JavaScript, TreeWalker API, and Readability.js.

- **Tracker & Script Blocking**  
  Uses Chrome’s WebRequest API and EasyPrivacy filters to block known trackers and analytics.

- **ML-Based Content Filtering (In Progress)**  
  A lightweight model (DistilBERT) is being trained to score and retain meaningful content.  
  Planned browser-side inference using ONNX.js or TensorFlow.js.

- **NLP Enhancements (Planned)**  
  Backend (FastAPI) for summarization and content classification using models like T5 or BART.

- **User Preferences (Upcoming)**  
  Simple UI for toggling filters, stored via Chrome Storage API.

---

## Tech Stack

| Component            | Technology                            |
|----------------------|----------------------------------------|
| Extension Core       | JavaScript, Readability.js, DOMPurify  |
| Privacy Protection   | WebRequest API, EasyPrivacy Lists      |
| Machine Learning     | PyTorch, Hugging Face, ONNX.js, TF.js  |
| Backend (Planned)    | FastAPI, Transformers, spaCy           |
| UI & Storage         | Vanilla JS / React, Tailwind, Chrome Storage |
| Testing              | Puppeteer, Selenium                    |

---

## Roadmap

- [x] DOM cleanup and tracker blocking
- [ ] ML-based content filtering
- [ ] NLP-powered summarization
- [ ] Reader/dark mode
- [ ] Custom site-based preferences

---
