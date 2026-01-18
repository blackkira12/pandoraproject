import './style.css';
import { renderScreener } from './modules/screener.js';
import { renderQuiz } from './modules/quiz.js';
import { renderComparison } from './modules/comparison.js';
import { translations } from './i18n/data.js';

let currentLang = 'en';

const routes = {
  '/': renderHome,
  '/screener': renderScreener,
  '/quiz': renderQuiz
};

let currentRoute = '/';

function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  currentRoute = path;

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Page Transition Logic
  const app = document.getElementById('app');
  app.classList.add('page-exit');
  app.classList.add('page-exit-active');

  setTimeout(() => {
    renderApp();
    app.classList.remove('page-exit', 'page-exit-active');
    app.classList.add('page-enter');

    // Force reflow
    void app.offsetWidth;

    app.classList.add('page-enter-active');

    setTimeout(() => {
      app.classList.remove('page-enter', 'page-enter-active');
    }, 500);
  }, 300);
}

function renderNav() {
  const t = translations[currentLang].nav;
  return `
        <nav>
            <div class="logo">Pandora.</div>
            <div class="nav-links">
                <button class="nav-btn ${currentRoute === '/' ? 'active' : ''}" data-path="/">${t.home}</button>
                <button class="nav-btn ${currentRoute === '/screener' ? 'active' : ''}" data-path="/screener">${t.screener}</button>
                <button class="nav-btn ${currentRoute === '/quiz' ? 'active' : ''}" data-path="/quiz">${t.quiz}</button>
                <button id="lang-toggle" class="lang-toggle">${t.lang}</button>
            </div>
        </nav>
    `;
}

// V2: Narrative Scroll Home Page
function renderHome() {
  const t = translations[currentLang].home;
  const tNav = translations[currentLang].nav;

  return `
        <!-- Section 1: HERO (Orientation) -->
        <section id="hero" class="narrative-section">
            <h1 class="scroll-reveal float-anim">${t.hero.headline}</h1>
            <p class="scroll-reveal" style="transition-delay: 0.2s">${t.hero.subhead}</p>
            <button id="btn-begin" class="btn-primary scroll-reveal" style="transition-delay: 0.4s">${t.hero.cta}</button>
        </section>

        <!-- Section 2: CONTEXT (Why This Exists) -->
        <section id="context" class="narrative-section">
            <div class="scroll-reveal">
                <div class="heading-label">${t.context.heading}</div>
                <p>${t.context.body}</p>
                <div class="anchor-line">${t.context.anchor}</div>
            </div>
        </section>

        <!-- Section 3: CONCEPT (What It Is) -->
        <section id="concept" class="narrative-section">
             <div class="scroll-reveal">
                <h2>${t.concept.heading}</h2>
                <p style="font-size: 1.25rem; max-width: 600px; margin: 0 auto;">${t.concept.body}</p>
                <div style="margin-top:2rem; color: var(--color-primary); letter-spacing: 1px;">${t.concept.anchor}</div>
            </div>
        </section>

        <!-- Section 4: EXPERIENCE (How to Engage) -->
        <section id="experience" class="narrative-section">
            <div class="scroll-reveal">
                <h2>${t.experience.heading}</h2>
                <p style="margin-bottom: 3rem; font-size: 1.1rem; color: var(--color-text-muted);">${t.experience.body}</p>
                
                <!-- Embedded Reality Check as a teaser -->
                <div id="comparison-container"></div>
                
                <p style="margin-top: 2rem; font-style: italic; color: var(--color-text-muted);">${t.experience.anchor}</p>
            </div>
        </section>

        <!-- Section 5: INVITATION (The Step Forward) -->
        <section id="invitation" class="narrative-section">
            <div class="scroll-reveal">
                <h2>${t.invitation.heading}</h2>
                <p style="font-size: 1.5rem; margin-bottom: 3rem; font-family: var(--font-heading);">${t.invitation.body}</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button id="btn-enter-quiz" class="btn-primary">${t.invitation.cta}</button>
                    <button id="btn-enter-screener" class="btn-secondary">${tNav.screener}</button>
                </div>
            </div>
        </section>
    `;
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = renderNav();

  const content = document.createElement('div');
  content.id = 'page-content'; // Wrapper for transition targets

  // Route matching
  const renderer = routes[currentRoute] || renderHome;
  content.innerHTML = renderer(currentLang);

  app.appendChild(content);

  // Event Listeners

  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      navigate(btn.dataset.path);
    };
  });

  // Language Toggle
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.onclick = () => {
      currentLang = currentLang === 'en' ? 'id' : 'en';
      renderApp();
    };
  }

  // Home Page Specific Logic (V2)
  if (currentRoute === '/') {
    // Embed Comparison in Experience Section
    const compContainer = document.getElementById('comparison-container');
    if (compContainer) {
      compContainer.appendChild(renderComparison(currentLang));
    }

    // Home Buttons
    const btnBegin = document.getElementById('btn-begin');
    if (btnBegin) {
      btnBegin.onclick = () => {
        const contextSection = document.getElementById('context');
        contextSection.scrollIntoView({ behavior: 'smooth' });
      };
    }

    const btnEnterQuiz = document.getElementById('btn-enter-quiz');
    if (btnEnterQuiz) {
      btnEnterQuiz.onclick = () => navigate('/quiz');
    }

    const btnEnterScreener = document.getElementById('btn-enter-screener');
    if (btnEnterScreener) {
      btnEnterScreener.onclick = () => navigate('/screener');
    }

    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Stop observing once visible if we want it to happen only once
          // observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  // Handle back/forward browser buttons
  window.onpopstate = () => {
    currentRoute = window.location.pathname;
    renderApp();
  };

  renderApp();
});
