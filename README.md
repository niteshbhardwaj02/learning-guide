# 🚀 Engineering Interview Learning Hub

> **8 Specialized Tracks · 16 Comprehensive Guides & Quizzes · 800+ Explained Answers · 650+ Interactive Quiz Questions · 100+ Architectural Flow Diagrams · 100% Offline-Ready**

Welcome to the **Engineering Interview Learning Hub**, an offline-first repository of in-depth study guides, scenario-based design workbooks, and interactive practice/mock assessment quizzes designed for senior software engineers, technical leads, and distributed systems architects.

---

## 🧭 Repository Quick Navigation Matrix

| Domain Track | 📖 Study Guide | 📝 Interactive Quiz | 🗺️ Visual Atlas | Scope & Assets |
|---|---|---|---|---|
| **🌐 Full-Stack Interview** | [Interview_Study_Guide.html](Interview_Study_Guide.html) | [Interview_Quiz_100.html](Interview_Quiz_100.html) | *Embedded in guide* | 120 Guide Qs · 100 Quiz Qs · 8 Flows |
| **🤖 AI & LLM Systems** | [ai_interview_guide.html](ai_interview_guide.html) | [ai_interview_quiz_100.html](ai_interview_quiz_100.html) | *Embedded in guide* | 100 Guide Qs · 100 Quiz Qs · Architectures |
| **🟢 Node.js Systems** | [nodejs_interview_guide.html](nodejs_interview_guide.html) | [nodejs_100_question_quiz.html](nodejs_100_question_quiz.html) | [nodejs_visual_atlas.html](nodejs_visual_atlas.html) | 100 Guide Qs · 100 Quiz Qs · 37 Diagrams |
| **⚛️ React 19 Architecture** | [react_interview_guide.html](react_interview_guide.html) | [react_interview_quiz.html](react_interview_quiz.html) | *Embedded in guide* | 100 Guide Qs · 100 Quiz Qs · React 19.3 |
| **💛 JavaScript Core** | [senior_javascript_study_guide.html](senior_javascript_study_guide.html) | [senior_javascript_quiz_100.html](senior_javascript_quiz_100.html) | *Embedded in guide* | 100 Guide Qs · 100 Quiz Qs · Core Semantics |
| **🎨 Senior Frontend** | [senior_frontend_interview_100.html](senior_frontend_interview_100.html) | *Built-in to guide* | *Embedded in guide* | 100 Questions + 6 Coding Solutions |
| **⚙️ Backend & DevOps** | [senior_backend_devops_study_guide_illustrated.html](senior_backend_devops_study_guide_illustrated.html) | [senior_backend_devops_quiz_illustrated.html](senior_backend_devops_quiz_illustrated.html) | *Embedded in guide* | 100 Answers · 100 Quiz Qs · 50 Diagrams |
| **📐 System Design** | [system_design_guide.html](system_design_guide.html) | [system_design_quiz.html](system_design_quiz.html) | *Embedded in guide* | 80 Scenarios · 50 Quiz Qs · Visual Flows |

---

## ⚡ Central Portal Dashboard

Open [index.html](index.html) in any browser to launch the central dashboard:

- **Instant Search & Real-Time Filtering**: Type `/` to search across all topics, question stems, and architectural patterns.
- **Track Filters**: Filter by format (Study Guides, Quizzes, Visual Atlas) or by subject track.
- **Progress Tracking**: Local-storage-backed track completion checklists that remember what you have mastered across browser sessions.
- **One-Click Launchers**: Direct side-by-side buttons for study guides and companion quizzes.

---

## 🎯 Universal Navigation & Keyboard Shortcuts

Every guide and quiz includes the universal navigation bar (`site-nav.css` and `site-nav.js`):

- **`⌂ Learning Hub`**: Instant link back to [index.html](index.html).
- **Companion Switcher**: One-click jump between Study Guide (`📖`) and Quiz (`📝`).
- **`📚 All Tracks ▾` Switcher**: Open a searchable drawer listing all 16 modules from any page.
- **Keyboard Shortcuts**:
  - `Ctrl + K` (or `Cmd + K`): Open/close the quick track navigator from any page.
  - `/`: Focus search input in the Learning Hub dashboard or navigator.
  - `Escape`: Close open drawers and modals.

---

## 🛠️ Getting Started & Local Server

### 1. Direct File Opening (No Server Required)
Because every file is completely self-contained with embedded SVGs and vanilla JavaScript, you can open any file directly by double-clicking it or using file protocol:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Running a Local Static Server
If you prefer running via HTTP:
```bash
# Using Node.js (via package.json)
npm start

# Or using Python
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 🧪 Automated Link & Repository Verification

To verify that all internal links, references, and modules exist on disk with zero broken links:

```bash
# Run via npm
npm test

