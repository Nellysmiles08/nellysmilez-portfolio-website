const UPWORK_URL = "https://www.upwork.com/freelancers/emmanuela469";

const projects = [
  {
    id: "car-iq",
    title: "Car IQ",
    type: "AI Automobile Assistant",
    category: "automotive",
    accent: "#4DA3FF",
    accent2: "#2544A3",
    cover: "assets/projects/car-iq-cover.webp",
    frames: [
      { label: "Cover", src: "assets/projects/car-iq-cover.webp" },
      { label: "Desire", src: "assets/projects/car-iq-desire.webp" },
      { label: "Problem", src: "assets/projects/car-iq-problem.webp" },
      { label: "Solution", src: "assets/projects/car-iq-solution.webp" },
    ],
    intro: "An AI-powered car manual experience that helps drivers understand their exact vehicle, explore warning lights, and get faster guidance without digging through a confusing manual.",
    tags: ["AI car manual", "Vehicle dashboard", "Warning lights", "Maintenance guidance"],
    benefits: [
      ["Model-specific clarity", "The app positions every answer around the driver’s selected vehicle for a more relevant experience."],
      ["Practical dashboard value", "Warning lights, maintenance basics, FAQs, and feature controls are presented as clear user pathways."],
      ["Premium automotive feel", "Dark-mode UI, blue highlights, and 3D mockups create a polished car-tech presentation."],
    ],
  },
  {
    id: "injoy",
    title: "INJOY",
    type: "Social Media Mobile App",
    category: "social",
    accent: "#0D99FF",
    accent2: "#FF2D55",
    cover: "assets/projects/injoy-cover.webp",
    frames: [
      { label: "Cover", src: "assets/projects/injoy-cover.webp" },
      { label: "Desire", src: "assets/projects/injoy-desire.webp" },
      { label: "Problem", src: "assets/projects/injoy-problem.webp" },
      { label: "Solution", src: "assets/projects/injoy-solution.webp" },
    ],
    intro: "A dark, creator-focused social app concept that connects content discovery, live moments, real-time reactions, and private messaging inside one modern mobile experience.",
    tags: ["Creator feed", "Live stream", "Private chat", "Real-time reactions"],
    benefits: [
      ["Complete social loop", "The case study shows how users discover posts, join live moments, and continue conversations."],
      ["High-energy presentation", "Dynamic mockup angles and blue social-tech lighting make the product feel alive and premium."],
      ["Client-friendly story", "The work explains the user value without overwhelming the viewer with too many screens."],
    ],
  },
  {
    id: "fitjourney",
    title: "FitJourney",
    type: "Fitness Training App",
    category: "wellness",
    accent: "#F7B8DC",
    accent2: "#F8F6B1",
    cover: "assets/projects/fitjourney-cover.webp",
    frames: [
      { label: "Cover", src: "assets/projects/fitjourney-cover.webp" },
      { label: "Desire", src: "assets/projects/fitjourney-desire.webp" },
      { label: "Problem", src: "assets/projects/fitjourney-problem.webp" },
      { label: "Solution", src: "assets/projects/fitjourney-solution.webp" },
    ],
    intro: "A soft, wellness-focused fitness app for planning routines, following daily workouts, tracking activity, and helping users stay consistent without feeling overwhelmed.",
    tags: ["Workout schedule", "Activity stats", "Progress tracking", "Completion flow"],
    benefits: [
      ["Clear routine flow", "The frames connect setup, daily plan, workout action, and progress tracking into one simple journey."],
      ["Soft motivational tone", "Pastel accents and rounded mockups make the app feel encouraging instead of aggressive."],
      ["Useful product proof", "The case study highlights routine clarity, activity tracking, and visual progress."],
    ],
  },
  {
    id: "budgetly",
    title: "Budgetly",
    type: "Personal Finance App",
    category: "fintech",
    accent: "#6D4DFF",
    accent2: "#27D94F",
    cover: "assets/projects/budgetly-cover.webp",
    frames: [
      { label: "Cover", src: "assets/projects/budgetly-cover.webp" },
      { label: "Desire", src: "assets/projects/budgetly-desire.webp" },
      { label: "Problem", src: "assets/projects/budgetly-problem.webp" },
      { label: "Solution", src: "assets/projects/budgetly-solution.webp" },
    ],
    intro: "A bold fintech concept that helps users view balances, create monthly budgets, track transactions, and organize spending through a playful but trustworthy mobile experience.",
    tags: ["Budget creation", "Transaction sorting", "Balance overview", "Spending control"],
    benefits: [
      ["Stronger money clarity", "Users can move from scattered transactions into budgets, limits, and organized spending flows."],
      ["Playful fintech energy", "Purple gradients, 3D cards, and reward moments make finance feel less stressful."],
      ["Conversion-ready case study", "The visuals explain the product in a way a client can understand within seconds."],
    ],
  },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const projectGrid = $("#projectGrid");
const modal = $("#projectModal");
const modalImage = $("#modalImage");
const thumbRow = $("#thumbRow");
const modalTitle = $("#modalTitle");
const modalDescription = $("#modalDescription");
const modalEyebrow = $("#modalEyebrow");
const modalTags = $("#modalTags");
const modalBenefits = $("#modalBenefits");
const closeModalBtn = $("#closeModalBtn");
const modalClose = $(".modal-close");

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  projectGrid.innerHTML = visible.map((project, index) => `
    <article class="project-card reveal visible" tabindex="0" role="button" aria-label="Open ${project.title} case study" data-project="${project.id}" style="--p1:${project.accent};--p2:${project.accent2};transition-delay:${index * 70}ms">
      <div class="project-image"><img src="${project.cover}" alt="${project.title} portfolio cover" loading="lazy" /></div>
      <div class="project-info">
        <div class="project-topline"><span>${project.type}</span><span>${project.category}</span></div>
        <h3>${project.title}</h3>
        <p>${project.intro}</p>
        <div class="tag-row">${project.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="open-project">View full case study →</div>
      </div>
    </article>
  `).join("");
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  modal.style.setProperty("--accent", project.accent);
  modal.style.setProperty("--accent-2", project.accent2);
  modalTitle.textContent = project.title;
  modalEyebrow.textContent = `${project.type} • ${project.category}`;
  modalDescription.textContent = project.intro;
  modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalBenefits.innerHTML = project.benefits.map(([title, text]) => `<div><strong>${title}</strong><span>${text}</span></div>`).join("");
  setModalImage(project.frames[0], project.title);
  thumbRow.innerHTML = project.frames.map((frame, index) => `
    <button type="button" class="${index === 0 ? "active" : ""}" data-src="${frame.src}" data-label="${frame.label}" aria-label="Show ${frame.label} frame">
      <img src="${frame.src}" alt="${project.title} ${frame.label} frame thumbnail" />
    </button>
  `).join("");

  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
}

