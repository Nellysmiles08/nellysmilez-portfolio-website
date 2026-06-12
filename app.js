const UPWORK_URL = "https://www.upwork.com/freelancers/emmanuela469";

const projects = [
  {
    id: "car-iq",
    title: "Car IQ",
    type: "AI Automobile Assistant",
    category: "automotive",
    accent: "#4DA3FF",
    accent2: "#2544A3",
    cover: "car-iq-cover.webp",
    frames: [
      { label: "Cover", src: "car-iq-cover.webp" },
      { label: "Desire", src: "car-iq-desire.webp" },
      { label: "Problem", src: "car-iq-problem.webp" },
      { label: "Solution", src: "car-iq-solution.webp" },
    ],
    intro:
      "An AI-powered car manual experience that helps drivers understand their exact vehicle, explore warning lights, and get faster guidance without digging through a confusing manual.",
    tags: ["AI car manual", "Vehicle dashboard", "Warning lights", "Maintenance guidance"],
    benefits: [
      ["Model-specific clarity", "Every answer is positioned around the driver’s selected vehicle for a more relevant experience."],
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
    cover: "injoy-cover.webp",
    frames: [
      { label: "Cover", src: "injoy-cover.webp" },
      { label: "Desire", src: "injoy-desire.webp" },
      { label: "Problem", src: "injoy-problem.webp" },
      { label: "Solution", src: "injoy-solution.webp" },
    ],
    intro:
      "A dark, creator-focused social app concept that connects content discovery, live moments, real-time reactions, and private messaging inside one modern mobile experience.",
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
    cover: "fitjourney-cover.webp",
    frames: [
      { label: "Cover", src: "fitjourney-cover.webp" },
      { label: "Desire", src: "fitjourney-desire.webp" },
      { label: "Problem", src: "fitjourney-problem.webp" },
      { label: "Solution", src: "fitjourney-solution.webp" },
    ],
    intro:
      "A soft, wellness-focused fitness app for planning routines, following daily workouts, tracking activity, and helping users stay consistent without feeling overwhelmed.",
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
    cover: "budgetly-cover.webp",
    frames: [
      { label: "Cover", src: "budgetly-cover.webp" },
      { label: "Desire", src: "budgetly-desire.webp" },
      { label: "Problem", src: "budgetly-problem.webp" },
      { label: "Solution", src: "budgetly-solution.webp" },
    ],
    intro:
      "A bold fintech concept that helps users view balances, create monthly budgets, track transactions, and organize spending through a playful but trustworthy mobile experience.",
    tags: ["Budget creation", "Transaction sorting", "Balance overview", "Spending control"],
    benefits: [
      ["Stronger money clarity", "Users can move from scattered transactions into budgets, limits, and organized spending flows."],
      ["Playful fintech energy", "Purple gradients, 3D cards, and reward moments make finance feel less stressful."],
      ["Conversion-ready case study", "The visuals explain the product in a way a client can understand within seconds."],
    ],
  },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

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
  if (!projectGrid) return;

  const visibleProjects = projects.filter((project) => {
    return filter === "all" || project.category === filter;
  });

  projectGrid.innerHTML = visibleProjects
    .map((project, index) => {
      return `
        <article
          class="project-card reveal visible"
          tabindex="0"
          role="button"
          aria-label="Open ${project.title} case study"
          data-project="${project.id}"
          style="--p1:${project.accent}; --p2:${project.accent2}; transition-delay:${index * 70}ms"
        >
          <div class="project-image">
            <img src="${project.cover}" alt="${project.title} portfolio cover" loading="lazy" />
          </div>

          <div class="project-info">
            <div class="project-topline">
              <span>${project.type}</span>
              <span>${project.category}</span>
            </div>

            <h3>${project.title}</h3>
            <p>${project.intro}</p>

            <div class="tag-row">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>

            <div class="open-project">View full case study →</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setModalImage(frame, projectTitle) {
  if (!modalImage || !frame) return;

  modalImage.src = frame.src;
  modalImage.alt = `${projectTitle} ${frame.label} portfolio frame`;
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project || !modal) return;

  modal.style.setProperty("--accent", project.accent);
  modal.style.setProperty("--accent-2", project.accent2);

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalEyebrow) modalEyebrow.textContent = `${project.type} • ${project.category}`;
  if (modalDescription) modalDescription.textContent = project.intro;

  if (modalTags) {
    modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  }

  if (modalBenefits) {
    modalBenefits.innerHTML = project.benefits
      .map(([title, text]) => {
        return `
          <div>
            <strong>${title}</strong>
            <span>${text}</span>
          </div>
        `;
      })
      .join("");
  }

  setModalImage(project.frames[0], project.title);

  if (thumbRow) {
    thumbRow.innerHTML = project.frames
      .map((frame, index) => {
        return `
          <button
            type="button"
            class="${index === 0 ? "active" : ""}"
            data-src="${frame.src}"
            data-label="${frame.label}"
            aria-label="Show ${frame.label} frame"
          >
            <img src="${frame.src}" alt="${project.title} ${frame.label} frame thumbnail" />
          </button>
        `;
      })
      .join("");
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeProject() {
  if (!modal) return;

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

renderProjects();

if (projectGrid) {
  projectGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".project-card");
    if (card) openProject(card.dataset.project);
  });

  projectGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest(".project-card");
    if (!card) return;

    event.preventDefault();
    openProject(card.dataset.project);
  });
}

if (thumbRow) {
  thumbRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    $$("button", thumbRow).forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const projectTitle = modalTitle ? modalTitle.textContent : "Portfolio";
    setModalImage(
      {
        src: button.dataset.src,
        label: button.dataset.label,
      },
      projectTitle
    );
  });
}

[modalClose, closeModalBtn].forEach((button) => {
  if (button) button.addEventListener("click", closeProject);
});

if (modal) {
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();

    const isInsideDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom &&
      rect.left <= event.clientX &&
      event.clientX <= rect.right;

    if (!isInsideDialog) closeProject();
  });
}

$$(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

/* Featured hero carousel */
let heroIndex = projects.findIndex((project) => project.id === "budgetly");
if (heroIndex < 0) heroIndex = 0;

const heroImage = $("#heroImage");
const heroTitle = $("#heroTitle");
const heroType = $("#heroType");

function setHero(index) {
  if (!heroImage || !heroTitle || !heroType) return;

  heroIndex = (index + projects.length) % projects.length;
  const project = projects[heroIndex];

  heroImage.style.opacity = "0";

  window.setTimeout(() => {
    const solutionFrame = project.frames.find((frame) => frame.label === "Solution") || project.frames[0];

    heroImage.src = solutionFrame.src;
    heroImage.alt = `${project.title} featured portfolio frame`;
    heroTitle.textContent = project.title;
    heroType.textContent = project.type;

    heroImage.style.opacity = "1";
  }, 180);
}

const previousButton = $(".floating-control.prev");
const nextButton = $(".floating-control.next");

if (previousButton) {
  previousButton.addEventListener("click", () => setHero(heroIndex - 1));
}

if (nextButton) {
  nextButton.addEventListener("click", () => setHero(heroIndex + 1));
}

window.setInterval(() => {
  setHero(heroIndex + 1);
}, 5200);

/* Scroll reveal */
const revealElements = $$(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* Scroll progress and sticky Upwork CTA */
const progress = $(".scroll-bar span");
const sticky = $(".sticky-upwork");

function updateScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

  if (progress) progress.style.width = `${percentage}%`;
  if (sticky) sticky.classList.toggle("visible", window.scrollY > 620);
}

window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

/* Cursor glow */
const glow = $(".cursor-glow");

if (glow) {
  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

/* Magnetic buttons */
$$(".magnetic").forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.08}px, ${y * 0.14}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

/* Subtle 3D tilt cards */
$$(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* Mobile menu */
const menuButton = $(".menu-btn");
const mobileMenu = $(".mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  mobileMenu.addEventListener("click", (event) => {
    if (!event.target.matches("a")) return;

    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
}

/* Keep every Upwork link aligned to the correct profile */
$$('a[href*="upwork.com"]').forEach((link) => {
  link.href = UPWORK_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

/* Footer year */
const year = $("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
