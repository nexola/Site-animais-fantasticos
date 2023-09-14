function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
    console.log(section);
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initTabNav();

initAccordion();

initSmoothScroll();
