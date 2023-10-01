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

// accordion

const accordion_btn = document.querySelectorAll(".accordion_btn");

accordion_btn.forEach((el) =>
  el.addEventListener("click", function () {
    this.classList.toggle("btnActive");
    this.parentNode.parentNode.classList.toggle("accActive");
  })
);

// Contacts accordion

const contact = {
  Yonkers: {
    city: "Yonkers, NY",
    phone: "+1	914	678 0003",
    office: "511 Warburton Ave",
  },
  Canandaigua: {
    city: "Canandaigua, NY",
    phone: "+1	585	393 0001",
    office: "151 Charlotte Street",
  },
  Sherrill: {
    city: "Sherrill, NY",
    phone: "+1	315	908 0004",
    office: "14 WEST Noyes BLVD",
  },
  NY: {
    city: "New York City",
    phone: "+1	212	456 0002",
    office: "9 East 91st Street",
  },
};

const city_accordion_btn = document.querySelector(".city_accordion_btn");
const adresses = document.querySelector(".adresses");

city_accordion_btn.addEventListener("click", function () {
  this.classList.toggle("btnActive");
  adresses.classList.toggle("adresses__active");
  adressWrapper.style.display = "none";
});

const adress = document.querySelectorAll(".adresses > div");
const adressWrapper = document.querySelector(".adress");

adress.forEach((el) =>
  el.addEventListener("click", function () {
    const data = this.dataset.city;
    city_accordion_btn.classList.remove("btnActive");
    adresses.classList.remove("adresses__active");
    adressWrapper.style.display = "flex";
    adressWrapper.innerHTML = `
    <div>
      <p class='adressKey'>City:</p>
      <p class='adressValue'>${contact[data].city}</p>
    </div>
    <div>
      <p class='adressKey'>Phone:</p>
      <p class='adressValue'>${contact[data].phone}</p>
    </div>
    <div>
      <p class='adressKey'>Office adress:</p>
      <p class='adressValue'>${contact[data].office}</p>
    </div>
    `;
  })
);
