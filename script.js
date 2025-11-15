document.addEventListener("DOMContentLoaded", function () {

  /* ============================================================
      🟦 MOSTRAR / OCULTAR MÓDULOS (solo en index)
  ============================================================ */
  function mostrarModulo(num) {
    const inicio = document.getElementById("inicio");
    const footer = document.getElementById("footer-inicio");
    const modulos = document.querySelectorAll(".modulo");

    if (inicio) inicio.style.display = "none";
    if (footer) footer.style.display = "none";

    modulos.forEach(m => m.style.display = "none");

    const modulo = document.getElementById("modulo" + num);
    if (modulo) modulo.style.display = "block";
  }

  function volverInicio() {
    const inicio = document.getElementById("inicio");
    const footer = document.getElementById("footer-inicio");
    const modulos = document.querySelectorAll(".modulo");

    if (inicio) inicio.style.display = "grid";
    if (footer) footer.style.display = "block";

    modulos.forEach(m => m.style.display = "none");
  }

  window.mostrarModulo = mostrarModulo;
  window.volverInicio = volverInicio;

  /* ============================================================
      🟦 ACORDEONES (solo si existen)
  ============================================================ */
  const acordeonBtns = document.querySelectorAll(".acordeon-titulo");
  acordeonBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      item.classList.toggle("activo");

      acordeonBtns.forEach((other) => {
        if (other !== btn) other.parentElement.classList.remove("activo");
      });
    });
  });

  const subAcordeonBtns = document.querySelectorAll(".subacordeon-titulo");
  subAcordeonBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("activo");
    });
  });

  /* ============================================================
      🟦 BARRA LATERAL Y SUBMENÚS
  ============================================================ */
  const sidebar = document.querySelector(".sidebar");
  const toggleSidebarBtn = document.querySelector(".toggle-sidebar");
  const toggles = document.querySelectorAll(".nav-toggle");

  // Ocultar sidebar al cargar
  if (sidebar) sidebar.classList.add("hidden");

  // Submenús
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.parentElement.classList.toggle("open");
    });
  });

  // Botón flotante abre/cierra sidebar
  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
    });
  }

  // Cerrar sidebar al navegar (solo en ciertas páginas)
  const navLinks = document.querySelectorAll(".sidebar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // No cerrar si es un nav-toggle
      if (this.classList.contains("nav-toggle")) {
        e.preventDefault();
        this.parentElement.classList.toggle("open");
        return;
      }

      if (
        href &&
        (href.includes("index.html") ||
         href.includes("antecedentes.html") ||
         href.includes("buzon.html"))
      ) {
        sidebar.classList.add("hidden");
      }
    });
  });

});


