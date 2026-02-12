const mediaData = [
  { rank: 1, media: "ABV.bg", type: "Портал", owner: "NetInfo (United Group)", reliability: 32, reliabilityLabel: "Смесена", bias: "Център", notes: "Входна точка, агрегатор." },
  { rank: 2, media: "Nova.bg", type: "TV Сайт", owner: "United Group", reliability: 44, reliabilityLabel: "Висока", bias: "Корпоративен", notes: "Основен новинарски хъб." },
  { rank: 3, media: "bTVnovinite.bg", type: "TV Сайт", owner: "CME (PPF Group)", reliability: 46, reliabilityLabel: "Висока", bias: "Корпоративен", notes: "Балансиран, мейнстрийм." },
  { rank: 4, media: "Vesti.bg", type: "Агрегатор", owner: "NetInfo", reliability: 30, reliabilityLabel: "Смесена", bias: "Популизъм", notes: "Кликбейт заглавия, масов." },
  { rank: 5, media: "Blitz.bg", type: "Таблоид", owner: "Частна (Интермедиа)", reliability: 18, reliabilityLabel: "Ниска", bias: "Опортюнизъм", notes: "Сензации, криминални, хазарт." },
  { rank: 6, media: "Dir.bg", type: "Портал", owner: "Лого-къмпани", reliability: 35, reliabilityLabel: "Смесена", bias: "Скрит Център", notes: "Микс от сухи факти и мнения." },
  { rank: 7, media: "24chasa.bg", type: "Вестник", owner: "Медийна група БГ", reliability: 38, reliabilityLabel: "Смесена", bias: "Про-Власт", notes: "Балансьор, хибриден модел." },
  { rank: 8, media: "Sportal.bg", type: "Спорт", owner: "Sportal Media Group", reliability: 40, reliabilityLabel: "Тематична", bias: "Комерсиален", notes: "Скрит политически PR, хазарт." },
  { rank: 9, media: "Dnevnik.bg", type: "Онлайн", owner: "Икономедия", reliability: 54, reliabilityLabel: "Висока", bias: "Либерален/Зелен", notes: "Абонаментен модел, анализи." },
  { rank: 10, media: "Capital.bg", type: "Бизнес", owner: "Икономедия", reliability: 58, reliabilityLabel: "Висока", bias: "Икон. Либерал", notes: "Премиум съдържание." },
  { rank: 11, media: "Pik.bg", type: "Таблоид", owner: "Н. Недялков", reliability: 12, reliabilityLabel: "Ниска", bias: "Агресивен/ГЕРБ", notes: "Политическа бухалка, компромати." },
  { rank: 12, media: "Trud.bg", type: "Вестник", owner: "П. Блъсков", reliability: 28, reliabilityLabel: "Ниска/Смесена", bias: "Консервативен", notes: "Анти-либерален, десен." },
  { rank: 13, media: "Plovdiv24.bg", type: "Регионален", owner: "Пловдив24 ЕООД", reliability: 26, reliabilityLabel: "Ниска", bias: "Локален/Търговски", notes: "Най-силният регионален сайт." },
  { rank: 14, media: "Actualno.com", type: "Портал", owner: "WebGround", reliability: 36, reliabilityLabel: "Смесена", bias: "Център/Либерал", notes: "Умерен, SEO оптимизиран." },
  { rank: 15, media: "Webcafe.bg", type: "Лайфстайл", owner: "Webcafe ЕАД", reliability: 45, reliabilityLabel: "Висока", bias: "Градски Либерал", notes: "Култура, анализи." },
  { rank: 16, media: "Mediapool.bg", type: "Онлайн", owner: "Фондация", reliability: 52, reliabilityLabel: "Висока", bias: "Десен/Атлантик", notes: "Критичен към корупцията." },
  { rank: 17, media: "ClubZ.bg", type: "Онлайн", owner: "О. Донев", reliability: 50, reliabilityLabel: "Висока", bias: "Дясно-Център", notes: "Качествена публицистика." },
  { rank: 18, media: "Offnews.bg", type: "Онлайн", owner: "Офф Медия", reliability: 48, reliabilityLabel: "Висока", bias: "Либерален", notes: "Образование, гражданско общество." },
  { rank: 19, media: "DarikNews.bg", type: "Радио/Сайт", owner: "NetInfo", reliability: 42, reliabilityLabel: "Висока", bias: "Регионален/Център", notes: "Наследство от Дарик Радио." },
  { rank: 20, media: "BNT.bg", type: "Обществена", owner: "Държавна", reliability: 52, reliabilityLabel: "Висока", bias: "Про-Държавен", notes: "Високо доверие, консервативен." },
  { rank: 21, media: "BNR.bg", type: "Обществена", owner: "Държавна", reliability: 60, reliabilityLabel: "Много Висока", bias: "Неутрален", notes: "Златен стандарт за точност." },
  { rank: 22, media: "Focus-news", type: "Агенция", owner: "Фокус Медия", reliability: 38, reliabilityLabel: "Смесена", bias: "Център", notes: "След продажбата губи влияние." },
  { rank: 23, media: "Economic.bg", type: "Бизнес", owner: "Brand Media Bulgaria", reliability: 50, reliabilityLabel: "Висока", bias: "Корпоративен", notes: "Икономика, инфраструктура." },
  { rank: 24, media: "Investor.bg", type: "Финанси", owner: "Investor Media (Bloomberg)", reliability: 56, reliabilityLabel: "Висока", bias: "Пазарен/Експертен", notes: "Борсова информация." },
  { rank: 25, media: "Pogled.info", type: "Анализи", owner: "Румен Петков", reliability: 14, reliabilityLabel: "Ниска", bias: "Про-Руски/Ляв", notes: "Основен русофилски хъб." },
  { rank: 26, media: "Glasove.com", type: "Анализи", owner: "Явор Дачков", reliability: 30, reliabilityLabel: "Смесена", bias: "Консервативен", notes: "Критичен към либералите." },
  { rank: 27, media: "Afera.bg", type: "Блог", owner: "Веселина Томова", reliability: 10, reliabilityLabel: "Ниска", bias: "Анархичен", notes: "Интриги, спецслужби, скандали." },
  { rank: 28, media: "Fakti.bg", type: "Агрегатор", owner: "Резон", reliability: 32, reliabilityLabel: "Смесена", bias: "Популистки", notes: "Силен трафик, много коментари." },
  { rank: 29, media: "Novini.bg", type: "Агрегатор", owner: "Sportal Media", reliability: 28, reliabilityLabel: "Смесена", bias: "Търговски", notes: "Масов поток от новини." },
  { rank: 30, media: "Marica.bg", type: "Регионален", owner: "Марица (Пловдив)", reliability: 28, reliabilityLabel: "Ниска", bias: "Локален", notes: "Жълт оттенък." },
  { rank: 31, media: "Flagman.bg", type: "Регионален", owner: "Флагман (Бургас)", reliability: 24, reliabilityLabel: "Ниска", bias: "Влиятелен/Локален", notes: "Силно влияние по Черноморието." },
  { rank: 32, media: "Petel.bg", type: "Регионален", owner: "Варна", reliability: 15, reliabilityLabel: "Ниска", bias: "Кликбейт", notes: "Шокиращи заглавия." },
  { rank: 33, media: "Bradva.bg", type: "Таблоид", owner: "Неизвестна", reliability: 8, reliabilityLabel: "Пропаганда", bias: "Кликбейт/Фейк", notes: "Вирални измислици." },
  { rank: 34, media: "Epicenter.bg", type: "Анализи", owner: "Валерия Велева", reliability: 30, reliabilityLabel: "Смесена", bias: "ДПС/Статукво", notes: "Елитарни претенции, зависимости." },
  { rank: 35, media: "Standartnews", type: "Вестник", owner: "Т. Батков (бивш)", reliability: 25, reliabilityLabel: "Ниска", bias: "Корпоративен", notes: "Западащ легаси бранд." },
  { rank: 36, media: "Frognews.bg", type: "Онлайн", owner: "Огнян Стефанов", reliability: 35, reliabilityLabel: "Смесена", bias: "Анти-ГЕРБ", notes: "Свързан с разкрития, емоционален." },
  { rank: 37, media: "Bivol.bg", type: "Разследващ", owner: "А. Чобанов (бивш)", reliability: 48, reliabilityLabel: "Висока/Смесена", bias: "Анти-Корупция", notes: "Wikileaks стил, агресивен." },
  { rank: 38, media: "Bird.bg", type: "Разследващ", owner: "Чобанов/Стоянов", reliability: 55, reliabilityLabel: "Висока", bias: "Data Journalism", notes: "Дълбоки разследвания с данни." },
  { rank: 39, media: "Sega.bg", type: "Вестник", owner: "С. Дичев (Сашо Дончев)", reliability: 50, reliabilityLabel: "Висока", bias: "Либерален/Сатира", notes: "Остра политическа сатира." },
  { rank: 40, media: "Banker.bg", type: "Финанси", owner: "Банкеръ", reliability: 45, reliabilityLabel: "Висока", bias: "Финансов", notes: "Специализиран." },
  { rank: 41, media: "Monitor", type: "Вестник", owner: "(Закрит/Архив/Остатък)", reliability: 20, reliabilityLabel: "Ниска", bias: "Пеевски (бивш)", notes: "Слят с Телеграф." },
  { rank: 42, media: "Telegraph.bg", type: "Вестник", owner: "United Group", reliability: 30, reliabilityLabel: "Смесена", bias: "Таблоид", notes: "Най-тиражният вестник." },
  { rank: 43, media: "Lupa.bg", type: "Таблоид", owner: "Свързан с ПИК/Уикенд", reliability: 15, reliabilityLabel: "Ниска", bias: "Жълт", notes: "Клюки, скандали." },
  { rank: 44, media: "Narod.bg", type: "Таблоид", owner: "Анонимен", reliability: 10, reliabilityLabel: "Ниска", bias: "Анти-Власт", notes: "Анонимни компромати." },
  { rank: 45, media: "19min.bg", type: "Градски", owner: "19 минути", reliability: 25, reliabilityLabel: "Ниска", bias: "Опозиционен", notes: "Клюки, градски слухове." },
  { rank: 46, media: "Euronews.bg", type: "TV", owner: "TV Europa (наследник)", reliability: 48, reliabilityLabel: "Висока", bias: "Евроатлантически", notes: "Франчайз на Euronews." },
  { rank: 47, media: "BloombergTV", type: "TV", owner: "Investor Media", reliability: 55, reliabilityLabel: "Висока", bias: "Бизнес", notes: "Глобални стандарти." },
  { rank: 48, media: "TheBGtimes", type: "Фейк", owner: "Анонимен", reliability: 5, reliabilityLabel: "Пропаганда", bias: "Дезинформация", notes: "Класически \"гъба\" сайт." },
  { rank: 49, media: "Factcheck.bg", type: "Проверка", owner: "АЕЖ", reliability: 64, reliabilityLabel: "Най-висока", bias: "Мета-Медия", notes: "Коректор на средата." },
  { rank: 50, media: "Gong.bg", type: "Спорт", owner: "NetInfo", reliability: 40, reliabilityLabel: "Тематична", bias: "Комерсиален", notes: "Спорт и лайфстайл." },
];

