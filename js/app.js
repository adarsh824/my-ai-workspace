/**
 * My AI Workspace - Main Dashboard Application Logic
 * Tailored for IMCA 2nd Year Student
 */

// Storage Keys
const STORAGE_KEYS = {
  TOOLS: 'my_ai_workspace_tools',
  KB: 'my_ai_workspace_knowledge_base',
  PROJECTS: 'my_ai_workspace_projects',
};

// Default Tools Data
const DEFAULT_TOOLS = [
  {
    id: 'tool-chatgpt',
    name: 'ChatGPT',
    badge: 'Reasoning & Coding',
    icon: '⚡',
    desc: 'General reasoning, conceptual explanations, logic checking, and quick Python code ideation.',
    defaultUrl: 'https://chat.openai.com',
  },
  {
    id: 'tool-gemini',
    name: 'Gemini Notebook',
    badge: 'Study & Multimodal',
    icon: '💎',
    desc: 'NotebookLM & Gemini for synthesizing research papers, syllabus documents, and exam notes.',
    defaultUrl: 'https://notebooklm.google.com',
  },
  {
    id: 'tool-perplexity',
    name: 'Perplexity',
    badge: 'Sourced Research',
    icon: '🔍',
    desc: 'Real-time academic citations, verifying algorithm facts, and live tech documentation research.',
    defaultUrl: 'https://www.perplexity.ai',
  },
  {
    id: 'tool-antigravity',
    name: 'Antigravity',
    badge: 'AI Coding Assistant',
    icon: '🚀',
    desc: 'Pair programming, deep codebase exploration, script refactoring, and automated workspace workflows.',
    defaultUrl: 'https://github.com',
  }
];

// Default Projects Data - Supported strictly by verified files on disk
const DEFAULT_PROJECTS = [
  {
    id: 'build-1',
    buildNum: 'Build 1',
    title: 'AI Tools Comparison',
    desc: 'Systematic analysis comparing ChatGPT, Gemini, Perplexity and Antigravity across speed, reasoning, coding, and citation accuracy for IMCA coursework.',
    status: 'Completed', // Supported by build_1_ai_tools_comparison.pdf.pdf
    link: 'knowledge base/build_1_ai_tools_comparison.pdf.pdf'
  },
  {
    id: 'build-2',
    buildNum: 'Build 2',
    title: 'Personal Prompt Playbook',
    desc: 'Curated repository of tested prompts for exam revisions, Python coding, numerical algorithms, and project planning.',
    status: 'Completed', // Supported by build_2_personal_ai_study_kit.pdf.pdf (Status: Build 2 Completed)
    link: 'knowledge base/build_2_personal_ai_study_kit.pdf.pdf'
  },
  {
    id: 'build-3',
    buildNum: 'Build 3',
    title: 'Personal AI Study Kit',
    desc: 'Modular framework transforming syllabus modules, lecture notes, and textbook PDFs into active recall flashcards and practice quizzes.',
    status: 'Completed', // Supported by Build_3_Personal_AI_Study_Kit_Adarsh_Bairagi.pdf
    link: 'knowledge base/Build_3_Personal_AI_Study_Kit_Adarsh_Bairagi.pdf'
  },
  {
    id: 'build-4',
    buildNum: 'Build 4',
    title: 'Career Starter Pack',
    desc: 'Internship readiness hub: professional cold email templates, tech resume prompt chains, LinkedIn networking scripts, and coding interview prep.',
    status: 'In Progress', // Supported by build_4_career_starter_pack.pdf.pdf: Ready-to-edit draft with placeholders
    link: 'knowledge base/build_4_career_starter_pack.pdf.pdf'
  },
  {
    id: 'build-5',
    buildNum: 'Build 5',
    title: '10-Step Prompt Chain',
    desc: 'Sequential 10-step AI prompting pipeline to master core Python programming: from variables and loops to OOP and exception handling.',
    status: 'In Progress', // Supported by Build_5_10_Step_Prompt_Chain_Python_Basics.pdf: Run log marked 'Not run yet', requires live execution
    link: 'knowledge base/Build_5_10_Step_Prompt_Chain_Python_Basics.pdf'
  },
  {
    id: 'build-6',
    buildNum: 'Build 6',
    title: 'Personal AI Operating System',
    desc: 'Unified personal dashboard integrating tools, prompts, knowledge base, and project milestones into one repeatable daily workflow.',
    status: 'In Progress', // Workspace in active local development; no completed PDF on disk
    link: 'index.html'
  }
];

