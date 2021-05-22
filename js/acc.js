const accordionsActionNodes = document.querySelectorAll(".accordion");
const $accordionsAction = [...accordionsActionNodes];

$accordionsAction.forEach((accordion) => {
  accordion
    .querySelector(".accordion__icon")
    .addEventListener("click", (e) => openAccordion(e, accordion));
});

function closeOpenAccordions() {
  $accordionsAction.forEach((accordion) => {
    accordion.classList.remove("accordion--active");
  });
}

function openAccordion(event, parent) {
  if (parent.classList.contains("accordion--active")) {
    parent.classList.toggle("accordion--active");
  } else {
    closeOpenAccordions();
    parent.classList.toggle("accordion--active");
  }
}
