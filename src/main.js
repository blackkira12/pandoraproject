
import './style.css'
import { renderScreener } from './modules/screener.js'
import { renderQuiz } from './modules/quiz.js'
import { renderComparison } from './modules/comparison.js'
import { translations } from './i18n/data.js'

const app = document.querySelector('#app')

const routes = {
  home: renderHome,
  screener: renderScreener,
  quiz: renderQuiz
}

let currentRoute = 'home'
let currentLang = 'en'

function renderNav() {
  const t = translations[currentLang].nav
  const nav = document.createElement('nav')
  nav.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  `

  const links = [
    { id: 'home', text: t.home },
    { id: 'screener', text: t.screener },
    { id: 'quiz', text: t.quiz }
  ]

  links.forEach(link => {
    const btn = document.createElement('button')
    btn.textContent = link.text
    btn.style.cssText = `
      background: transparent;
      border: none;
      color: ${currentRoute === link.id ? 'var(--color-secondary)' : 'var(--color-text-muted)'};
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid ${currentRoute === link.id ? 'var(--color-secondary)' : 'transparent'};
      transition: all 0.3s;
    `
    btn.onclick = () => {
      // Prevent reloading same route
      if (currentRoute === link.id) return
      currentRoute = link.id
      renderApp()
    }
    nav.appendChild(btn)
  })

  // Language Toggle
  const langBtn = document.createElement('button')
  langBtn.textContent = '🌐 ' + (currentLang === 'en' ? 'ID' : 'EN')
  langBtn.style.cssText = `
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    margin-left: 1rem;
  `
  langBtn.onclick = () => {
    currentLang = currentLang === 'en' ? 'id' : 'en'
    renderApp()
  }
  nav.appendChild(langBtn)

  return nav
}

function renderHome(lang) {
  const t = translations[lang].hero
  const container = document.createElement('div')
  container.className = 'hero-section'
  container.innerHTML = `
    <div class="glass-card float-anim">
      <h1>
        <span class="serif-italic">${t.subtitle}</span>
        ${t.title}
      </h1>
      <p style="font-size: 1.5rem; max-width: 60ch; color: var(--color-text-muted); margin: 0 auto 2rem;">
        ${t.desc}
      </p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary" id="start-screener">${t.btnScreener}</button>
        <button class="btn-primary" id="start-quiz" style="background: transparent; border: 1px solid var(--color-primary); box-shadow: none;">${t.btnQuiz}</button>
      </div>
    </div>
  `

  // Append Comparison Card
  const comparisonCard = renderComparison(lang)
  container.appendChild(comparisonCard)

  // Bind events
  setTimeout(() => {
    container.querySelector('#start-screener').onclick = () => { currentRoute = 'screener'; renderApp() }
    container.querySelector('#start-quiz').onclick = () => { currentRoute = 'quiz'; renderApp() }
  }, 0)

  return container
}

function renderApp() {
  const t = translations[currentLang].nav // Refresh nav translation

  // 1. Handle Navigation (Always visible)
  const existingNav = app.querySelector('nav')
  if (existingNav) {
    existingNav.replaceWith(renderNav())
  } else {
    app.appendChild(renderNav())
  }

  // 2. Handle Content Transition
  const oldContent = app.querySelector('.route-content')

  const performRender = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Generate new content
    const content = routes[currentRoute](currentLang)

    // Wrapper for animation
    const wrapper = document.createElement('div')
    wrapper.className = 'route-content page-enter'
    // Ensure content takes full width
    wrapper.style.width = '100%'

    if (typeof content === 'string') {
      wrapper.innerHTML = content
    } else {
      wrapper.appendChild(content)
    }

    app.appendChild(wrapper)

    // Trigger Reflow for Enter animation
    requestAnimationFrame(() => {
      wrapper.classList.remove('page-enter')
      wrapper.classList.add('page-enter-active')
    })
  }

  if (oldContent) {
    // Animate out
    oldContent.classList.remove('page-enter-active')
    oldContent.classList.add('page-exit-active')

    oldContent.addEventListener('transitionend', () => {
      oldContent.remove()
      performRender()
    }, { once: true })
  } else {
    // Initial load
    performRender()
  }
}

// Initial Render
renderApp()
