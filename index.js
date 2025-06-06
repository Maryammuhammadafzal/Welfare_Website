window.onload = function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");


    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // let dots = document.getElementsByClassName("dot");
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    // dots[slideIndex-1].className += " active";
  }

  setInterval(() => {
    plusSlides(1);
  }, 3000);
};

document.addEventListener("DOMContentLoaded", () => {

  let toggleMenuIcon = document.getElementById('toggle-menu');
  let mobileMenu = document.getElementById('mobile-menu');

  if (window.innerWidth >= 768) {
    toggleMenuIcon.classList.remove("active");
    mobileMenu.classList.remove("show");
  }
  if (window.innerWidth <= 768) {
    toggleMenuIcon.classList.remove("active");
    mobileMenu.classList.remove("show");
  }

  toggleMenuIcon.addEventListener('click', () => {
    toggleMenuIcon.classList.toggle('active');
    mobileMenu.classList.toggle('show');
  })

  window.addEventListener("click", (e) => {
    if (
      !toggleMenuIcon.contains(e.target) &&
      !mobileMenu.contains(e.target)
    ) {
      toggleMenuIcon.classList.remove("active");
      mobileMenu.classList.remove("show");
    }
  });
});

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function setupCounter(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  let started = false;
  const counters = section.querySelectorAll(".counter");

  function startCounters() {
    if (started) return;
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target").replace(/,/g, "");

      let count = 0;
      const speed = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCount();
    });
    started = true;
  }

  window.addEventListener("scroll", () => {
    if (isInViewport(section)) {
      startCounters();
    }
  });
}

setupCounter("counters");
setupCounter("about-counter");

const counters = document.querySelectorAll(".counter");
  let counterStarted = false;

  function startCounters() {
    if (counterStarted) return;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });

    counterStarted = true;
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  window.addEventListener("scroll", () => {
    const section = document.getElementById("counters");
    if (isInViewport(section)) {
      startCounters();
    }
  });