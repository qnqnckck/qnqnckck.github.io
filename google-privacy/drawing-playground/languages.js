"use strict";
// Progressive enhancement: all six complete sections remain readable without JavaScript.
(() => {
  const sections = Array.from(document.querySelectorAll("article.locale"));
  const links = Array.from(document.querySelectorAll(".languages a"));
  const supported = sections.map(section => section.id);
  const fromSystem = () => {
    const language = (navigator.language || "en").toLowerCase();
    if (language.startsWith("ko")) return "ko";
    if (language.startsWith("ja")) return "ja";
    if (language.startsWith("zh")) return "zh-CN";
    if (language.startsWith("es")) return "es";
    if (language.startsWith("pt")) return "pt-BR";
    return "en";
  };
  const select = () => {
    const requested = location.hash.slice(1);
    const selected = supported.includes(requested) ? requested : fromSystem();
    for (const section of sections) {
      section.hidden = section.id !== selected;
      if (!section.hidden) {
        document.documentElement.lang = selected;
        document.title = section.dataset.title;
      }
    }
    for (const link of links) {
      if (link.hash === "#" + selected) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };
  select();
  addEventListener("hashchange", select);
})();
