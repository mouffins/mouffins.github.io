document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".gallery-section");

  sections.forEach(section => {
    const toggle = section.querySelector(".gallery-toggle");
    const grid = section.querySelector(".grid");

    toggle.addEventListener("click", () => {
      const expanded = grid.classList.toggle("expanded");
      toggle.classList.toggle("active", expanded);

      if (expanded) {
        grid.querySelectorAll("img").forEach(img => {
          // Load image if not already loaded
          if (!img.src) {
            img.src = img.dataset.src;
            img.loading = "lazy";

            // Fade-in observer
            const observer = new IntersectionObserver((entries, obs) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  obs.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1 });

            observer.observe(img);
          }
        });
      }
    });
  });
});