function setModalImage(frame, projectTitle) {
  modalImage.src = frame.src;
  modalImage.alt = `${projectTitle} ${frame.label} portfolio frame`;
}

function closeProject() {
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
}

renderProjects();

projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (card) openProject(card.dataset.project);
});
projectGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".project-card");
  if (card) {
    event.preventDefault();
    openProject(card.dataset.project);
  }
});

thumbRow.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  $$("button", thumbRow).forEach((item) => item.classList.remove("active"));
  btn.classList.add("active");
  const projectTitle = modalTitle.textContent;
  setModalImage({ src: btn.dataset.src, label: btn.dataset.label }, projectTitle);
});

[modalClose, closeModalBtn].forEach((button) => button.addEventListener("click", closeProject));
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog = rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;
  if (!isInDialog) closeProject();
});

$$(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

// Featured hero carousel
let heroIndex = 0;
const heroImage = $("#heroImage");
const heroTitle = $("#heroTitle");
const heroType = $("#heroType");
function setHero(index) {
  heroIndex = (index + projects.length) % projects.length;
  const project = projects[heroIndex];
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.src = project.frames[3].src;
    heroImage.alt = `${project.title} featured portfolio frame`;
    heroTitle.textContent = project.title;
    heroType.textContent = project.type;
    heroImage.style.opacity = 1;
  }, 180);
}
$(".floating-control.prev").addEventListener("click", () => setHero(heroIndex - 1));
$(".floating-control.next").addEventListener("click", () => setHero(heroIndex + 1));
setInterval(() => setHero(heroIndex + 1), 5200);

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
$$(".reveal").forEach((el) => observer.observe(el));

// Scroll progress and sticky CTA
const progress = $(".scroll-bar span");
const sticky = $(".sticky-upwork");
function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${percent}%`;
  sticky.classList.toggle("visible", window.scrollY > 620);
}
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

// Cursor glow
const glow = $(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

// Magnetic buttons and subtle tilt cards
$$(".magnetic").forEach((el) => {
  el.addEventListener("mousemove", (event) => {
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.14}px)`;
  });
  el.addEventListener("mouseleave", () => { el.style.transform = ""; });
});

$$(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  card.addEventListener("mouseleave", () => { card.style.transform = ""; });
});

// Mobile menu
const menuBtn = $(".menu-btn");
const mobileMenu = $(".mobile-menu");
menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
});
mobileMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
  }
});

// Keep all Upwork links aligned to the provided profile
$$('a[href*="upwork.com"]').forEach((link) => {
  link.href = UPWORK_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

$("#year").textContent = new Date().getFullYear();
