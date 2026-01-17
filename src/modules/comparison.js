import { translations } from '../i18n/data.js';

export function renderComparison(lang = 'en') {
  const t = translations[lang].comparison;
  const container = document.createElement('div');
  container.className = 'glass-card';
  container.style.marginTop = '3rem';
  container.style.textAlign = 'left';

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem; text-align: center;">${t.title}</h2>
    <p style="text-align: center; color: var(--color-text-muted); margin-bottom: 2rem;">
      ${t.desc}
    </p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 1rem;">
      <div style="text-align: center; color: var(--color-accent); font-weight: 800;">${t.indoLabel}</div>
      <div style="text-align: center; color: var(--color-secondary); font-weight: 800;">${t.japanLabel}</div>
    </div>
  `;

  t.scenarios.forEach(scene => {
    const row = document.createElement('div');
    row.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 1.5rem 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    `;

    // Indonesian side
    const indoCol = document.createElement('div');
    indoCol.innerHTML = `
      <div style="font-size: 0.9em; color: var(--color-text-muted); margin-bottom: 0.5rem;">${scene.title}</div>
      <div style="margin-bottom: 0.5rem;">${scene.indo.action}</div>
      <div style="color: var(--color-accent); font-size: 0.85em; font-style: italic;">⚠️ ${scene.indo.outcome}</div>
    `;

    // Japanese side
    const japanCol = document.createElement('div');
    japanCol.innerHTML = `
      <div style="font-size: 0.9em; color: var(--color-text-muted); margin-bottom: 0.5rem;">${scene.title}</div>
      <div style="margin-bottom: 0.5rem;">${scene.japan.action}</div>
      <div style="color: var(--color-secondary); font-size: 0.85em; font-weight: 600;">💪 ${scene.japan.outcome}</div>
    `;

    row.appendChild(indoCol);
    row.appendChild(japanCol);
    container.appendChild(row);
  });

  // Conclusion
  const footer = document.createElement('div');
  footer.style.textAlign = 'center';
  footer.style.marginTop = '2rem';
  footer.style.paddingTop = '1rem';
  footer.style.borderTop = '1px solid rgba(255,255,255,0.1)';
  footer.innerHTML = `
    <p style="font-size: 1.1rem;">
      ${t.lesson}
    </p>
  `;
  container.appendChild(footer);

  return container;
}
