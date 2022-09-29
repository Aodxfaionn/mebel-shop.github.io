let prevBtn = document.querySelector(".feedback-slider__button-prev");
let nextBtn = document.querySelector(".feedback-slider__button-next");
let feedSlider = document.querySelector(".feedback-slider__container");
let reviewOne = document.querySelector(".review-one");
let reviewLast = document.querySelector(".review-last");
let pagination = document.querySelectorAll(".switch");

const clearClass = (elem) => {
  elem.classList.remove("is-active");
};

const addClass = (elem) => {
  elem.classList.add("is-active");
};

// Переключатель главного блока
const switchMain = () => {
  this.classList.add('slider__switch-open');
};

for (pag of pagination) {
pag.addEventListener('click', switchMain)
}



// Слайдер с отзывами
/* const clickRewiev = () => {
  let slideActiv = feedSlider.querySelector(".is-active");
  if (prevBtn) {
    let newActiv =
      feedSlider.querySelector(".is-active").previousElementSibling;
    if (newActiv == null) {
      addClass(reviewLast);
      clearClass(slideActiv);
    } else {
      addClass(newActiv);
      clearClass(slideActiv);
    }
  } else {
    let newActiv = feedSlider.querySelector(".is-active").nextElementSibling;
    if (newActiv == null) {
      addClass(reviewOne);
      clearClass(slideActiv);
    } else {
      addClass(newActiv);
      clearClass(slideActiv);
    }
  }
};

prevBtn.addEventListener("click", clickRewiev);
nextBtn.addEventListener("click", clickRewiev); */
