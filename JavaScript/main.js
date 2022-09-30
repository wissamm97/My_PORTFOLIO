let allIcon = document.querySelectorAll(".nav-bullets i");
let allLink = document.querySelectorAll(".link a");
function scrollToSomSection(element) {
  element.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
      handleActive(e);
    });
  });
}
function handleActive(e) {
  e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  e.target.classList.add("active");
}
scrollToSomSection(allIcon);
scrollToSomSection(allLink);
let ourSkills = document.querySelector(".skills");
let spanToTop = document.querySelector(".to-top");
spanToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    spanToTop.classList.add("show");
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    spanToTop.classList.remove("show");

    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = "0";
    });
  }
};
