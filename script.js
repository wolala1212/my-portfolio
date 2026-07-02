const stage = document.querySelector(".project-stage");
const buttons = document.querySelectorAll(".view-btn");

if (stage) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      stage.dataset.mode = button.dataset.view;

      buttons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const hero = document.querySelector(".hero");
const canUseSpotlight = matchMedia("(pointer: fine)").matches;

if (hero && canUseSpotlight) {
  const target = { x: -999, y: -999 };
  const smooth = { x: -999, y: -999 };
  let rafId = 0;

  const moveSpotlight = (event) => {
    const bounds = hero.getBoundingClientRect();
    target.x = event.clientX - bounds.left;
    target.y = event.clientY - bounds.top;
  };

  const hideSpotlight = () => {
    target.x = -999;
    target.y = -999;
  };

  const tick = () => {
    smooth.x += (target.x - smooth.x) * 0.1;
    smooth.y += (target.y - smooth.y) * 0.1;
    hero.style.setProperty("--spot-x", `${smooth.x}px`);
    hero.style.setProperty("--spot-y", `${smooth.y}px`);
    rafId = requestAnimationFrame(tick);
  };

  hero.addEventListener("pointermove", moveSpotlight);
  hero.addEventListener("pointerleave", hideSpotlight);
  rafId = requestAnimationFrame(tick);

  addEventListener("pagehide", () => {
    cancelAnimationFrame(rafId);
  });
}