// Verified Real Knowledge Base Assignment PDFs (Current exact filenames in 'knowledge base' folder)
const DEFAULT_KB_ITEMS = [
  {
    id: 'kb-file-build-2',
    sectionId: 'build-2-playbook',
    title: 'build_2_personal_ai_study_kit.pdf.pdf',
    type: 'file',
    location: 'knowledge base/build_2_personal_ai_study_kit.pdf.pdf',
    notes: 'Official Build 2 assignment submission by Adarsh Bairagi (IMCA 2nd Year). Status: Build 2 Completed with 10 tested prompts and 3 reusable templates.',
    createdAt: '14/10/2026'
  },
  {
    id: 'kb-file-build-3',
    sectionId: 'build-3-study-kit',
    title: 'Build_3_Personal_AI_Study_Kit_Adarsh_Bairagi.pdf',
    type: 'file',
    location: 'knowledge base/Build_3_Personal_AI_Study_Kit_Adarsh_Bairagi.pdf',
    notes: 'Official Build 3 placement aptitude revision kit containing formulas, a 10-question MCQ quiz with full explanations, 22 flashcards, and verified sources.',
    createdAt: '17/10/2026'
  },
  {
    id: 'kb-file-build-5',
    sectionId: 'build-5-chain',
    title: 'Build_5_10_Step_Prompt_Chain_Python_Basics.pdf',
    type: 'file',
    location: 'knowledge base/Build_5_10_Step_Prompt_Chain_Python_Basics.pdf',
    notes: 'Official Build 5 design guide: 10-step prompt chain for Python basics, 2 code check stages, human checkpoint, and run log.',
    createdAt: '17/10/2026'
  },
  {
    id: 'kb-file-build-1',
    sectionId: 'academic-resources',
    title: 'build_1_ai_tools_comparison.pdf.pdf',
    type: 'file',
    location: 'knowledge base/build_1_ai_tools_comparison.pdf.pdf',
    notes: 'Official Build 1 report: Benchmarking ChatGPT, Gemini, and Claude on explanation, research, and writing tasks with evaluation scoring matrix.',
    createdAt: '13/10/2026'
  },
  {
    id: 'kb-file-build-4',
    sectionId: 'academic-resources',
    title: 'build_4_career_starter_pack.pdf.pdf',
    type: 'file',
    location: 'knowledge base/build_4_career_starter_pack.pdf.pdf',
    notes: 'Official Build 4 draft: Job application portfolio tailored to CIS Trainee Developer role with editable placeholders for applicant details.',
    createdAt: '16/10/2026'
  }
];

// 10-Step Prompt Chain Reference Data for Python Basics
const PYTHON_10_STEPS = [
  { step: 1, title: 'Syntax & Dynamic Variables', promptText: 'Act as a Python mentor. Explain Python variables, type inference, and memory references with an interactive code demonstration.' },
  { step: 2, title: 'Operators & Logical Expressions', promptText: 'Demonstrate arithmetic, bitwise, comparison, and logical operators in Python with edge cases (short-circuit evaluation).' },
  { step: 3, title: 'Control Flow (if-elif-else)', promptText: 'Explain clean Python branching strategies, ternary expressions, and avoiding deep nesting with real-world student grading logic.' },
  { step: 4, title: 'Loops & Iterations', promptText: 'Compare for-loops, while-loops, enumerate(), zip(), and range() with performance best practices and common infinite loop pitfalls.' },
  { step: 5, title: 'Functions, Scope & Lambdas', promptText: 'Deep dive into Python functions: LEGB variable scope, *args, **kwargs, default argument traps, and anonymous lambda functions.' },
  { step: 6, title: 'Lists, Tuples, Sets & Dictionaries', promptText: 'Provide a comparative Big-O complexity guide and CRUD examples for built-in Python collections with list/dict comprehensions.' },
  { step: 7, title: 'String Manipulation & Regex', promptText: 'Show modern f-strings, string slicing methods, immutability, and practical regular expressions for email and phone extraction.' },
  { step: 8, title: 'File Handling & Context Managers', promptText: 'Demonstrate reading, writing, and appending CSV/text files using "with open(...)" context managers to ensure safe resource cleanup.' },
  { step: 9, title: 'Robust Exception Handling', promptText: 'Explain try-except-else-finally blocks, catching specific built-in exceptions, and creating domain-specific custom Exception classes.' },
  { step: 10, title: 'Mini-Project Integration', promptText: 'Synthesize all 9 steps into a complete, clean, object-oriented Student Record Management CLI system with documentation.' }
];

