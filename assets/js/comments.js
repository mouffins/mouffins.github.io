(function() {
  const giscusConfig = {
    repo: 'mouffins/mouffins.github.io',       // Replace with your GitHub repository (format: 'owner/repo')
    repoId: 'R_kgDOK7w1LQ',                // Replace with your GitHub repo ID
    mapping: 'pathname',                   // Mapping strategy ('pathname', 'url', 'title')
    strict: '0',                          // '1' for strict matching, '0' for non-strict
    theme: 'light',                       // 'light', 'dark', 'preferred_color_scheme'
    reactionsEnabled: '1',                // '1' to enable reactions, '0' to disable
  };

  function createGiscusScript(container, category, categoryId) {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', giscusConfig.repo);
    script.setAttribute('data-repo-id', giscusConfig.repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', giscusConfig.mapping);
    script.setAttribute('data-strict', giscusConfig.strict);
    script.setAttribute('data-theme', giscusConfig.theme);
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled);
    script.crossOrigin = 'anonymous';
    script.async = true;
    container.appendChild(script);
  }

  document.querySelectorAll('.giscus-container').forEach(container => {
    const category = container.getAttribute('data-category');
    const categoryId = container.getAttribute('data-category-id');

    if (category && categoryId) {
      console.log(`Adding Giscus script to container. Category: ${category}, Category ID: ${categoryId}`);
      createGiscusScript(container, category, categoryId);
    } else {
      console.error('Missing category or categoryId for container:', container);
    }
  });
})();