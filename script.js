let acc = document.querySelectorAll(".acc");
const handleClick = () => {};
acc.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.children[1].classList.toggle("display");
    if (element.children[1].classList.contains("display")) {
      element.children[0].children[0].setAttribute(
        "src",
        "./assets/images/icon-minus.svg"
      );
    } else {
      element.children[0].children[0].setAttribute(
        "src",
        "./assets/images/icon-plus.svg"
      );
    }
  });
});
