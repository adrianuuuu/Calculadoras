      const menuToggle = document.getElementById("menu-toggle");
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");
      const submenus = document.querySelectorAll(".has-submenu > a");

      // Abrir/fechar menu
      if (menuToggle) {
        menuToggle.addEventListener("click", () => {
          sidebar.classList.toggle("active");
          overlay.classList.toggle("active");
        });
      }

      // Fechar ao clicar fora
      if (overlay) {
        overlay.addEventListener("click", () => {
          sidebar.classList.remove("active");
          overlay.classList.remove("active");
        });
      }

        function toggleDiv(showDiv, hideDiv) {
          hideDiv.classList.remove("show-content");
          showDiv.classList.add("show-content");
        }

        btnYes.addEventListener("click", () => {
          toggleDiv(divYes, divNo);
        });

        btnNo.addEventListener("click", () => {
          toggleDiv(divNo, divYes);
        });

        const hamburger = document.getElementById('hamburger');
        const menuLinks = document.getElementById('menuLinks');

        hamburger.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
  });