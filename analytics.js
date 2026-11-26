(function () {
  function send(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params);
    if (typeof window.hj === "function") window.hj("event", name);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (a.closest(".contact")) {
      send("clique_contato", { canal: href.indexOf("mailto:") === 0 ? "email" : href.indexOf("tel:") === 0 ? "telefone" : "linkedin" });
    } else if (a.classList.contains("live")) {
      var p = location.pathname.match(/([\w-]+)\.html$/);
      send("ver_site_no_ar", { case_nome: p ? p[1] : "" });
    } else if (a.closest(".lang")) {
      if (a.getAttribute("aria-current")) return;
      send("troca_idioma", { idioma: a.getAttribute("lang") });
    } else if (a.closest(".case-card")) {
      var m = href.match(/([\w-]+)\.html/);
      send("abrir_case", { case_nome: m ? m[1] : "" });
    }
  });
})();
