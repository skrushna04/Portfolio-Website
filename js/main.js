/**
 * Shreekrishna Gajanan Patil Portfolio
 * Interactive Application Controller (main.js)
 */

let lastActiveElement = null;

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderPublication();
  renderCertifications();
  renderLanguages();
  
  setupHeaderScroll();
  setupMobileDrawer();
  setupActiveNavHighlight();
  setupContactForm();
  setupBackToTop();
  setupIcons();
});

/* Icon Helper */
function getIconSvg(name, size = 20, extraClass = '') {
  const icons = {
    'code': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    'cpu': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
    'file-text': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    'database': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    'layers': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    'calendar': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    'award': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    'globe': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    'arrow-right': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    'file-down': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><polyline points="9 15 12 18 15 15"></polyline></svg>`,
    'mail': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    'phone': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    'linkedin': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    'x': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
  };
  return icons[name] || '';
}

function setupIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const iconName = el.getAttribute('data-icon');
    const size = el.getAttribute('data-size') || 20;
    el.innerHTML = getIconSvg(iconName, size);
  });
}

/* 1. Skills */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !portfolioData.skills) return;

  container.innerHTML = portfolioData.skills.map(cat => `
    <div class="card">
      <h3 class="skill-category-title">
        ${getIconSvg(cat.icon, 20, 'gradient-text')}
        <span>${cat.category}</span>
      </h3>
      <div class="skill-badges">
        ${cat.skills.map(skill => `
          <span class="skill-badge">${skill}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* 2. Projects */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || !portfolioData.projects) return;

  container.innerHTML = portfolioData.projects.map(proj => `
    <div class="card project-card">
      <div>
        <div class="project-card-header">
          <span class="project-number">PROJECT ${proj.number}</span>
          <span class="project-category-tag">${proj.category}</span>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        ${proj.date ? `
          <div class="project-date">
            ${getIconSvg('calendar', 14)}
            <span>${proj.date}</span>
          </div>
        ` : ''}
        <p class="project-desc">${proj.shortDescription}</p>
        <ul class="project-bullets">
          ${proj.contributions.slice(0, 3).map(bullet => `
            <li class="project-bullet-item"><span>${bullet}</span></li>
          `).join('')}
        </ul>
      </div>
      <div>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <button class="btn btn-secondary" style="width: 100%; margin-top: 1.25rem; font-size: 0.875rem;" onclick="openProjectModal('${proj.id}', this)" aria-haspopup="dialog">
          View Details ${getIconSvg('arrow-right', 16)}
        </button>
      </div>
    </div>
  `).join('');
}

// Project Modal
window.openProjectModal = function(id, triggerElement) {
  const proj = portfolioData.projects.find(p => p.id === id);
  if (!proj) return;

  lastActiveElement = triggerElement || document.activeElement;

  const modalContainer = document.getElementById('modal-content');
  const modalOverlay = document.getElementById('modal-overlay');
  
  if (!modalContainer || !modalOverlay) return;

  modalContainer.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="project-category-tag" style="margin-bottom: 0.5rem; display: inline-block;">${proj.category}</span>
      <h2 id="modal-title" style="font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">${proj.title}</h2>
      ${proj.date ? `
        <p style="color: var(--text-subtle); font-size: 0.9rem; font-family: var(--font-mono);">
          Date: ${proj.date}
        </p>
      ` : ''}
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="color: var(--color-primary); font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Description</h3>
      <p style="color: var(--text-muted); line-height: 1.6;">${proj.shortDescription}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="color: var(--color-primary); font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">Key Contributions</h3>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
        ${proj.contributions.map(bullet => `
          <li style="color: var(--text-muted); display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.95rem;">
            <span style="color: var(--color-primary); font-weight: bold; flex-shrink: 0;">✓</span>
            <span>${bullet}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="color: var(--color-primary); font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">Technology Tags</h3>
      <div class="skill-badges">
        ${proj.tags.map(tag => `<span class="skill-badge">${tag}</span>`).join('')}
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = modalOverlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
};

window.closeModal = function() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (lastActiveElement) {
    lastActiveElement.focus();
    lastActiveElement = null;
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* 3. Experience */
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container || !portfolioData.experience) return;

  container.innerHTML = `
    <div class="timeline">
      ${portfolioData.experience.map(exp => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-role">${exp.role}</h3>
                <div class="timeline-company">${exp.company}</div>
              </div>
              <span class="timeline-duration">${exp.duration}</span>
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
              ${exp.responsibilities.map(resp => `
                <li style="color: var(--text-muted); font-size: 0.925rem; display: flex; align-items: flex-start; gap: 0.5rem;">
                  <span style="color: var(--color-primary);">•</span>
                  <span>${resp}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* 4. Education */
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container || !portfolioData.education) return;

  container.innerHTML = `
    <div class="timeline">
      ${portfolioData.education.map(edu => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-role">${edu.degree}</h3>
                <div class="timeline-company">${edu.institution}</div>
              </div>
              <span class="timeline-duration">${edu.duration}</span>
            </div>
            ${edu.score ? `
              <div style="margin-top: 0.5rem;">
                <span class="skill-badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
                  Score: ${edu.score}
                </span>
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* 5. Publication */
function renderPublication() {
  const container = document.getElementById('publication-container');
  if (!container || !portfolioData.publication) return;

  const pub = portfolioData.publication;
  container.innerHTML = `
    <div class="publication-card">
      <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-size: 0.875rem; font-family: var(--font-mono); margin-bottom: 0.75rem;">
        ${getIconSvg('calendar', 16)}
        <span>${pub.date}</span>
      </div>
      <h3 style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 1rem; max-width: 800px; line-height: 1.3;">
        ${pub.title}
      </h3>
      <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; max-width: 850px; margin-bottom: 1.5rem;">
        ${pub.description}
      </p>
      <div class="skill-badges">
        <span class="skill-badge">Text Classification</span>
        <span class="skill-badge">Data Mining</span>
        <span class="skill-badge">NLP</span>
        <span class="skill-badge">Model Evaluation</span>
      </div>
    </div>
  `;
}

/* 6. Certifications */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container || !portfolioData.certifications) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="card" style="display: flex; align-items: center; gap: 1rem;">
      <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.15); color: #818cf8; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        ${getIconSvg('award', 22)}
      </div>
      <div>
        <h3 style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 0.25rem;">${cert}</h3>
      </div>
    </div>
  `).join('');
}

/* 7. Languages */
function renderLanguages() {
  const container = document.getElementById('languages-container');
  if (!container || !portfolioData.languages) return;

  container.innerHTML = portfolioData.languages.map(lang => `
    <div class="card" style="display: flex; align-items: center; gap: 0.75rem; padding: 1.25rem 1.5rem;">
      ${getIconSvg('globe', 20, 'gradient-text')}
      <span style="font-weight: 600; color: #fff; font-size: 1rem;">${lang}</span>
    </div>
  `).join('');
}

/* Controls */
function setupHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function setupMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = getIconSvg('code', 24);
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = getIconSvg('x', 24);
    }
  });

  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = getIconSvg('code', 24);
    });
  });
}

function setupActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value || 'Portfolio Contact Inquiry';
    const message = document.getElementById('form-message').value;

    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:vpatil2752004@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;

    const statusEl = document.getElementById('form-status');
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.innerHTML = `<div style="padding: 0.75rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.15); color: #34d399; font-size: 0.9rem; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 1rem;">Opening your default email application to complete message sending.</div>`;
    }
  });
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