# Or run directly via Python
python scripts/verify_links.py
```

---

## 📚 Specialized Track Overviews

### 1. Full-Stack Interview Track
- **Guide**: [Interview_Study_Guide.html](Interview_Study_Guide.html) (120 Questions)
- **Quiz**: [Interview_Quiz_100.html](Interview_Quiz_100.html) (100 Questions)
- **Key Focus**: Node.js event mechanics, React render-vs-commit lifecycles, DORA metrics, OIDC, SLSA supply chain, and end-to-end request flows.

### 2. Artificial Intelligence & LLMs Track
- **Guide**: [ai_interview_guide.html](ai_interview_guide.html) (100 Illustrated Answers)
- **Quiz**: [ai_interview_quiz_100.html](ai_interview_quiz_100.html) (100 Questions)
- **Key Focus**: Transformer architectures, RAG patterns, chunking & vector indexing, fine-tuning vs LoRA vs prompt engineering, agentic tool-use loops, and LLM evaluation benchmarks.

### 3. Node.js Runtime & Systems Track
- **Guide**: [nodejs_interview_guide.html](nodejs_interview_guide.html) (100 Questions + 37 Diagrams)
- **Quiz**: [nodejs_100_question_quiz.html](nodejs_100_question_quiz.html) (100 Questions)
- **Atlas**: [nodejs_visual_atlas.html](nodejs_visual_atlas.html) (37 Concept Illustrations)
- **Key Focus**: Libuv event loop phases, microtask checkpoints, stream backpressure, Worker Threads, native buffers, memory leak profiling, and high-throughput networking.

### 4. React 19 & Architecture Track
- **Guide**: [react_interview_guide.html](react_interview_guide.html) (100 Questions)
- **Quiz**: [react_interview_quiz.html](react_interview_quiz.html) (100 Questions)
- **Key Focus**: React 19.3 features, React Compiler memoization, React Server Components (RSC), Suspense boundaries, Transitions, Actions, Activity, and Fiber reconciler internals.

### 5. Senior JavaScript Core Track
- **Guide**: [senior_javascript_study_guide.html](senior_javascript_study_guide.html) (100 Questions)
- **Quiz**: [senior_javascript_quiz_100.html](senior_javascript_quiz_100.html) (100 Questions)
- **Key Focus**: V8 execution engine, hidden classes, closures, prototype chain resolution, Promise resolution microtasks, garbage collection heuristics, and code execution tracing.

### 6. Senior Frontend Engineering Track
- **Guide & Quiz**: [senior_frontend_interview_100.html](senior_frontend_interview_100.html) (100 Questions + 6 Coding Solutions)
- **Key Focus**: Core Web Vitals (INP, LCP, CLS), browser rendering pipeline, layout thrashing, DOM optimization, frontend security (CSP, CORS, sanitization), and coding solutions.

### 7. Senior Backend & DevOps Track
- **Guide**: [senior_backend_devops_study_guide_illustrated.html](senior_backend_devops_study_guide_illustrated.html) (100 Answers + 50 Diagrams)
- **Quiz**: [senior_backend_devops_quiz_illustrated.html](senior_backend_devops_quiz_illustrated.html) (100 Questions)
- **Key Focus**: 50 illustrated architectural flows, Kubernetes controllers & reconcilers, GitOps reconciliation, SLSA supply-chain security, OpenTelemetry distributed tracing, and DORA deployment metrics.

### 8. System Design & Distributed Systems Track
- **Guide**: [system_design_guide.html](system_design_guide.html) (80 Scenario Questions)
- **Quiz**: [system_design_quiz.html](system_design_quiz.html) (50 Questions)
- **Key Focus**: CAP theorem trade-offs, consensus protocols (Raft, Paxos), database sharding & read replicas, cache-aside strategies, message queues (Kafka, RabbitMQ), rate limiters, and real-time streaming architectures.

---

## 💡 Study Methodology

1. **Active Recall**: Answer question prompts aloud or in code before opening answer details.
2. **Mechanics Over Memory**: Trace the execution diagram and explain *why* the design holds under failure.
3. **Timed Mock Drills**: Use the companion quiz in **Exam Mode** to test intuition under time pressure.
4. **Gap Remediation**: Review missed quiz items and jump directly back to the companion guide.

---

## 🔒 Offline Guarantee & Privacy
- **Zero CDNs**: All styling, logic, and SVG graphics are local and embedded.
- **Zero Telemetry**: No trackers, cookies, or remote analytics.
- **Local Progress**: Quiz attempts and mastered track statuses are saved exclusively in your browser's `localStorage`.