const svg = document.getElementById("chart");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const reliabilityFilter = document.getElementById("reliabilityFilter");
const detailsPanel = document.getElementById("detailsPanel");

const width = 980;
const height = 560;
const margin = { top: 26, right: 24, bottom: 52, left: 78 };
const plotW = width - margin.left - margin.right;
const plotH = height - margin.top - margin.bottom;

const biasScale = {
  "Про-Руски/Ляв": 2.4,
  "Либерален/Зелен": -1.5,
  "Икон. Либерал": -1.25,
  "Либерален": -1,
  "Градски Либерал": -0.8,
  "Център/Либерал": -0.4,
  "Център": 0,
  "Скрит Център": 0.1,
  "Неутрален": 0,
  "Регионален/Център": 0.3,
  "Пазарен/Експертен": 0.4,
  "Корпоративен": 0.6,
  "Про-Държавен": 0.8,
  "Про-Власт": 1,
  "Дясно-Център": 1.2,
  "Десен/Атлантик": 1.3,
  "Консервативен": 1.5,
  "Евроатлантически": 1.2,
  "Агресивен/ГЕРБ": 2,
  "Кликбейт/Фейк": 2.3,
  "Дезинформация": 2.5,
};

function getBiasValue(label) {
  if (biasScale[label] !== undefined) return biasScale[label];
  if (/Либерал|Анти-Корупция|Data Journalism/i.test(label)) return -0.9;
  if (/Дясно|Консерват|Бизнес|Финансов/i.test(label)) return 1.2;
  if (/Таблоид|Кликбейт|Фейк|Жълт|Опортюнизъм|Попули/i.test(label)) return 2.1;
  if (/Про-Руски|ДПС/i.test(label)) return 2.4;
  return 0.2;
}

