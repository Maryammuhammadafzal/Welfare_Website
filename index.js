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

