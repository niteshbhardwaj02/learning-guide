/**
 * Universal Navigation System for Learning Guide Repository
 * Injects sticky top navigation, companion quick-jump, and full track switcher modal.
 */
(function () {
  'use strict';

  const TRACKS = [
    {
      id: 'fullstack',
      name: 'Full-Stack Interview',
      icon: '🌐',
      items: [
        { title: '120-Question Field Guide', file: 'Interview_Study_Guide.html', type: 'guide', badge: '120 Qs · 8 Diagrams' },
        { title: '100-Question Practice Quiz', file: 'Interview_Quiz_100.html', type: 'quiz', badge: '100 Qs · 4 Tracks' }
      ]
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence & LLMs',
      icon: '🤖',
      items: [
        { title: 'AI Illustrated Study Guide', file: 'ai_interview_guide.html', type: 'guide', badge: '100 Qs · Architecture' },
        { title: 'AI 100-Question Quiz', file: 'ai_interview_quiz_100.html', type: 'quiz', badge: '100 Qs · Illustrated' }
      ]
    },
    {
      id: 'nodejs',
      name: 'Node.js Runtime & Systems',
      icon: '🟢',
      items: [
        { title: 'Node.js Illustrated Guide', file: 'nodejs_interview_guide.html', type: 'guide', badge: '100 Qs + 37 Diagrams' },
        { title: 'Node.js 100-Question Quiz', file: 'nodejs_100_question_quiz.html', type: 'quiz', badge: '100 Qs · Illustrated' },
        { title: 'Node.js Visual Atlas', file: 'nodejs_visual_atlas.html', type: 'atlas', badge: '37 Diagram Atlas' }
      ]
    },
    {
      id: 'react',
      name: 'React 19 & Architecture',
      icon: '⚛️',
      items: [
        { title: 'React 19 Illustrated Guide', file: 'react_interview_guide.html', type: 'guide', badge: '100 Qs · React 19.3' },
        { title: 'React 100-Question Quiz', file: 'react_interview_quiz.html', type: 'quiz', badge: '100 Qs · Illustrated' }
      ]
    },
    {
      id: 'javascript',
      name: 'Senior JavaScript Core',
      icon: '💛',
      items: [
        { title: 'Senior JS Deep-Dive Guide', file: 'senior_javascript_study_guide.html', type: 'guide', badge: '100 Qs · In-Depth' },
        { title: 'Senior JS 100-Question Quiz', file: 'senior_javascript_quiz_100.html', type: 'quiz', badge: '100 Qs · Core' }
      ]
    },
    {
      id: 'frontend',
      name: 'Senior Frontend Engineering',
      icon: '🎨',
      items: [
        { title: 'Senior Frontend Guide & Quiz', file: 'senior_frontend_interview_100.html', type: 'hybrid', badge: '100 Qs + Coding + Quiz' }
      ]
    },
    {
      id: 'devops',
      name: 'Senior Backend & DevOps',
      icon: '⚙️',
      items: [
        { title: 'Backend & DevOps Illustrated Guide', file: 'senior_backend_devops_study_guide_illustrated.html', type: 'guide', badge: '100 Qs + 50 Diagrams' },
        { title: 'Backend & DevOps 100-Question Quiz', file: 'senior_backend_devops_quiz_illustrated.html', type: 'quiz', badge: '100 Qs · Illustrated' }
      ]
    },
    {
      id: 'system_design',
      name: 'System Design & Distributed Systems',
      icon: '📐',
      items: [
        { title: 'System Design Field Guide', file: 'system_design_guide.html', type: 'guide', badge: '80 Qs · Visual Flows' },
        { title: 'System Design 50-Question Quiz', file: 'system_design_quiz.html', type: 'quiz', badge: '50 Qs · Scenarios' }
      ]
    }
  ];

  function getCurrentFileName() {
    const raw = window.location.pathname.split('/').pop().split('\\').pop();
    return raw || 'index.html';
  }

  function findCurrentItem(fileName) {
    for (const track of TRACKS) {
      for (const item of track.items) {
        if (item.file.toLowerCase() === fileName.toLowerCase()) {
          return { track, item };
        }
      }
    }
    return null;
  }

  function getCompanionItem(track, currentItem) {
    if (!track || !currentItem) return null;
    if (currentItem.type === 'guide') {
      return track.items.find(i => i.type === 'quiz' || i.type === 'hybrid') || null;
    }
    if (currentItem.type === 'quiz') {
      return track.items.find(i => i.type === 'guide' || i.type === 'hybrid') || null;
    }
    if (currentItem.type === 'atlas') {
      return track.items.find(i => i.type === 'guide') || null;
    }
    return null;
  }

  function renderNavBar() {
    const currentFile = getCurrentFileName();
    if (currentFile.toLowerCase() === 'index.html') {
      return; // Hub page uses its own integrated hero & navigation
    }

    const currentMatch = findCurrentItem(currentFile);
    const track = currentMatch ? currentMatch.track : null;
    const item = currentMatch ? currentMatch.item : null;
    const companion = track ? getCompanionItem(track, item) : null;

    // Build bar container
    const nav = document.createElement('nav');
    nav.className = 'sln-nav-bar';
    nav.id = 'slnNavBar';
    nav.setAttribute('aria-label', 'Global Repository Navigation');

    // Left side: Hub button and current breadcrumb
    let leftHtml = `
      <div class="sln-nav-left">
        <a href="index.html" class="sln-hub-btn" title="Go to Learning Hub Home">
          <span>⌂</span> Learning Hub
        </a>
        <span class="sln-divider">/</span>
        <div class="sln-current-info">
          ${track ? `<span class="sln-track-tag">${track.icon} ${track.name}</span>` : ''}
          <span class="sln-item-name">${item ? item.title : document.title.split('|')[0].trim()}</span>
        </div>
      </div>
    `;

    // Right side: Companion jump + All tracks modal trigger
    let rightHtml = `<div class="sln-nav-right">`;

    // Additional Node.js Atlas button if on Node.js Guide or Quiz
    if (track && track.id === 'nodejs' && item && item.type !== 'atlas') {
      rightHtml += `
        <a href="nodejs_visual_atlas.html" class="sln-action-btn" title="View 37 Node.js Visual Diagrams">
          🗺️ Visual Atlas
        </a>
      `;
    }

    if (companion) {
      const isQuiz = companion.type === 'quiz' || companion.type === 'hybrid';
      const icon = isQuiz ? '📝' : '📖';
      const label = isQuiz ? 'Take Quiz' : 'Study Guide';
      rightHtml += `
        <a href="${companion.file}" class="sln-action-btn sln-primary-action" title="Open companion: ${companion.title}">
          ${icon} ${label} →
        </a>
      `;
    }

    rightHtml += `
        <button type="button" class="sln-tracks-toggle" id="slnTracksToggle" aria-haspopup="dialog" aria-expanded="false">
          📚 All Tracks ▾ <span class="sln-kbd">Ctrl+K</span>
        </button>
      </div>
    `;

    nav.innerHTML = leftHtml + rightHtml;

    // Insert at beginning of body
    document.body.insertAdjacentElement('afterbegin', nav);

    // Build and inject Modal
    renderModal(currentFile);

    // Event listeners
    const toggleBtn = document.getElementById('slnTracksToggle');
    const modalOverlay = document.getElementById('slnModalOverlay');
    const closeBtn = document.getElementById('slnModalClose');
    const searchInput = document.getElementById('slnSearchInput');

    function openModal() {
      modalOverlay.classList.add('sln-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      setTimeout(() => searchInput && searchInput.focus(), 50);
    }

    function closeModal() {
      modalOverlay.classList.remove('sln-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    toggleBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modalOverlay.classList.contains('sln-open')) {
          closeModal();
        } else {
          openModal();
        }
      }
      if (e.key === 'Escape' && modalOverlay.classList.contains('sln-open')) {
        closeModal();
      }
    });

    // Real-time search in modal
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        const groups = modalOverlay.querySelectorAll('.sln-track-group');
        groups.forEach(group => {
          const links = group.querySelectorAll('.sln-link-row');
          let groupHasMatch = false;
          const trackTitle = group.querySelector('.sln-track-name').textContent.toLowerCase();

          links.forEach(link => {
            const text = link.textContent.toLowerCase();
            const match = text.includes(q) || trackTitle.includes(q);
            link.style.display = match ? 'flex' : 'none';
            if (match) groupHasMatch = true;
          });

          group.style.display = groupHasMatch ? 'flex' : 'none';
        });
      });
    }
  }

  function renderModal(currentFile) {
    const modal = document.createElement('div');
    modal.className = 'sln-modal-overlay';
    modal.id = 'slnModalOverlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Switch Study Guide or Quiz');

    let groupsHtml = TRACKS.map(track => {
      const linksHtml = track.items.map(item => {
        const isActive = item.file.toLowerCase() === currentFile.toLowerCase();
        const icon = item.type === 'guide' ? '📖' : item.type === 'quiz' ? '📝' : item.type === 'atlas' ? '🗺️' : '⚡';
        return `
          <a href="${item.file}" class="sln-link-row ${isActive ? 'sln-active-item' : ''}">
            <span class="sln-link-title">
              <span>${icon}</span>
              <span>${item.title}</span>
            </span>
            <span class="sln-link-badge">${item.badge}</span>
          </a>
        `;
      }).join('');

      return `
        <div class="sln-track-group" data-track="${track.id}">
          <div class="sln-track-header">
            <span class="sln-track-name">${track.icon} ${track.name}</span>
          </div>
          <div class="sln-track-links">
            ${linksHtml}
          </div>
        </div>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="sln-modal-card">
        <div class="sln-modal-header">
          <h3 class="sln-modal-title"><span>🧭</span> Switch Learning Guide or Quiz</h3>
          <input type="search" class="sln-search-input" id="slnSearchInput" placeholder="Filter by keyword (e.g. react, devops, quiz)..." autocomplete="off" />
          <button type="button" class="sln-close-btn" id="slnModalClose" aria-label="Close navigation switcher">&times;</button>
        </div>
        <div class="sln-modal-body">
          ${groupsHtml}
        </div>
        <div class="sln-modal-footer">
          <span>Tip: Press <kbd class="sln-kbd">Ctrl+K</kbd> anywhere to open this menu</span>
          <a href="index.html" class="sln-action-btn sln-primary-action">⌂ Go to Learning Hub Dashboard</a>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  // Self-initialize on DOMContentLoaded or immediately if DOM is already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavBar);
  } else {
    renderNavBar();
  }
})();
