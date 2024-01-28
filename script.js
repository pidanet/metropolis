const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const changeIcon = (icon1, icon2, view) => {
  hamburgerIcon.classList.add(icon1);
  hamburgerIcon.classList.remove(icon2);
  menuList.style.display = view;
};

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    changeIcon("fa-xmark", "fa-bars", "block");
  } else {
    changeIcon("fa-bars", "fa-xmark", "none");
  }
});