// App State
let appState = {
  tools: [],
  kbItems: [],
  projects: [],
  activeCategory: 'All',
  searchQuery: ''
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupNavigation();
  renderTools();
  renderPrompts();
  renderKnowledgeBase();
  renderProjects();
  updateStats();
  setupEventListeners();
  renderPythonChainPreview();
});

// Load persistent data from LocalStorage
function loadData() {
  const OLD_PATH_MAP = {
    'knowledge base/Hands-On Lab_ Comparing AI Tools - Adarsh Bairagi.pdf': 'knowledge base/build_1_ai_tools_comparison.pdf.pdf',
    'knowledge base/Personal Prompt Playbook - Build 2.pdf': 'knowledge base/build_2_personal_ai_study_kit.pdf.pdf',
    'knowledge base/Career_Starter_Pack_Assignment.pdf': 'knowledge base/build_4_career_starter_pack.pdf.pdf'
  };

  try {
    const savedTools = localStorage.getItem(STORAGE_KEYS.TOOLS);
    appState.tools = savedTools ? JSON.parse(savedTools) : DEFAULT_TOOLS;

    const savedKB = localStorage.getItem(STORAGE_KEYS.KB);
    if (!savedKB || JSON.parse(savedKB).length === 0) {
      appState.kbItems = [...DEFAULT_KB_ITEMS];
      localStorage.setItem(STORAGE_KEYS.KB, JSON.stringify(appState.kbItems));
    } else {
      let parsedKB = JSON.parse(savedKB);
      // Migrate any old filenames to new ones
      parsedKB = parsedKB.map(item => {
        if (OLD_PATH_MAP[item.location]) {
          const newLoc = OLD_PATH_MAP[item.location];
          return {
            ...item,
            location: newLoc,
            title: newLoc.replace('knowledge base/', '')
          };
        }
        // Match default items by ID
        const def = DEFAULT_KB_ITEMS.find(d => d.id === item.id);
        if (def) {
          return {
            ...item,
            location: def.location,
            title: def.title
          };
        }
        return item;
      });

      // Ensure all 5 real PDF files are always present
      const existingLocations = new Set(parsedKB.map(item => item.location));
      const missingDefaults = DEFAULT_KB_ITEMS.filter(d => !existingLocations.has(d.location));
      appState.kbItems = [...parsedKB, ...missingDefaults];
      localStorage.setItem(STORAGE_KEYS.KB, JSON.stringify(appState.kbItems));
    }

    const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (!savedProjects) {
      appState.projects = [...DEFAULT_PROJECTS];
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(appState.projects));
    } else {
      // Sync with DEFAULT_PROJECTS links and verified statuses
      const parsedProjects = JSON.parse(savedProjects);
      appState.projects = DEFAULT_PROJECTS.map(def => {
        const found = parsedProjects.find(p => p.id === def.id);
        if (!found) return def;
        let link = found.link;
        if (OLD_PATH_MAP[link]) {
          link = OLD_PATH_MAP[link];
        } else if (!link || link === '' || link.includes('Hands-On') || link.includes('Prompt Playbook') || link.includes('Starter_Pack_Assignment')) {
          link = def.link;
        }
        return {
          ...def,
          status: found.status || def.status,
          link: link
        };
      });
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(appState.projects));
    }
  } catch (e) {
    console.error('Error loading localStorage data:', e);
    appState.tools = DEFAULT_TOOLS;
    appState.kbItems = [...DEFAULT_KB_ITEMS];
    appState.projects = [...DEFAULT_PROJECTS];
  }
}

// Setup Mobile & Navigation
function setupNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
}

