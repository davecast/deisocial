let timeStart = 5000;
let interation = "";
let marginStart = 0;
let $firstElement;
const $carouselTestimonialsContent = document.querySelector(
  ".carousel__testimonials__content"
);
const $testimonials = document.querySelector(".testimonials");
const testomonialNodes = document.querySelectorAll(".tetimonial");
const $testimonialList = [...testomonialNodes];

const $arrowLeft = document.querySelector(".carousel__arrows--left");
const $arrowRight = document.querySelector(".carousel__arrows--right");

const mq = window.matchMedia("(max-width: 768px)");

window.addEventListener("resize", changeMedia);

$arrowLeft.addEventListener("click", () => {
  handleMove("left");
});
$arrowRight.addEventListener("click", () => {
  handleMove("right");
});

function handleMove(side) {
  move(side);
}

function move(side) {
  const testimonialWidth = mq.matches
    ? $carouselTestimonialsContent.clientWidth
    : $carouselTestimonialsContent.clientWidth / 2;

  const size = testimonialWidth * $testimonialList.length;
  const limitLastElement = size - $carouselTestimonialsContent.clientWidth;

  if (side === "left") {
    marginStart -= testimonialWidth;
  } else {
    marginStart += testimonialWidth;
  }

  marginStart >= testimonialWidth
    ? $arrowLeft.classList.remove("carousel__arrows--hidden")
    : $arrowLeft.classList.add("carousel__arrows--hidden");

  marginStart >= limitLastElement
    ? $arrowRight.classList.add("carousel__arrows--hidden")
    : $arrowRight.classList.remove("carousel__arrows--hidden");

  $testimonials.style.marginLeft = `-${marginStart}px`;
}

function changeMedia() {
  if (mq.matches) {
    $testimonialList.forEach((element) => {
      element.style.width = `${$carouselTestimonialsContent.clientWidth}px`;
    });
  } else {
    $testimonialList.forEach((element) => {
      element.style.width = `${$carouselTestimonialsContent.clientWidth / 2}px`;
    });
  }
}

function initSlide() {
  $firstElement = $testimonials.firstElementChild;
  $arrowLeft.classList.add("carousel__arrows--hidden");
  $testimonialList.forEach((element) => {
    element.style.width = mq.matches
      ? `${$carouselTestimonialsContent.clientWidth}px`
      : `${$carouselTestimonialsContent.clientWidth / 2}px`;
  });
}

initSlide();
