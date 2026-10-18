/**
 * Prompts Library Data for My AI Workspace
 * Designed specifically for IMCA 2nd Year Student (Exams, Python, AI Skills, Internships)
 */

const PROMPTS_DATA = [
  {
    id: "prompt-1",
    name: "Academic Concept Explainer",
    category: "Academic Concepts",
    bestTool: "ChatGPT / Gemini",
    whenToUse: "When learning difficult theoretical concepts in Computer Science, DBMS, OS, Data Structures, or AI.",
    notes: "Uses the Feynman technique: intuitive real-world analogy first, formal academic definition, key components, and common exam pitfalls.",
    template: `Act as a senior Computer Science professor and expert educator. 

Please explain the concept of "[INSERT CONCEPT HERE, e.g. B-Trees / Polymorphism / Deadlock in OS]" for an IMCA second-year student.

Structure your response into the following clear sections:
1. Plain-English Intuitive Analogy: Explain it like I am 12 using an everyday situation.
2. Formal Technical Definition: Clear, textbook-accurate definition suitable for an exam answer.
3. Core Components & Working Mechanism: Step-by-step breakdown of how it works under the hood.
4. Concrete Code / Diagrammatic Example: Provide a simple, annotated Python snippet or ASCII diagram.
5. Common Exam Pitfalls & Misconceptions: What do students typically confuse this with?
6. Quick 2-Minute Review Summary: 3 bullet points to memorize before walking into an exam.`
  },
  {
    id: "prompt-2",
    name: "High-Yield Exam Note Generator",
    category: "Exam Prep",
    bestTool: "Gemini Notebook / ChatGPT",
    whenToUse: "When creating concise revision sheets from lengthy textbook chapters, lecture slides, or syllabus modules.",
    notes: "Formats notes specifically tailored for university exam scoring patterns (definitions, 5-mark answers, comparison tables).",
    template: `Act as an academic tutor preparing high-scoring university revision notes.

Topic / Syllabus Module: "[INSERT SUBJECT & TOPIC, e.g. Relational Algebra in DBMS / Process Scheduling in OS]"
Target Exam: IMCA Semester Theory Exam (University Level)

Generate a comprehensive yet concise revision sheet with:
1. Key Definitions & Terminology: 5-8 essential keywords with authoritative 1-sentence definitions.
2. Core Theory (5-Mark Answer Format): The central concepts explained in structured bullet points.
3. Comparative Table: If applicable, create a clean Markdown table comparing this concept to its main alternative (e.g., Process vs Thread, Preemptive vs Non-Preemptive).
4. Typical 10-Mark Question Outline: How to structure a long answer (Introduction, Architecture/Steps, Example, Advantages & Limitations).
5. Must-Draw Diagrams: Describe the exact diagrams that earn maximum marks in this topic.
6. Formula / Syntax Cheat Sheet: Any mathematical expressions, algorithmic complexities, or syntax rules.`
  },
  {
    id: "prompt-3",
    name: "Step-by-Step Numerical Problem Solver",
    category: "Numerical & Logic",
    bestTool: "ChatGPT (GPT-4o) / Perplexity",
    whenToUse: "When solving discrete mathematics, algorithm time complexity, IP subnetting, CPU scheduling times, or memory management calculations.",
    notes: "Forces the model to show all intermediate work, formula derivations, and sanity checks to prevent arithmetic hallucinations.",
    template: `Act as an expert STEM and Computer Science tutor specializing in numerical problem solving.

Problem Statement:
"""
[PASTE YOUR NUMERICAL PROBLEM HERE, e.g., Calculate turnaround time & waiting time for Round Robin scheduling with time quantum 2ms...]
"""

Please solve this step-by-step following this rigorous structure:
1. Given Data & Variables: Clearly list all input parameters, values, and units.
2. Governing Formulas & Principles: State every formula and theorem used before calculating.
3. Step-by-Step Calculation: Show every single intermediate mathematical step with units. Do not skip any algebra.
4. Tabular Summary / Execution Timeline: If applicable (e.g., Gantt chart, page replacement string table), render a clean text-based table.
5. Final Answer Box: Highlight the exact final values clearly.
6. Sanity & Verification Check: Explain why this answer makes sense logically and how to verify it under exam pressure.`
  },
  {
    id: "prompt-4",
    name: "Active Recall MCQ & Quiz Generator",
    category: "Quizzes & Assessment",
    bestTool: "ChatGPT / Antigravity",
    whenToUse: "After revising a chapter to test your understanding, identify knowledge gaps, and prepare for objective tests.",
    notes: "Includes realistic distractors based on common student misconceptions. Keeps answers hidden at the bottom for genuine testing.",
    template: `Act as a university exam coordinator designing an assessment for IMCA students.

Topic: "[INSERT TOPIC, e.g. Python Exception Handling & Custom Exceptions / Normal Forms in DBMS]"
Difficulty Level: Intermediate to Advanced (University Exam standard)

Create a 5-question active recall test structured as follows:
- Questions 1-3: Multiple Choice Questions (4 options: A, B, C, D) with realistic distractors that test edge cases or subtle distinctions.
- Question 4: "Find the Bug / Predict the Output" snippet question.
- Question 5: One conceptual short-answer question (2 sentences max).

IMPORTANT: Do not reveal the answers immediately. Place a clear separator (---) followed by the Answer Key with detailed explanations for why each option is correct or incorrect at the very end so I can test myself first.`
  },
  {
    id: "prompt-5",
    name: "Anki & Spaced Repetition Flashcard Builder",
    category: "Flashcards",
    bestTool: "ChatGPT / Gemini",
    whenToUse: "When memorizing syntax rules, design patterns, definitions, HTTP status codes, or Big-O complexities for long-term retention.",
    notes: "Formats cards using the atomic question principle (one single fact per card). Can be imported directly into Anki or Quizlet.",
    template: `Act as a spaced-repetition memory coach.

I am studying: "[INSERT TOPIC, e.g. Python Built-in Data Structures & Time Complexities / Computer Networks OSI Layers]"

Convert this subject matter into 10 high-impact atomic flashcards adhering to effective memory rules:
- One single fact or relationship per card.
- Avoid vague or multi-part questions.
- Keep answers concise and punchy.

Output format:
Card [Number]
Front: [Clear, specific question or prompt]
Back: [Precise, concise answer + one brief memory hook or trick]

At the end, also provide the entire set as Tab-Separated Values (TSV) in a code block so I can copy-paste directly into Anki.`
  },
  {
    id: "prompt-6",
    name: "Academic Research with Verified Sources",
    category: "Research",
    bestTool: "Perplexity",
    whenToUse: "When doing literature review, exploring modern AI architectures (LLMs, RAG, Agents), or preparing seminar presentations.",
    notes: "Instructs the AI to focus strictly on reputable academic papers (IEEE, ACM, arXiv), official documentation, and primary sources.",
    template: `Act as an academic research assistant for Computer Science and Applied AI.

Research Query / Topic: "[INSERT RESEARCH TOPIC, e.g. Retrieval-Augmented Generation (RAG) vs Fine-Tuning for Enterprise Knowledge Bases]"

Provide an objective, citation-backed research briefing:
1. Executive Summary: What is the current consensus and state-of-the-art?
2. Technical Comparison / Key Mechanisms: How do the primary approaches compare in architecture, cost, latency, and accuracy?
3. Foundational Research & Breakthrough Papers: Cite 3-5 landmark papers (include title, primary authors, year, and key contribution).
4. Real-World Industry Benchmarks: How are top tech companies implementing this in production?
5. Open Challenges & Future Directions: Key research problems currently unsolved.
6. Primary Sources & Further Reading: Provide authoritative references and search queries for IEEE Xplore, Google Scholar, and arXiv.`
  },
  {
    id: "prompt-7",
    name: "Executive Academic Document Summariser",
    category: "Summarisation",
    bestTool: "Gemini Notebook / ChatGPT",
    whenToUse: "When analyzing long PDF research papers, vendor whitepapers, documentation pages, or lengthy textbook chapters.",
    notes: "Saves hours by distilling 20-30 pages into actionable insights, methodologies, and limitations without losing critical details.",
    template: `Act as an expert technical analyst and academic reviewer.

Here is the document / text I need to understand:
"""
[PASTE DOCUMENT TEXT OR EXCERPT HERE]
"""

Please provide a structured Executive Summary designed for rapid comprehension:
1. TL;DR (30 Seconds): 2-3 sentences capturing the core thesis, method, and key takeaway.
2. The Core Problem: What specific technical or theoretical gap is this addressing?
3. Proposed Methodology / Solution: Step-by-step explanation of the authors' approach or system architecture.
4. Key Results & Metrics: Concrete findings, performance numbers, benchmarks, or case study outcomes.
5. Critical Limitations & Weaknesses: What did the authors overlook, or what constraints exist?
6. Practical Relevance for My IMCA Studies / Projects: How can I apply these principles in my own Python/AI project?`
  },
  {
    id: "prompt-8",
    name: "Python Code Reviewer & Optimizer",
    category: "Python Programming",
    bestTool: "Antigravity / ChatGPT",
    whenToUse: "Before submitting programming lab assignments, pushing to GitHub, or preparing code for project viva evaluations.",
    notes: "Evaluates PEP 8 style, time/space complexity (Big-O), bug risks, edge cases, and provides an elegant, production-grade refactored version.",
    template: `Act as a Principal Python Software Engineer and code reviewer.

Here is my Python code for [MENTION PURPOSE / ASSIGNMENT, e.g. Binary Search Tree implementation / Student Management CLI]:
\`\`\`python
[PASTE YOUR PYTHON CODE HERE]
\`\`\`

Perform a comprehensive code review covering:
1. Code Quality & PEP 8 Standards: Variable naming, docstrings, type hinting, and idiomatic Pythonic patterns.
2. Algorithmic Complexity: Exact Time and Space Complexity in Big-O notation with analysis.
3. Potential Bugs & Edge Cases: Identify any uncaught exceptions, NoneType errors, off-by-one errors, or resource leaks.
4. Production-Grade Refactored Code: Provide a cleanly written, fully commented, modern Python 3.10+ version implementing best practices.
5. Step-by-Step Rationale: Explain why your refactored version is cleaner, faster, or more maintainable.
6. Viva Questions: 3 technical questions a professor or interviewer might ask about this specific code.`
  },
  {
    id: "prompt-9",
    name: "Professional Internship & Academic Email Drafter",
    category: "Professional Communication",
    bestTool: "ChatGPT / Gemini",
    whenToUse: "When writing cold outreach emails to recruiters, applying for AI/Software internships, or emailing professors.",
    notes: "Creates polite, crisp, and high-conversion emails with strong subject lines, respectful tone, and clear call-to-action.",
    template: `Act as a senior career mentor and communications specialist for Computer Applications students.

Goal: [SPECIFY GOAL, e.g. Cold email to a Tech Recruiter / Startup Founder for a Python/AI Winter Internship OR Asking a Professor for a Letter of Recommendation]
Recipient Role: [e.g. Engineering Manager at XYZ Tech / Academic HOD]
My Key Credentials: [e.g. IMCA 2nd year student, top 10% in coursework, built 3 full-stack/AI Python projects, strong in Data Structures & Prompt Engineering]
Attachment / Portfolio Link: [e.g. GitHub link & Portfolio website]

Draft two variations of the email:
Option 1: Direct & Concise (Ideal for busy industry professionals, under 150 words).
Option 2: Formal & Academic (Ideal for university professors or corporate formal programs).

For both options, include:
- 3 high-impact Subject Line options with high open rates.
- Salutation and personalized opening hook.
- Value proposition (what I can contribute, not just what I want).
- Clean call to action (e.g. requesting a brief 10-minute introductory call).
- Professional sign-off and signature template.`
  },
  {
    id: "prompt-10",
    name: "MCA Capstone & Mini-Project Roadmap Planner",
    category: "Project Planning",
    bestTool: "ChatGPT / Antigravity",
    whenToUse: "When starting semester mini-projects or capstone portfolios to ensure clear milestones, architecture, and deliverables.",
    notes: "Prevents scope creep and panic before deadlines. Gives a realistic week-by-week implementation roadmap.",
    template: `Act as a Senior Software Architect and Academic Project Guide.

Project Idea / Title: "[INSERT PROJECT IDEA, e.g. AI-Powered Smart Study Companion using Python, FastAPI & LLM API]"
Target Timeline: [e.g. 4 Weeks / 1 Month]
My Current Skill Level: IMCA Second-Year (Comfortable with Python basics, SQL, learning Web APIs and AI integrations)

Generate an end-to-end Project Execution Plan containing:
1. Scope & Minimum Viable Product (MVP): Define exactly what features are essential for the MVP vs nice-to-have stretch goals.
2. Recommended Tech Stack: Beginner-to-intermediate friendly technologies (Languages, Frameworks, Database, AI APIs, Hosting).
3. System Architecture Overview: High-level data flow diagram (in ASCII/text) explaining how components communicate.
4. Week-by-Week Milestone Breakdown:
   - Week 1: Environment setup, data models & backend core.
   - Week 2: Business logic, AI integration & prompt pipelines.
   - Week 3: User interface / CLI & API testing.
   - Week 4: Bug fixing, documentation, PPT creation & GitHub presentation.
5. Project Report & Viva Prep: 5 key points that will impress academic evaluators during project defense.`
  }
];

// Helper to get category list
function getCategories() {
  const categories = new Set(PROMPTS_DATA.map(p => p.category));
  return ["All", ...Array.from(categories)];
}