// 1. RENDER TOOLS
function renderTools() {
  const container = document.getElementById('toolsContainer');
  if (!container) return;

  container.innerHTML = appState.tools.map((tool, index) => `
    <div class="tool-card" data-id="${tool.id}">
      <div class="tool-header">
        <div class="tool-logo">${tool.icon}</div>
        <div class="tool-info">
          <h3>${tool.name}</h3>
          <span class="tool-tag">${tool.badge}</span>
        </div>
      </div>
      <p class="tool-desc">${tool.desc}</p>
      <div class="tool-link-group">
        <label class="tool-link-label" for="tool-input-${index}">Workspace / Web Link:</label>
        <div class="tool-input-row">
          <input 
            type="url" 
            id="tool-input-${index}" 
            class="input-text tool-url-input" 
            value="${escapeHtml(tool.defaultUrl || '')}" 
            placeholder="https://..."
          />
          <button class="btn btn-secondary btn-sm" onclick="saveToolUrl('${tool.id}', ${index})" title="Save custom link">
            Save
          </button>
        </div>
        <div class="tool-actions">
          <button class="btn btn-primary" onclick="launchTool('${tool.id}', ${index})">
            <span>Launch ${tool.name}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Save Tool URL
window.saveToolUrl = function(toolId, inputIndex) {
  const input = document.getElementById(`tool-input-${inputIndex}`);
  if (!input) return;

  const url = input.value.trim();
  const tool = appState.tools.find(t => t.id === toolId);
  if (tool) {
    tool.defaultUrl = url;
    localStorage.setItem(STORAGE_KEYS.TOOLS, JSON.stringify(appState.tools));
    showToast(`Saved link for ${tool.name}!`);
  }
};

// Launch Tool
window.launchTool = function(toolId, inputIndex) {
  const input = document.getElementById(`tool-input-${inputIndex}`);
  const url = input ? input.value.trim() : '';
  if (!url) {
    showToast('Please enter a valid link first.', 'error');
    return;
  }
  const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
  window.open(formattedUrl, '_blank', 'noopener,noreferrer');
};

// 2. RENDER PROMPTS
function renderPrompts() {
  const container = document.getElementById('promptsContainer');
  const filtersContainer = document.getElementById('categoryFilters');
  if (!container) return;

  // Render Filters once if empty
  if (filtersContainer && filtersContainer.children.length === 0) {
    const categories = getCategories();
    filtersContainer.innerHTML = categories.map(cat => `
      <button 
        class="filter-btn ${cat === appState.activeCategory ? 'active' : ''}" 
        onclick="setCategoryFilter('${cat}')"
      >
        ${cat}
      </button>
    `).join('');
  }

  // Filter & Search
  const query = appState.searchQuery.toLowerCase();
  const filtered = PROMPTS_DATA.filter(p => {
    const matchesCategory = appState.activeCategory === 'All' || p.category === appState.activeCategory;
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.whenToUse.toLowerCase().includes(query) ||
      p.notes.toLowerCase().includes(query) ||
      p.template.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const countBadge = document.getElementById('promptCountBadge');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} of ${PROMPTS_DATA.length} Prompts`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--bg-secondary); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <p style="color: var(--text-muted); font-size: 1rem;">No prompts found matching "${escapeHtml(appState.searchQuery)}" in category "${escapeHtml(appState.activeCategory)}".</p>
        <button class="btn btn-secondary" style="margin-top: 12px;" onclick="resetPromptFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prompt => `
    <div class="prompt-card" id="${prompt.id}">
      <div class="prompt-card-top">
        <h3 class="prompt-name">${escapeHtml(prompt.name)}</h3>
        <span class="badge badge-blue">${escapeHtml(prompt.category)}</span>
      </div>

      <div class="prompt-meta-row">
        <span class="badge badge-violet">⚡ Best Tool: ${escapeHtml(prompt.bestTool)}</span>
      </div>

      <div class="prompt-field">
        <span class="prompt-field-label">When to Use:</span>
        <p class="prompt-field-content">${escapeHtml(prompt.whenToUse)}</p>
      </div>

      <div class="prompt-field">
        <span class="prompt-field-label">Notes & Tips:</span>
        <p class="prompt-field-content">${escapeHtml(prompt.notes)}</p>
      </div>

      <div class="prompt-field" style="margin-top: 8px;">
        <span class="prompt-field-label">Template Preview:</span>
        <div class="prompt-template-preview">${escapeHtml(prompt.template)}</div>
      </div>

      <div class="prompt-footer">
        <button class="btn btn-secondary" onclick="viewPromptDetails('${prompt.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>View Full</span>
        </button>
        <button class="btn btn-primary btn-copy" id="copy-btn-${prompt.id}" onclick="copyPrompt('${prompt.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Template</span>
        </button>
      </div>
    </div>
  `).join('');
}

// Category filter click
window.setCategoryFilter = function(category) {
  appState.activeCategory = category;
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === category);
  });
  renderPrompts();
};

window.resetPromptFilters = function() {
  appState.activeCategory = 'All';
  appState.searchQuery = '';
  const searchInput = document.getElementById('promptSearchInput');
  if (searchInput) searchInput.value = '';
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === 'All');
  });
  renderPrompts();
};

// Copy Prompt with visual feedback
window.copyPrompt = function(promptId) {
  const prompt = PROMPTS_DATA.find(p => p.id === promptId);
  if (!prompt) return;

  navigator.clipboard.writeText(prompt.template).then(() => {
    const btn = document.getElementById(`copy-btn-${promptId}`);
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Copied!</span>
      `;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('copied');
      }, 2000);
    }
    showToast(`Copied "${prompt.name}" template to clipboard!`);
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
    showToast('Failed to copy to clipboard.', 'error');
  });
};

