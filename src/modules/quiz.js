import { translations } from '../i18n/data.js';

export function renderQuiz(lang = 'en') {
  const t = translations[lang].quiz;
  const questions = t.questions; // Questions are now in the translation file directly

  const container = document.createElement('div');
  container.className = 'glass-card';
  let currentQ = 0;
  let scores = { authoritative: 0, permissive: 0, authoritarian: 0 };

  // Map indices to styles (Hardcoded mapping based on the order in data.js)
  // Option 0: Permissive, Option 1: Authoritarian, Option 2: Authoritative
  // Wait, the order in data.js is:
  // Q1: Permissive, Authoritarian, Authoritative
  // Q2: Permissive, Authoritarian, Authoritative
  // Q3: Permissive, Authoritarian, Authoritative
  // So we can assume index 0=permissive, 1=authoritarian, 2=authoritative
  const styleMap = ['permissive', 'authoritarian', 'authoritative'];

  const renderQuestion = () => {
    if (currentQ >= questions.length) {
      showResult();
      return;
    }

    const q = questions[currentQ];
    container.innerHTML = `
      <div style="text-align: left;">
        <span style="color: var(--color-secondary); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em;">${t.scenario} ${currentQ + 1}/${questions.length}</span>
        <h3 style="margin: 1rem 0 2rem; font-size: 1.5rem;">${q.text}</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${q.options.map((opt, idx) => `
            <button class="quiz-btn" data-idx="${idx}" style="
              text-align: left;
              padding: 1.5rem;
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.1);
              color: white;
              border-radius: 12px;
              cursor: pointer;
              transition: all 0.2s;
              font-family: var(--font-body);
              font-size: 1rem;
            ">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.quiz-btn').forEach(btn => {
      btn.onclick = (e) => {
        const style = styleMap[e.currentTarget.dataset.idx];
        scores[style]++;
        currentQ++;
        renderQuestion();
      };
      btn.onmouseenter = (e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
      btn.onmouseleave = (e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
    });
  };

  const showResult = () => {
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = t.results[winner];

    container.innerHTML = `
      <div style="text-align: center; animation: fadeIn 0.8s ease;">
        <h3 style="color: var(--color-secondary);">${t.yourStyle}</h3>
        <h1 style="font-size: 3rem; margin: 1rem 0; background: var(--gradient-main); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          ${result.title}
        </h1>
        <p style="font-size: 1.25rem; margin-bottom: 2rem;">${result.desc}</p>
        
        <div style="background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 16px; border-left: 4px solid var(--color-primary); text-align: left;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 0.5rem;">${t.globalContext}</strong>
          ${result.comps}
        </div>
        
        <button class="btn-primary" onclick="location.reload()" style="margin-top: 2rem;">${t.retake}</button>
      </div>
    `;
  };

  renderQuestion();
  return container;
}
