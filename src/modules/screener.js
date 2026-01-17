import { translations } from '../i18n/data.js';

const milestonesData = [
  {
    ageRange: "0-6 Months",
    items: [
      { id: 'ps-1', critical: false },
      { id: 'ps-2', critical: false },
      { id: 'fm-1', domain: 'Fine Motor', critical: true },
      { id: 'lg-1', domain: 'Language', critical: true },
      { id: 'gm-1', domain: 'Gross Motor', critical: true }
    ]
  },
  {
    ageRange: "6-12 Months",
    items: [
      { id: 'ps-3', critical: false },
      { id: 'fm-2', critical: false },
      { id: 'lg-2', critical: false },
      { id: 'gm-2', domain: 'Gross Motor', critical: true },
      { id: 'gm-3', domain: 'Gross Motor', critical: true }
    ]
  },
  {
    ageRange: "1-2 Years",
    items: [
      { id: 'ps-4', critical: false },
      { id: 'fm-3', critical: false },
      { id: 'lg-3', domain: 'Language', critical: true },
      { id: 'gm-4', domain: 'Gross Motor', critical: true }
    ]
  },
  {
    ageRange: "2-4 Years",
    items: [
      { id: 'ps-5', critical: false },
      { id: 'fm-4', domain: 'Fine Motor', critical: true },
      { id: 'lg-4', domain: 'Language', critical: false },
      { id: 'gm-5', domain: 'Gross Motor', critical: true }
    ]
  },
  {
    ageRange: "4-6 Years",
    items: [
      { id: 'ps-6', critical: true },
      { id: 'fm-5', domain: 'Fine Motor', critical: true },
      { id: 'lg-5', domain: 'Language', critical: false },
      { id: 'gm-6', domain: 'Gross Motor', critical: false }
    ]
  }
];

export function renderScreener(lang = 'en') {
  const t = translations[lang].screener;
  const container = document.createElement('div');
  container.className = 'screener-container';

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem;">${t.title}</h2>
    <p style="margin-bottom: 2rem; color: var(--color-text-muted);">
      ${t.desc}
    </p>
  `;

  const tabs = document.createElement('div');
  tabs.className = 'age-tabs';
  tabs.style.display = 'flex';
  tabs.style.gap = '1rem';
  tabs.style.marginBottom = '2rem';
  tabs.style.flexWrap = 'wrap';

  const contentArea = document.createElement('div');
  contentArea.className = 'glass-card';

  milestonesData.forEach((group, index) => {
    const btn = document.createElement('button');
    btn.textContent = group.ageRange; // Age ranges are typically universal enough or could be translated if strict (keeping simple for now)
    btn.className = 'btn-tab';
    btn.style.padding = '0.5rem 1rem';
    btn.style.borderRadius = '20px';
    btn.style.border = '1px solid var(--color-primary)';
    btn.style.background = index === 0 ? 'var(--color-primary)' : 'transparent';
    btn.style.color = 'white';
    btn.style.cursor = 'pointer';

    btn.onclick = () => {
      // Reset tabs
      Array.from(tabs.children).forEach(t => t.style.background = 'transparent');
      btn.style.background = 'var(--color-primary)';
      renderGroup(group, contentArea, t);
    };

    tabs.appendChild(btn);
  });

  container.appendChild(tabs);
  container.appendChild(contentArea);

  // Initial render
  renderGroup(milestonesData[0], contentArea, t);

  return container;
}

function renderGroup(group, container, t) {
  container.innerHTML = `
    <h3 style="margin-bottom: 1.5rem;">${group.ageRange} ${t.milestones}</h3>
    <div style="display: grid; gap: 1rem; text-align: left;">
      ${group.items.map(item => {
    // Fallback domain logic if not explicitly set in data (some were missing in initial data or inferred)
    const domainKey = item.domain || 'Personal-Social';
    // In data, I used explicit ids ps-1 etc. Need to map domain key if not present.
    // Actually, let's just rely on the ID mapping in translation.

    // Infer domain for display if needed or just show item text
    const text = t.items[item.id];

    return `
        <div class="milestone-item" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px;">
          <input type="checkbox" id="${item.id}" style="width: 20px; height: 20px; accent-color: var(--color-secondary);">
          <div>
            <div style="font-weight: 600;">${text}</div>
            <div style="font-size: 0.8em; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">
              ${item.critical ? `<span style="color: var(--color-accent); margin-left: 0.5rem;">● ${t.critical}</span>` : ''}
            </div>
          </div>
        </div>
      `}).join('')}
    </div>
  `;
}
