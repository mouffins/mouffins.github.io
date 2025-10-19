(function () {
  const PIECES = 30;
  const BASE_DURATION = 4.0;
  const SPAWN_INTERVAL = 100; // ms between each piece creation

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  const container = document.getElementById('confetti-container');
  const triggers = document.querySelectorAll('.confetti-trigger');
  if (!container) return;

  triggers.forEach(trigger => {
    const imgUrl = trigger.dataset.confetti;

    trigger.addEventListener('mouseenter', () => {
      // Gradually spawn confetti
      let count = 0;
      const spawn = setInterval(() => {
        if (count >= PIECES) {
          clearInterval(spawn);
          return;
        }
        createConfettiPiece(imgUrl);
        count++;
      }, SPAWN_INTERVAL);
    });
  });

  function createConfettiPiece(imgUrl) {
    const wrapper = document.createElement('div');
    wrapper.className = 'confetti';

    const img = document.createElement('img');
    img.src = imgUrl;
    wrapper.appendChild(img);

    // Larger size range
    const size = Math.round(rand(40, 70));
    wrapper.style.width = size + 'px';
    wrapper.style.height = 'auto';

    // Random position across the full width, start higher above screen
    wrapper.style.left = rand(0, 100) + '%';
    wrapper.style.top = rand(-300, -80) + 'px'; // was fixed at -60px

    // Animation parameters
    const delay = rand(0, 0.5);
    const duration = rand(BASE_DURATION * 0.9, BASE_DURATION * 1.3);
    const driftX = Math.round(rand(-200, 200));
    const fallDistance = Math.round(rand(window.innerHeight * 0.9, window.innerHeight * 1.4));
    const endRot = Math.round(rand(360, 1440));

    wrapper.style.animationName = 'fall';
    wrapper.style.animationDelay = delay + 's';
    wrapper.style.animationDuration = duration + 's';
    wrapper.style.animationTimingFunction = 'cubic-bezier(.2,.6,.35,1)';
    wrapper.style.animationFillMode = 'forwards';
    wrapper.style.setProperty('--drift-x', driftX + 'px');
    wrapper.style.setProperty('--fall-distance', fallDistance + 'px');
    wrapper.style.setProperty('--end-rot', endRot + 'deg');
    wrapper.style.opacity = '1';

    container.appendChild(wrapper);

    // Cleanup
    const removeAfter = () => wrapper.remove();
    wrapper.addEventListener('animationend', removeAfter, { once: true });
    setTimeout(removeAfter, (duration + delay + 0.5) * 1000);
  }
})();
