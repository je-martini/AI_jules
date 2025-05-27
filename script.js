document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Function to apply theme based on preference
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };

  // Check localStorage for saved theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    applyTheme(currentTheme);
  } else {
    // Optional: Check for user's system preference if no localStorage is set
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
      localStorage.setItem('theme', 'dark'); // Save system preference
    }
  }

  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      applyTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      applyTheme(newColorScheme);
      localStorage.setItem('theme', newColorScheme);
  });
});