// View Full Prompt Details Modal
window.viewPromptDetails = function(promptId) {
  const prompt = PROMPTS_DATA.find(p => p.id === promptId);
  if (!prompt) return;

  const modalBody = document.getElementById('promptModalBody');
  const modalTitle = document.getElementById('promptModalTitle');
  if (!modalBody || !modalTitle) return;

  modalTitle.textContent = prompt.name;
  modalBody.innerHTML = `
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
      <span class="badge badge-blue">Category: ${escapeHtml(prompt.category)}</span>
      <span class="badge badge-violet">Best Tool: ${escapeHtml(prompt.bestTool)}</span>
    </div>
    <div class="form-group">
      <label class="form-label">When to Use:</label>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${escapeHtml(prompt.whenToUse)}</p>
    </div>
    <div class="form-group">
      <label class="form-label">Notes & Strategies:</label>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${escapeHtml(prompt.notes)}</p>
    </div>
    <div class="form-group">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <label class="form-label">Reusable Prompt Template:</label>
        <button class="btn btn-primary btn-sm" onclick="copyPrompt('${prompt.id}')">Copy Prompt</button>
      </div>
      <textarea class="form-textarea" style="min-height: 220px; font-family: var(--font-mono); font-size: 0.85rem;" readonly>${escapeHtml(prompt.template)}</textarea>
    </div>
  `;

  openModal('promptModal');
};

// 3. RENDER KNOWLEDGE BASE
// Real links or files only. No fake links or pretend files!
const KB_SECTIONS = [
  { id: 'build-2-playbook', title: 'Build 2: Personal Prompt Playbook', icon: '📖', desc: 'Your tested prompts, custom modifications, and exam workflows.' },
  { id: 'build-3-study-kit', title: 'Build 3: Personal AI Study Kit', icon: '🎒', desc: 'Syllabus notes, generated flashcards, and lecture summary files.' },
  { id: 'build-5-chain', title: 'Build 5: 10-Step Prompt Chain — Python Basics', icon: '🐍', desc: 'Sequential learning chain links, Python notebooks, and exercise solutions.' },
  { id: 'academic-resources', title: 'Academic Notes & Learning Resources', icon: '📚', desc: 'Semester syllabus links, official documentation, textbook references, and Drive folders.' }
];

