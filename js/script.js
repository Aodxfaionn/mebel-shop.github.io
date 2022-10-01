let prevBtn = document.querySelector(".feedback-slider__button-prev");
let nextBtn = document.querySelector(".feedback-slider__button-next");
let feedSlider = document.querySelector(".feedback-slider__container");
let reviewOne = document.querySelector(".review-one");
let reviewLast = document.querySelector(".review-last");
let pagination = document.querySelectorAll(".switch");

function clearClass(elem, itemClass) {
  elem.classList.remove(itemClass);
}
function addClass(elem, itemClass) {
  elem.classList.add(itemClass);
}

// Слайдер с отзывами
const clickRewiev = () => {
  let slideActiv = feedSlider.querySelector(".is-active");
  if (prevBtn) {
    let newActiv =
      feedSlider.querySelector(".is-active").previousElementSibling;
    if (newActiv == null) {
      addClass(reviewLast, "is-active");
      clearClass(slideActiv, "is-active");
    } else {
      addClass(newActiv, "is-active");
      clearClass(slideActiv, "is-active");
    }
  } else {
    let newActiv = feedSlider.querySelector(".is-active").nextElementSibling;
    if (newActiv == null) {
      addClass(reviewOne, "is-active");
      clearClass(slideActiv, "is-active");
    } else {
      addClass(newActiv, "is-active");
      clearClass(slideActiv, "is-active");
    }
  }
};

prevBtn.addEventListener("click", clickRewiev);
nextBtn.addEventListener("click", clickRewiev);

// Табы последний шанс
const tab = function () {
  let tabNav = document.querySelectorAll(".sale__tab-items");
  let tabContent = document.querySelectorAll(".sale__tabs");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => clearClass(item, "sale__tab-open"));
    addClass(this, "sale__tab-open");
    tabName = this.dataset.tabName;
    selectTabContent(tabName);
  }

  function selectTabContent(selectName) {
    tabContent.forEach((item) => {
      item.classList.contains(selectName)
        ? addClass(item, "is-active")
        : clearClass(item, "is-active");
    });
  }
};

tab();
