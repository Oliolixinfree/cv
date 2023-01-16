document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.querySelector('.mode-switcher');

  themeSwitcher.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    toggleTheme();
  });

  const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme', 'dark');
    }
  };

  toggleTheme();
});
