const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  
  // Adding EventLisntener to the Burger Menu in order to toggle it
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  
  // Adding EventListener to the body and Links
  document.addEventListener("click", (e) => {
    if (!["fas", "burger"].some((el) => e.target.classList.contains(el))) {
      nav.classList.remove("nav-active");
    }
  });
};

navSlide();
