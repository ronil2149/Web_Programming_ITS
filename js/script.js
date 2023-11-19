let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }
$(document).ready(function () {
    function updateActiveLink() {
      var currentHash = window.location.hash;
  
      $('.nav-link').removeClass('active');
      $('.nav-link[href="' + currentHash + '"]').addClass('active');
    }
  
    updateActiveLink();
  
    $('.nav-link').on('click', function () {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
    });
  
    $(window).on('hashchange', function () {
      updateActiveLink();
    });
  });

document.getElementById("search-icon").onclick = () => {
    document.getElementById("search-form").classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
});
