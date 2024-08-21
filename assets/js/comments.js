// utterances.js

(function () {
  const repo = 'mouffins/mouffins.github.io';

  // Function to initialize Utterances
  function loadUtterances(containerId) {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', `#${containerId}`); // Unique issue per container ID
    script.setAttribute('theme', 'dark-blue');
    script.crossOrigin = 'anonymous';
    script.async = true;

    // Append the script to the comments section container
    document.querySelector(`#${containerId}`).appendChild(script);
  }

  // Load Utterances for all containers
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.utterances-comments').forEach(container => {
      const containerId = container.id;
      if (containerId) {
        loadUtterances(containerId);
      }
    });
  });
})();