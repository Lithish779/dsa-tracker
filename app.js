// State
let solved = JSON.parse(localStorage.getItem('dsa_solved') || '{}');
let revision = JSON.parse(localStorage.getItem('dsa_revision') || '{}');
let filterMode = 'all';
let diffFilter = 'all';
let searchQuery = '';

function getKey(sheetId, dayIdx, probIdx) {
  return `${sheetId}_${dayIdx}_${probIdx}`;
}

function toggleSolved(key, diff) {
  if (solved[key]) {
    delete solved[key];
  } else {
    solved[key] = diff;
  }
  localStorage.setItem('dsa_solved', JSON.stringify(solved));
  updateStats();
  updateAllBadges();
}

function toggleRevision(key) {
  if (revision[key]) {
    delete revision[key];
  } else {
    revision[key] = true;
  }
  localStorage.setItem('dsa_revision', JSON.stringify(revision));
  applyFilters();
}

function updateStats() {
  const all = Object.values(solved);
  const easy = all.filter(d => d === 'Easy').length;
  const medium = all.filter(d => d === 'Medium').length;
  const hard = all.filter(d => d === 'Hard').length;
  const total = all.length;
  document.getElementById('statSolvedNum').textContent = total;
  document.getElementById('statEasy').textContent = easy;
  document.getElementById('statMedium').textContent = medium;
  document.getElementById('statHard').textContent = hard;
  document.getElementById('statPct').textContent = Math.round(total / 150 * 100) + '%';
  const bar = document.getElementById('globalBar');
  bar.style.width = (total / 150 * 100) + '%';
}

function updateAllBadges() {
  SHEETS.forEach(sheet => {
    let total = 0, done = 0;
    sheet.days_data.forEach((day, di) => {
      day.problems.forEach((p, pi) => {
        total++;
        const key = getKey(sheet.id, di, pi);
        if (solved[key]) done++;
      });
    });
    const badge = document.getElementById('badge-' + sheet.id);
    if (badge) badge.textContent = `${done} / ${total}`;
    const fill = document.getElementById('fill-' + sheet.id);
    if (fill) fill.style.width = (total > 0 ? done / total * 100 : 0) + '%';
  });
}

function setFilter(mode, btn) {
  filterMode = mode;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function applyFilters() {
  diffFilter = document.getElementById('diffFilter').value;
  searchQuery = document.getElementById('searchBox').value.toLowerCase();
  document.querySelectorAll('.problem-row').forEach(row => {
    const key = row.dataset.key;
    const diff = row.dataset.diff;
    const title = row.dataset.title.toLowerCase();
    const isRevision = revision[key];
    const isSolved = solved[key];
    let show = true;
    if (filterMode === 'revision' && !isRevision) show = false;
    if (diffFilter !== 'all' && diff !== diffFilter) show = false;
    if (searchQuery && !title.includes(searchQuery)) show = false;
    row.style.display = show ? '' : 'none';
  });
}

function resetProgress() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  solved = {};
  revision = {};
  localStorage.removeItem('dsa_solved');
  localStorage.removeItem('dsa_revision');
  document.querySelectorAll('.checkbox-custom').forEach(cb => cb.classList.remove('checked'));
  document.querySelectorAll('.star-btn').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.problem-row').forEach(r => r.classList.remove('solved'));
  updateStats();
  updateAllBadges();
}

function renderSheets() {
  const container = document.getElementById('sheetsContainer');
  container.innerHTML = '';

  SHEETS.forEach(sheet => {
    let totalProbs = 0;
    sheet.days_data.forEach(d => totalProbs += d.problems.length);

    const section = document.createElement('div');
    section.className = 'sheet-section';
    section.id = 'section-' + sheet.id;

    // Header
    const header = document.createElement('div');
    header.className = 'sheet-header';
    header.style.setProperty('--accent', sheet.color);
    header.innerHTML = `
      <div class="sheet-header-left">
        <button class="collapse-btn" onclick="toggleSection('${sheet.id}')">▼</button>
        <span class="sheet-icon">${sheet.icon}</span>
        <div>
          <div class="sheet-title">${sheet.title}</div>
          <div class="sheet-days">${sheet.days} · ${totalProbs} problems</div>
        </div>
      </div>
      <div class="sheet-header-right">
        <div class="sheet-progress-bar"><div class="sheet-progress-fill" id="fill-${sheet.id}" style="background:${sheet.color}"></div></div>
        <span class="sheet-badge" id="badge-${sheet.id}">0 / ${totalProbs}</span>
      </div>
    `;
    section.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'sheet-body';
    body.id = 'body-' + sheet.id;

    sheet.days_data.forEach((day, di) => {
      // Day sub-header
      const dayLabel = document.createElement('div');
      dayLabel.className = 'day-label';
      const labelText = day.label ? `Day ${day.day} — ${day.label}` : `Day ${day.day}`;
      dayLabel.textContent = labelText;
      body.appendChild(dayLabel);

      // Table
      const table = document.createElement('table');
      table.className = 'prob-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th class="col-status">Status</th>
            <th class="col-prob">Problem</th>
            <th class="col-lc">LC #</th>
            <th class="col-diff">Difficulty</th>
            <th class="col-practice">Practice</th>
            <th class="col-rev">Revision</th>
          </tr>
        </thead>
      `;
      const tbody = document.createElement('tbody');

      day.problems.forEach((prob, pi) => {
        const key = getKey(sheet.id, di, pi);
        const isSolved = !!solved[key];
        const isRevision = !!revision[key];
        const tr = document.createElement('tr');
        tr.className = 'problem-row' + (isSolved ? ' solved' : '');
        tr.dataset.key = key;
        tr.dataset.diff = prob.difficulty;
        tr.dataset.title = prob.title;

        tr.innerHTML = `
          <td class="col-status">
            <div class="checkbox-custom ${isSolved ? 'checked' : ''}" onclick="toggleSolved('${key}','${prob.difficulty}'); this.classList.toggle('checked'); this.closest('tr').classList.toggle('solved')"></div>
          </td>
          <td class="col-prob">
            <span class="prob-title">${prob.title}</span>
          </td>
          <td class="col-lc"><span class="lc-num">${prob.id}</span></td>
          <td class="col-diff"><span class="diff-badge ${prob.difficulty.toLowerCase()}">${prob.difficulty}</span></td>
          <td class="col-practice">
            <a href="${prob.url}" target="_blank" class="solve-link">Solve →</a>
          </td>
          <td class="col-rev">
            <button class="star-btn ${isRevision ? 'active' : ''}" onclick="toggleRevision('${key}'); this.classList.toggle('active')">★</button>
          </td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      body.appendChild(table);
    });

    section.appendChild(body);
    container.appendChild(section);
  });

  updateStats();
  updateAllBadges();
}

function toggleSection(id) {
  const body = document.getElementById('body-' + id);
  const btn = body.previousElementSibling.querySelector('.collapse-btn');
  if (body.style.display === 'none') {
    body.style.display = '';
    btn.textContent = '▼';
  } else {
    body.style.display = 'none';
    btn.textContent = '▶';
  }
}

renderSheets();
