$(document).ready(function($){
    $('.team-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
        },
        {
            breakpoint: 570,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
        ]
    });


    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 570,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
        ]
    });



    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("#dropdown .dropdown-item");
    const links = document.querySelectorAll("#dropdown ul li");

    hamburger.addEventListener('click', ()=>{
    //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
})

// Card Price Toggle

const checkbox = document.getElementById("pills-tab");
const starter = document.getElementById("starter");
const agency = document.getElementById("agency");
const professional = document.getElementById("professional");

const professionalText = document.getElementById("professionalText");
const agencyText = document.getElementById("agencyText");
const starterText = document.getElementById("starterText");

checkbox.addEventListener("click", () => {
    professional.textContent = professional.textContent === "199" ? "69" : "199";
    starter.textContent = starter.textContent === "250" ? "99 " : "250";
    agency.textContent = agency.textContent === "549" ? "199" : "549";

    professionalText.textContent = professionalText.textContent === "ye" ? "mo" : "ye";
    agencyText.textContent = agencyText.textContent === "ye" ? "mo" : "ye";
    starterText.textContent = starterText.textContent === "ye" ? "mo" : "ye";
  });
  

