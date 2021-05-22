function headerHandler() {
  window.onscroll = function () {
    headerStiky();
  };

  const $header = document.getElementById("header");
  const $burger = document.getElementById("burger");
  const $menu = document.getElementById("menu");

  $burger.addEventListener("click", (e) => {
    toggleMenu();
    toogleBurger();
  });

  /**
   * Declaration functions
   */

  function toogleBurger() {
    $burger.classList.toggle("header__burger--active");
  }
  function toggleMenu() {
    $menu.classList.toggle("header__nav--active");
    $menu.classList.toggle("header__nav--hidden");
  }

  function headerStiky() {
    if (window.pageYOffset >= 80) {
      $header.classList.add("header--stiky");
    } else {
      $header.classList.remove("header--stiky");
    }
  }
}

function scrollToHandler() {
  const $header = document.getElementById("header");

  function scrollTo() {
    const links = document.querySelectorAll(".link__to__go");
    links.forEach((each) => {
      each.onclick = scrollAnchors;
    });
  }

  function scrollAnchors(e, type) {
    let targetID;

    const distanceToTop = (el) => {
      return Math.floor(el.getBoundingClientRect().top);
    };

    if (type) {
      targetID = `#${type}`;
    } else {
      e.preventDefault();
      targetID = this.getAttribute("href")
        ? this.getAttribute("href")
        : `#${this.dataset.target}`;
    }

    const targetAnchor = document.querySelector(targetID);

    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({
      top: originalTop - $header.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  scrollTo();
}

/**
 * Initicar proyecto
 */
headerHandler();
scrollToHandler();
