/**
 * My AI Workspace - Portfolio Page Logic
 * Renders Builds 1-6 descriptions, verifies links, and syncs status from localStorage
 */

const STORAGE_KEYS = {
  PROJECTS: 'my_ai_workspace_projects'
};

const DEFAULT_PORTFOLIO_BUILDS = [
  {
    buildNum: 'Build 1',
    title: 'AI Tools Comparison',
    badge: 'Benchmarking & Analysis',
    desc: 'A structured evaluation matrix comparing ChatGPT, Gemini Notebook, Perplexity, and Antigravity across response speed, code generation accuracy, citation reliability, and academic depth for IMCA coursework.',
    keyOutcomes: [
      'Synthesized strengths and tradeoffs of major AI ecosystems for IMCA tasks',
      'Completed hands-on lab report comparing ChatGPT, Gemini, and Claude',
      'Established evaluation scoring matrix across accuracy, sources, clarity, and speed'
    ],
    defaultStatus: 'Completed',
    link: 'knowledge base/build_1_ai_tools_comparison.pdf.pdf'
  },
  {
    buildNum: 'Build 2',
    title: 'Personal Prompt Playbook',
    badge: 'Prompt Engineering',
    desc: 'A curated repository of 10+ reusable, tested prompts covering academic concepts, high-yield exam revision, numerical derivations, flashcards, active recall quizzes, and project planning.',
    keyOutcomes: [
      'Official assignment submission verified: Build 2 Completed',
      'Standardized prompt architectures (Role, Context, Task, Constraints, Format)',
      '10 tested prompts and 3 reusable templates saving hours during exam cramming'
    ],
    defaultStatus: 'Completed',
    link: 'knowledge base/build_2_personal_ai_study_kit.pdf.pdf'
  },
  {
    buildNum: 'Build 3',
    title: 'Personal AI Study Kit',
    badge: 'Active Learning & Retrieval',
    desc: 'An automated revision framework that takes raw lecture slides, syllabi, and textbook PDFs, converting them into spaced-repetition Anki flashcards, practice quizzes, and 5-mark/10-mark exam question sheets.',
    keyOutcomes: [
      'Placement aptitude revision kit with quantitative, logical, and verbal notes',
      '10-question MCQ quiz with detailed answer key and step-by-step explanations',
      '22 atomic flashcards and verified source validation checklist'
    ],
    defaultStatus: 'Completed',
    link: 'knowledge base/Build_3_Personal_AI_Study_Kit_Adarsh_Bairagi.pdf'
  },
  {
    buildNum: 'Build 4',
    title: 'Career Starter Pack',
    badge: 'Internship & Professional Prep',
    desc: 'A complete career preparation accelerator featuring professional recruiter cold emails, resume bullet-point enhancers, LinkedIn networking scripts, and coding interview viva preparation prompts.',
    keyOutcomes: [
      'Drafted job application portfolio tailored for CIS Trainee Software Developer role',
      'Includes targeted résumé, LinkedIn headline/about section, and email template',
      'Identified 7 core skill-gaps with an actionable practice plan; personal placeholders left for verification'
    ],
    defaultStatus: 'In Progress', // As verified in PDF: Ready-to-edit draft with placeholders
    link: 'knowledge base/build_4_career_starter_pack.pdf.pdf'
  },
  {
    buildNum: 'Build 5',
    title: '10-Step Prompt Chain — Python Basics',
    badge: 'Python Programming',
    desc: 'A sequential 10-step AI prompting pipeline engineered to master core Python programming: variables, operators, branching, loops, functions, data structures, strings, files, exceptions, and mini-project synthesis.',
    keyOutcomes: [
      '10-stage sequential chain designed with two verification checks and human checkpoint',
      'Curated core Python syllabus topics tailored for IMCA 2nd year curriculum',
      'Run log initialized; awaits live prompt execution and interpreter verification'
    ],
    defaultStatus: 'In Progress', // As verified in PDF: Run log marked 'Not run yet'
    link: 'knowledge base/Build_5_10_Step_Prompt_Chain_Python_Basics.pdf'
  },
  {
    buildNum: 'Build 6',
    title: 'Personal AI Operating System',
    badge: 'System Integration',
    desc: 'A single, unified dashboard connecting everyday tools, a prompt library, a knowledge base, and real-time project milestone tracking into a cohesive, sustainable daily study operating system.',
    keyOutcomes: [
      'Single source of truth for daily academic and coding tasks',
      'Client-side data persistence with responsive modern dark UI',
      'Seamless workflow transitioning between learning, coding, and review'
    ],
    defaultStatus: 'In Progress', // Active local dashboard implementation; no PDF in knowledge base
    link: 'index.html'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderPortfolioBuilds();
});

function setupNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
}

function renderPortfolioBuilds() {
  const container = document.getElementById('portfolioBuildsContainer');
  if (!container) return;

  const OLD_PATH_MAP = {
    'knowledge base/Hands-On Lab_ Comparing AI Tools - Adarsh Bairagi.pdf': 'knowledge base/build_1_ai_tools_comparison.pdf.pdf',
    'knowledge base/Personal Prompt Playbook - Build 2.pdf': 'knowledge base/build_2_personal_ai_study_kit.pdf.pdf',
    'knowledge base/Career_Starter_Pack_Assignment.pdf': 'knowledge base/build_4_career_starter_pack.pdf.pdf'
  };

  // Retrieve project statuses and links from localStorage if available
  let savedProjects = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (raw) savedProjects = JSON.parse(raw);
  } catch (e) {
    console.error('Error reading projects in portfolio:', e);
  }

  container.innerHTML = DEFAULT_PORTFOLIO_BUILDS.map((b, idx) => {
    // Find matching project in storage
    const matchingProj = savedProjects.find(p => p.buildNum === b.buildNum || p.id === `build-${idx + 1}`);
    const currentStatus = matchingProj ? matchingProj.status : b.defaultStatus;
    let linkToUse = (matchingProj && matchingProj.link && matchingProj.link.trim() !== '') ? matchingProj.link : b.link;
    if (OLD_PATH_MAP[linkToUse]) {
      linkToUse = OLD_PATH_MAP[linkToUse];
    }
    const badgeClass = getStatusBadgeClass(currentStatus);

    return `
      <div class="portfolio-build-card">
        <div class="portfolio-build-num">${b.buildNum} • <span style="color: var(--text-secondary);">${b.badge}</span></div>
        <h3 class="portfolio-build-title">${escapeHtml(b.title)}</h3>
        <p class="portfolio-build-desc">${escapeHtml(b.desc)}</p>
        
        <div style="margin-bottom: 16px;">
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-blue); font-weight: 700; display: block; margin-bottom: 6px;">Key Highlights:</span>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px;">
            ${b.keyOutcomes.map(outcome => `
              <li style="font-size: 0.82rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px;">
                <span style="color: var(--accent-violet); line-height: 1.4;">✓</span>
                <span>${escapeHtml(outcome)}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="portfolio-build-meta">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Current Status:</span>
            <span class="badge ${badgeClass}" style="margin-left: 6px;">${escapeHtml(currentStatus)}</span>
          </div>
          ${linkToUse ? `
            <a href="${encodeURI(linkToUse)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Open ${escapeHtml(b.title)}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>${linkToUse.toLowerCase().endsWith('.pdf') ? 'View PDF' : 'Open'}</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'Completed': return 'badge-green';
    case 'In Progress': return 'badge-amber';
    case 'Needs Review': return 'badge-blue';
    default: return 'badge-violet';
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
