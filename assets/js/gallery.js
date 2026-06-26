document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".grid img");

  images.forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  images.forEach(img => observer.observe(img));
});