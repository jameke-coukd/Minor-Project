searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

const userIcon = document.getElementById('login-btn');
const loginFormContainer = document.querySelector('.login-form-container');
const closeLoginButton = document.getElementById('close-login-btn');

// Function to toggle the login form container visibility
function toggleLoginForm() {
  loginFormContainer.classList.toggle('active');
}

// Add click event listeners to the user icon and close button
userIcon.addEventListener('click', toggleLoginForm);
closeLoginButton.addEventListener('click', toggleLoginForm);


const createAccountLink = document.getElementById('create-account-link');
const signupContainer = document.getElementById('signup-container');

createAccountLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.style.display = 'none';
        signupContainer.style.display = 'block';
});

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    //fadeOut();
}
var swiper = new Swiper(".books-slider .swiper-container", {
      // Configure the options for the Swiper carousel
    slidesPerView: "auto",
    navigation: {
        nextEl: ".books-slider .swiper-button-next",
        prevEl: ".books-slider .swiper-button-prev",
      },
});
 
var swiper = new Swiper('.crime-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.horror-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.Mythological-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.romantic-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

var swiper = new Swiper('.tragedy-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});
var swiper = new Swiper('.arrivals-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});
var swiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});
var swiper = new Swiper('.blogs-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 900, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allow user interaction to interrupt autoplay
    },
});

const crimeLink = document.querySelector('#crime a');

crimeLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(crimeLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});


const horrorLink = document.querySelector('#horror a');

horrorLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(horrorLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});


const mythLink = document.querySelector('#Mythological a');

mythLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(mythLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});

const romanticLink = document.querySelector('#romantic a');

romanticLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(romanticLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});
const tragedyLink = document.querySelector('#tragedy a');

tragedyLink.addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.querySelector(tragedyLink.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});
