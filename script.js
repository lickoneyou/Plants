// popUp

const popUpBtn = document.querySelector(".nav380");
const popUp = document.querySelector(".popUp");

popUpBtn.addEventListener("click", function () {
  if (this.style.transform === "rotate(90deg)") {
    this.style.transform = "rotate(0deg)";
    popUp.style.right = 0;
    popUp.style.right = "-100%";
  } else {
    this.style.transform = "rotate(90deg)";
    popUp.style.right = 0;
  }
});

// blur

const serviceTitleBtns = document.querySelectorAll(
  ".serviceTitleBtns > button"
);
const projects = document.querySelectorAll(".projects > div");

serviceTitleBtns.forEach((el) =>
  el.addEventListener("click", function () {
    serviceTitleBtns.forEach((e) => e.classList.remove("active"));
    el.classList.toggle("active");
    projects.forEach((elem) =>
      elem.dataset.title == el.innerText && el.classList.contains("active")
        ? (elem.style.filter = "blur(3px)")
        : (elem.style.filter = "blur(0px)")
    );
  })
);
