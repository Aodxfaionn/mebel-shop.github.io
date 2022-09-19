let saleTab = document.querySelectorAll(".sale__tab-items");

for (let tab of saleTab) {
  tab.addEventListener("mouseover", function () {
    tab.classList.toggle("sale__tab-open");
  });
}


let lastProduct = document.querySelectorAll(".container__product");

for (let last of lastProduct) {
  last.addEventListener("mouseover", function () {
    last.classList.add("border");
  });
  last.addEventListener("mouseout", function () {
    last.classList.remove("border");
  });
}