function colorFromBias(label) {
  const x = getBiasValue(label);
  if (x <= -0.6) return "#2f7bf6";
  if (x <= 0.8) return "#58657f";
  if (x <= 1.8) return "#f29f27";
  return "#d93025";
}

function xScale(value) {
  const min = -2.5;
  const max = 2.5;
  return margin.left + ((value - min) / (max - min)) * plotW;
}

function yScale(value) {
  const min = 0;
  const max = 64;
  return margin.top + plotH - ((value - min) / (max - min)) * plotH;
}

function createSvgTag(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function drawBase() {
  svg.innerHTML = "";
  const bands = [
    { y1: yScale(64), y2: yScale(50), fill: "#eaf6ea", label: "Висока надеждност" },
    { y1: yScale(50), y2: yScale(25), fill: "#fff7dd", label: "Смесено съдържание" },
    { y1: yScale(25), y2: yScale(0), fill: "#ffeaea", label: "Ниска надеждност" },
  ];

  bands.forEach((b) => {
    svg.append(createSvgTag("rect", { x: margin.left, y: b.y1, width: plotW, height: b.y2 - b.y1, fill: b.fill }));
    const label = createSvgTag("text", { x: margin.left + 10, y: b.y1 + 15, class: "grid-label" });
    label.textContent = b.label;
    svg.append(label);
  });

  [-2, -1, 0, 1, 2].forEach((v) => {
    const x = xScale(v);
    svg.append(createSvgTag("line", { x1: x, y1: margin.top, x2: x, y2: margin.top + plotH, stroke: "#d4dced", "stroke-dasharray": "4 4" }));
  });

  [0, 16, 32, 48, 64].forEach((v) => {
    const y = yScale(v);
    svg.append(createSvgTag("line", { x1: margin.left, y1: y, x2: margin.left + plotW, y2: y, stroke: "#d4dced" }));
    const label = createSvgTag("text", { x: margin.left - 28, y: y + 4, class: "grid-label" });
    label.textContent = String(v);
    svg.append(label);
  });

  const xAxisLabel = createSvgTag("text", { x: margin.left + plotW / 2, y: height - 16, class: "axis-label", "text-anchor": "middle" });
  xAxisLabel.textContent = "Пристрастие (либерално → център → консервативно / про-руско)";
  svg.append(xAxisLabel);

  const yAxisLabel = createSvgTag("text", { x: 18, y: margin.top + plotH / 2, class: "axis-label", transform: `rotate(-90 18 ${margin.top + plotH / 2})` });
  yAxisLabel.textContent = "Надеждност";
  svg.append(yAxisLabel);
}

function showDetails(item) {
  detailsPanel.innerHTML = `
    <h2>#${item.rank} — ${item.media}</h2>
    <p><strong>Тип:</strong> ${item.type}</p>
    <p><strong>Собственост:</strong> ${item.owner}</p>
    <p><strong>Reliability:</strong> ${item.reliability}/64 (${item.reliabilityLabel})</p>
    <p><strong>Bias:</strong> ${item.bias}</p>
    <p><strong>Бележка:</strong> ${item.notes}</p>
  `;
}

function passesReliability(item, filterValue) {
  if (filterValue === "high") return item.reliability >= 50;
  if (filterValue === "mixed") return item.reliability >= 25 && item.reliability < 50;
  if (filterValue === "low") return item.reliability < 25;
  return true;
}

function filteredData() {
  const q = searchInput.value.trim().toLowerCase();
  const type = typeFilter.value;
  const rel = reliabilityFilter.value;

  return mediaData.filter((item) => {
    const matchSearch = !q || item.media.toLowerCase().includes(q) || item.bias.toLowerCase().includes(q);
    const matchType = type === "all" || item.type === type;
    return matchSearch && matchType && passesReliability(item, rel);
  });
}

function drawPoints() {
  const data = filteredData();

  data.forEach((item) => {
    const cx = xScale(getBiasValue(item.bias));
    const cy = yScale(item.reliability);
    const circle = createSvgTag("circle", {
      cx,
      cy,
      r: 5.5,
      fill: colorFromBias(item.bias),
      class: "point",
      "data-rank": item.rank,
      "aria-label": item.media,
    });

    const title = createSvgTag("title");
    title.textContent = `${item.media} | Reliability: ${item.reliability} | Bias: ${item.bias}`;
    circle.append(title);

    circle.addEventListener("click", () => {
      document.querySelectorAll(".point.active").forEach((p) => p.classList.remove("active"));
      circle.classList.add("active");
      showDetails(item);
    });

    svg.append(circle);
  });
}

function populateTypeFilter() {
  const types = [...new Set(mediaData.map((d) => d.type))].sort((a, b) => a.localeCompare(b, "bg"));
  types.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    typeFilter.append(opt);
  });
}

function render() {
  drawBase();
  drawPoints();
}

populateTypeFilter();
render();

[searchInput, typeFilter, reliabilityFilter].forEach((el) => {
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});