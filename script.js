const topics = {
  1: [
    ["🔢", "Number Sense", "Counting, comparing numbers, place value and number patterns.", "sky"],
    ["➕", "Addition & Subtraction", "Mental math, number bonds and clever calculation strategies.", "mint"],
    ["✖️", "Multiplication Ideas", "Equal groups, repeated addition and early multiplication thinking.", "yellow"],
    ["📐", "Shapes & Space", "2D shapes, 3D objects, symmetry and spatial awareness.", "coral"],
    ["⏰", "Time & Calendar", "Reading clocks, days, months and simple time problems.", "pink"],
    ["🧩", "Patterns & Logic", "Find rules, continue patterns and solve fun logic puzzles.", "purple"]
  ],

  2: [
    ["🔢", "Numbers to 1000", "Place value, ordering, rounding and number relationships.", "sky"],
    ["➕", "Operations", "Addition, subtraction, multiplication and division basics.", "mint"],
    ["🍕", "Fractions", "Recognize halves, thirds, quarters and simple fraction ideas.", "coral"],
    ["📏", "Measurement", "Length, weight, capacity, money and practical measurement.", "yellow"],
    ["📅", "Time", "Elapsed time, calendars and solving everyday time challenges.", "pink"],
    ["🧠", "Logical Reasoning", "Odd one out, analogies, sequences and visual reasoning.", "purple"]
  ],

  3: [
    ["🔢", "Place Value & Numbers", "Large numbers, comparison, estimation and number patterns.", "sky"],
    ["✖️", "Multiplication & Division", "Tables, properties, mental strategies and word problems.", "mint"],
    ["🍰", "Fractions", "Equivalent fractions, comparing fractions and fraction of a quantity.", "coral"],
    ["📐", "Geometry", "Lines, angles, polygons, symmetry and perimeter.", "yellow"],
    ["💰", "Money & Measurement", "Units, conversions, money problems and practical math.", "pink"],
    ["🔍", "Reasoning & Patterns", "Sequences, codes, missing numbers and multi-step puzzles.", "purple"]
  ],

  4: [
    ["🔢", "Whole Numbers", "Place value, factors, multiples, primes and divisibility.", "sky"],
    ["➗", "Operations & Word Problems", "Multi-step calculations and smart problem-solving methods.", "mint"],
    ["🍕", "Fractions & Decimals", "Equivalent forms, comparison, operations and applications.", "coral"],
    ["📐", "Geometry & Angles", "Lines, angles, triangles, quadrilaterals and symmetry.", "yellow"],
    ["📊", "Data Handling", "Tables, pictographs, bar graphs and interpreting data.", "pink"],
    ["🧩", "Advanced Reasoning", "Number puzzles, patterns, analogies and logical deductions.", "purple"]
  ],

  5: [
    ["🔢", "Number Theory", "Factors, multiples, primes, divisibility and number properties.", "sky"],
    ["➗", "Operations & BODMAS", "Complex calculations, brackets and multi-step word problems.", "mint"],
    ["🍕", "Fractions, Decimals & %", "Conversions, operations, comparison and real-life applications.", "coral"],
    ["📐", "Geometry", "Angles, area, perimeter, volume and geometric reasoning.", "yellow"],
    ["📊", "Data & Graphs", "Tables, graphs, averages and interpreting information.", "pink"],
    ["🏆", "Olympiad Challenge", "Mixed-concept puzzles that require creativity and deep thinking.", "purple"]
  ]
};

const colors = {
  sky: "#e9f6ff",
  mint: "#e8fbf5",
  yellow: "#fff7dc",
  coral: "#fff0ed",
  pink: "#fff0f7",
  purple: "#f0edff"
};

let selectedClass = 1;

function renderTopics() {
  const grid = document.getElementById("topicGrid");
  const search = document.getElementById("searchInput").value.trim().toLowerCase();
  const data = topics[selectedClass];

  const filtered = data.filter(item =>
    `${item[1]} ${item[2]}`.toLowerCase().includes(search)
  );

  grid.innerHTML = filtered.map((item, index) => `
    <article class="topic-card" onclick="openTopic('${escapeHtml(item[1])}')">
      <div class="topic-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="topic-icon" style="background:${colors[item[3]]}">
        ${item[0]}
      </div>

      <h3>${item[1]}</h3>

      <p>${item[2]}</p>

      <span class="topic-link">
        Explore topic →
      </span>
    </article>
  `).join("");

  document
    .getElementById("noResults")
    .classList.toggle("hidden", filtered.length !== 0);
}

function escapeHtml(text) {
  return text.replace(/'/g, "\\'");
}

function filterTopics() {
  renderTopics();
}

function openTopic(topic) {
  showToast(`🌟 Great choice! Let's explore "${topic}"!`);
}

function showFunFact() {
  const facts = [
    "🧠 A puzzle is like a workout for your brain!",
    "🔢 Zero is the only number that is neither positive nor negative.",
    "⭐ Patterns help mathematicians predict what comes next.",
    "🍕 Fractions are everywhere — even in your pizza!",
    "🚀 Olympiad math rewards smart thinking, not just fast calculation."
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);

  showToast(facts[randomIndex]);
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function scrollToTopics() {
  document
    .getElementById("topics")
    .scrollIntoView({
      behavior: "smooth"
    });
}

document.querySelectorAll(".class-tab").forEach(tab => {

  tab.addEventListener("click", () => {

    document
      .querySelectorAll(".class-tab")
      .forEach(t => t.classList.remove("active"));

    tab.classList.add("active");

    selectedClass = Number(tab.dataset.class);

    document.getElementById("searchInput").value = "";

    renderTopics();
  });

});

renderTopics();
