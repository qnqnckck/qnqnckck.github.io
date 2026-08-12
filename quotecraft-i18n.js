(() => {
  const supported = ['ko','en','ja','es','fr','de'];
  const query = new URLSearchParams(location.search).get('lang');
  const browser = navigator.language.slice(0,2);
  const lang = supported.includes(query) ? query : supported.includes(browser) ? browser : 'ko';
  document.documentElement.lang = lang;
  const select = document.querySelector('[data-language]');
  if (select) {
    select.value = lang;
    select.addEventListener('change', () => {
      const url = new URL(location.href); url.searchParams.set('lang', select.value); location.href = url;
    });
  }
  document.querySelectorAll('[data-copy]').forEach((node) => {
    const value = node.getAttribute(`data-${lang}`);
    if (value) node.textContent = value;
  });
  document.querySelectorAll('a[data-keep-lang]').forEach((node) => {
    const url = new URL(node.href); url.searchParams.set('lang', lang); node.href = url;
  });
})();