function renderKnowledgeBase() {
  const container = document.getElementById('kbSectionsContainer');
  if (!container) return;

  container.innerHTML = KB_SECTIONS.map(section => {
    const items = appState.kbItems.filter(item => item.sectionId === section.id);

    return `
      <div class="kb-section-card" data-section="${section.id}">
        <div class="kb-section-header">
          <h3 class="kb-section-title">
            <span>${section.icon}</span>
            <span>${escapeHtml(section.title)}</span>
          </h3>
          <span class="badge badge-blue">${items.length} ${items.length === 1 ? 'item' : 'items'}</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 14px;">${section.desc}</p>
        
        ${section.id === 'build-5-chain' ? `
          <div class="python-chain-box">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-violet);">Built-in Guide: 10-Step Python Chain</span>
              <button class="btn btn-secondary btn-sm" onclick="toggleChainPreview()">Toggle Steps</button>
            </div>
            <div id="pythonChainPreviewWrapper" class="chain-steps-list" style="display: none;">
              ${PYTHON_10_STEPS.map(s => `
                <div class="chain-step">
                  <span class="chain-step-num">Step ${s.step}</span>
                  <span style="font-weight: 600;">${escapeHtml(s.title)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <ul class="kb-items-list" id="kb-list-${section.id}">
          ${items.length === 0 ? `
            <div class="kb-empty-notice">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 6px; opacity: 0.6;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <div>No files or links added yet.</div>
              <div style="font-size: 0.75rem; margin-top: 4px; opacity: 0.7;">Click "+ Add Real Resource" below to attach your real files or study links.</div>
            </div>
          ` : items.map(item => `
            <li class="kb-item">
              <div class="kb-item-info">
                <span class="kb-item-title">${escapeHtml(item.title)}</span>
                <div class="kb-item-meta">
                  <span>${item.type === 'file' ? '📁 Local File' : '🔗 Web Link'}</span>
                  <span>•</span>
                  <span>${escapeHtml(item.location)}</span>
                </div>
                ${item.notes ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 3px;">${escapeHtml(item.notes)}</div>` : ''}
              </div>
              <div class="kb-item-actions">
                <a href="${encodeURI(item.location)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Open ${escapeHtml(item.title)}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>${item.location.toLowerCase().endsWith('.pdf') ? 'Open PDF' : 'Open'}</span>
                </a>
                <button class="btn btn-secondary btn-sm" onclick="copyKbItemPath('${item.id}')" title="Copy File Path">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="deleteKbItem('${item.id}')" title="Remove" style="color: #f87171;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </li>
          `).join('')}
        </ul>

        <div class="kb-add-btn-wrap">
          <button class="btn btn-outline" style="width: 100%;" onclick="openAddResourceModal('${section.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>+ Add Real Resource</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleChainPreview = function() {
  const el = document.getElementById('pythonChainPreviewWrapper');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  }
};

window.renderPythonChainPreview = function() {
  // Handled inside renderKnowledgeBase
};

// Modal for Adding Real Knowledge Base Resource
window.openAddResourceModal = function(sectionId) {
  const select = document.getElementById('kbModalSection');
  if (select && sectionId) {
    select.value = sectionId;
  }
  openModal('kbModal');
};

// Save KB Item
window.saveKbItem = function() {
  const sectionId = document.getElementById('kbModalSection').value;
  const title = document.getElementById('kbModalTitle').value.trim();
  const type = document.getElementById('kbModalType').value;
  const location = document.getElementById('kbModalLocation').value.trim();
  const notes = document.getElementById('kbModalNotes').value.trim();

  if (!title || !location) {
    showToast('Please provide both Title and Link/File path.', 'error');
    return;
  }

  const newItem = {
    id: 'kb-' + Date.now(),
    sectionId,
    title,
    type,
    location,
    notes,
    createdAt: new Date().toLocaleDateString()
  };

  appState.kbItems.push(newItem);
  localStorage.setItem(STORAGE_KEYS.KB, JSON.stringify(appState.kbItems));
  
  closeModal('kbModal');
  renderKnowledgeBase();
  updateStats();
  showToast('Resource added successfully!');

  // Clear fields
  document.getElementById('kbModalTitle').value = '';
  document.getElementById('kbModalLocation').value = '';
  document.getElementById('kbModalNotes').value = '';
};

// Delete KB Item
window.deleteKbItem = function(itemId) {
  if (confirm('Are you sure you want to remove this resource reference?')) {
    appState.kbItems = appState.kbItems.filter(item => item.id !== itemId);
    localStorage.setItem(STORAGE_KEYS.KB, JSON.stringify(appState.kbItems));
    renderKnowledgeBase();
    updateStats();
    showToast('Resource removed.');
  }
};

window.copyKbItemPath = function(itemId) {
  const item = appState.kbItems.find(i => i.id === itemId);
  if (!item || !item.location) return;
  navigator.clipboard.writeText(item.location).then(() => {
    showToast('File path copied to clipboard!');
  }).catch(() => {
    showToast('Could not copy to clipboard', 'error');
  });
};

// 4. RENDER PROJECTS TRACKER
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = appState.projects.map((project, index) => `
    <div class="project-card" data-id="${project.id}">
      <div class="project-card-header">
        <div>
          <span class="project-build-id">${escapeHtml(project.buildNum)}</span>
          <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
        </div>
        <span class="badge ${getStatusBadgeClass(project.status)}">${escapeHtml(project.status)}</span>
      </div>

      <p class="project-desc">${escapeHtml(project.desc)}</p>

      <div class="project-field-group">
        <div class="project-status-row">
          <label class="tool-link-label" for="project-status-${index}">Status:</label>
          <select 
            id="project-status-${index}" 
            class="select-status" 
            onchange="updateProjectStatus('${project.id}', this.value)"
          >
            <option value="Not Started" ${project.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
            <option value="In Progress" ${project.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
            <option value="Completed" ${project.status === 'Completed' ? 'selected' : ''}>Completed</option>
            <option value="Needs Review" ${project.status === 'Needs Review' ? 'selected' : ''}>Needs Review</option>
          </select>
        </div>

        <div>
          <label class="tool-link-label" for="project-link-${index}">Project Link (GitHub / Docs / File):</label>
          <div class="project-link-row">
            <input 
              type="text" 
              id="project-link-${index}" 
              class="input-text" 
              value="${escapeHtml(project.link || '')}" 
              placeholder="e.g. https://github.com/... or C:/projects/..."
            />
            <button class="btn btn-secondary btn-sm" onclick="saveProjectLink('${project.id}', ${index})" title="Save link">
              Save
            </button>
            ${project.link ? `
              <a href="${encodeURI(project.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Open ${escapeHtml(project.title)}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>${project.link.toLowerCase().endsWith('.pdf') ? 'Open PDF' : 'Open'}</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'Completed': return 'badge-green';
    case 'In Progress': return 'badge-amber';
    case 'Needs Review': return 'badge-blue';
    default: return 'badge-violet';
  }
}

// Update Project Status
window.updateProjectStatus = function(projectId, newStatus) {
  const proj = appState.projects.find(p => p.id === projectId);
  if (proj) {
    proj.status = newStatus;
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(appState.projects));
    renderProjects();
    updateStats();
    showToast(`Updated ${proj.buildNum} status to "${newStatus}"!`);
  }
};

// Save Project Link
window.saveProjectLink = function(projectId, index) {
  const input = document.getElementById(`project-link-${index}`);
  if (!input) return;

  const url = input.value.trim();
  const proj = appState.projects.find(p => p.id === projectId);
  if (proj) {
    proj.link = url;
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(appState.projects));
    renderProjects();
    showToast(`Saved link for ${proj.buildNum}!`);
  }
};

window.openProjectLinkById = function(projectId) {
  const proj = appState.projects.find(p => p.id === projectId);
  if (!proj || !proj.link) return;
  const link = proj.link.trim();
  const target = link.startsWith('http://') || link.startsWith('https://') || link.startsWith('file://') ? link : (link.toLowerCase().endsWith('.pdf') || link.includes('knowledge base') || link.endsWith('.html') ? link : `https://${link}`);
  window.open(encodeURI(target), '_blank', 'noopener,noreferrer');
};

// 5. STATS CALCULATION
function updateStats() {
  const statTools = document.getElementById('statToolsCount');
  const statPrompts = document.getElementById('statPromptsCount');
  const statKb = document.getElementById('statKbCount');
  const statProjects = document.getElementById('statProjectsProgress');

  if (statTools) statTools.textContent = appState.tools.length;
  if (statPrompts) statPrompts.textContent = PROMPTS_DATA.length;
  if (statKb) statKb.textContent = appState.kbItems.length;

  if (statProjects) {
    const completed = appState.projects.filter(p => p.status === 'Completed').length;
    const inProgress = appState.projects.filter(p => p.status === 'In Progress').length;
    statProjects.textContent = `${completed}/6 Completed (${inProgress} In Progress)`;
  }
}

// 6. EVENT LISTENERS
function setupEventListeners() {
  // Search Prompts Input
  const searchInput = document.getElementById('promptSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value;
      renderPrompts();
    });
  }

  // Close modals on clicking overlay
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}

// Modal Helpers
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
};

// Toast Notifications
window.showToast = function(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.borderColor = '#ef4444';
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${type === 'error' ? '#ef4444' : '#38bdf8'}" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="${type === 'error' ? '15 9 9 15 9 9 15 15' : '9 12 11 14 15 10'}"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove after 3s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Utility to escape HTML and prevent XSS
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
