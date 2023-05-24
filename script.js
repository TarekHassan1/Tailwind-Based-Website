
const Pages = document.querySelector(".pages");
const pagesUl = document.querySelector(".pages-ul");
const menuIcons = document.querySelector(".menu-icon");
const nextHalf = document.querySelector(".next-half");

menuIcons.addEventListener("click", () => {
  if (nextHalf.offsetHeight === 0) {
    nextHalf.style.height = "404px";
  } else {
    nextHalf.style.height = "0px";
  }
});

Pages.addEventListener("mouseover", () => {
  pagesUl.style.display = "flex";
  pagesUl.style.flexDirection = "column";
});

Pages.addEventListener("mouseout", (e) => {
  if (e.relatedTarget !== pagesUl) {
    pagesUl.style.display = "none";
  }
});

pagesUl.addEventListener("mouseleave", (e) => {
  if (e.relatedTarget !== Pages) {
    pagesUl.style.display = "none";
  }
});

const images = document.querySelectorAll(".services .container .service img");
images.forEach((e) => {
  const t = e.parentElement;
  t.addEventListener("mouseenter", () => {
    e.src = "img/icon-shape-white.png";
  });
  t.addEventListener("mouseleave", () => {
    e.src = "img/icon-shape-primary.png";
  });
});

const home_h2 = document.querySelector(".home-h2");
const home_p = document.querySelector(".home-p");
const home_btn1 = document.querySelector(".home-btn1");
const home_btn2 = document.querySelector(".home-btn2");
const home = document.querySelector(".home");

const about_right = document.querySelector(".about .right");
const about_img = document.querySelector(".about .image-container");
const about = document.querySelector(".about");

const subscribe = document.querySelector(".subscribe");

const services = document.querySelectorAll(".services .container .service");
const services_Container = document.querySelector(".services");

const projects_Header = document.querySelector(".projects .header");
const projects_Types = document.querySelector(".projects .types");
const projects_Types_spans = document.querySelectorAll(".projects .types span");
const projects = document.querySelectorAll(".projects .projects-container .project");
const projects_content = document.querySelector(".projects .projects-container ");
const projects_Container = document.querySelector(".projects");

const testmonials = document.querySelector(".testmonials");

const team_Members = document.querySelectorAll(".team .members .member");
const team = document.querySelector(".team");

const footer = document.querySelector(".footer");

window.addEventListener("DOMContentLoaded", () => {
    let e = window.scrollY;
  let t = window.innerHeight;

  if (home.offsetTop <= e + 0.2 * t) {
    home_h2.style.scale = "1";
    home_p.style.scale = "1";
    home_btn1.style.transform = "translateX(0px)";
    home_btn2.style.transform = "translateX(0px)";
  }
})

window.addEventListener("scroll", () => {
  let e = window.scrollY;
  let t = window.innerHeight;


  if (subscribe.offsetTop <= e + 0.2 * t) {
    subscribe.style.transform = "translateY(0px)";
  }

    if (about.offsetTop <= e + 0.8 * t) {
    about_img.style.scale = "1";
    about_img.style.opacity = "1";
    about_right.style.transform = "translateY(0px)";
    about_right.style.opacity = "1";
  }

  if (services_Container.offsetTop <= e + 0.5 * t) {
    services.forEach((e) => {
      e.style.scale = "1";
      e.style.opacity = "1";
    });
  }

  if (projects_Container.offsetTop <= e + 0.3 * t) {
    projects_Header.style.transform = "translateY(0px)";
    projects_Header.style.opacity = "1";
    projects_Types.style.transform = "translateY(0px)";
    projects_Types.style.opacity = "1";
    projects.forEach((e) => {
      e.style.scale = "1";
    });
  }

  if (testmonials.offsetTop <= e + 0.3 * t) {
    testmonials.style.transform = "translateY(0px)";
  }

  if (team.offsetTop <= e + 0.3 * t) {
    team_Members.forEach((e) => {
      e.style.transform = "translateY(0px)";
      e.style.opacity = "1";
    });
  }

  if (footer.offsetTop <= e + t) {
    footer.style.opacity = "1";
  }
});

projects_Types_spans.forEach((e) => {
  e.onclick = () => {
    projects_Types_spans.forEach((e) => {
      e.classList.remove("active-type");
    });

    e.classList.add("active-type");
    let t = e.textContent.toLowerCase();

    projects.forEach((e) => {
      if (e.classList.contains(t)) {
        e.style.display = "block";
        e.style.scale = "1";
        e.classList.add("show");
      } else {
        e.style.display = "none";
        e.classList.remove("show");
      }
    });
  };
});

window.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector(".types span:nth-of-type(1)");
  e.click();
});


var slider = tns({
  container: '#reviews',
  items: 1,
  slideBy: 'page',
  speed: 700,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  nav: false,
  mouseDrag: true,
  touch: true,

});
