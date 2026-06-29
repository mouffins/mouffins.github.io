document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".grid img");

  const revealIfReady = img => {
    if (img.dataset.inView === "true" && img.dataset.loaded === "true") {
      img.classList.add("visible");
    }
  };

  const loadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const img = entry.target;

      if (entry.isIntersecting) {
        img.onload = () => {
          img.dataset.loaded = "true";
          revealIfReady(img);
        };

        if (img.dataset.src && !img.src) {
          img.src = img.dataset.src;
        }

        if (img.complete && img.naturalWidth > 0) {
          img.dataset.loaded = "true";
          revealIfReady(img);
        }

        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: "250px 0px",
    threshold: 0.01
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const img = entry.target;

      if (entry.isIntersecting) {
        img.dataset.inView = "true";
        revealIfReady(img);
      } else {
        img.dataset.inView = "false";
      }
    });
  }, {
    rootMargin: "0px",
    threshold: 0.2
  });

  images.forEach(img => {
    img.dataset.loaded = "false";
    img.dataset.inView = "false";

    loadObserver.observe(img);
    revealObserver.observe(img);
  });
});