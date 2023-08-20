



// wow js animate

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
})


// Team Slick Slider

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

// Testimonial Slick Slider

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


    // Nav Bar 

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

  window.addEventListener("load", (event) => {
      checkbox.addEventListener("click", () => {
          professional.textContent = professional.textContent === "199" ? "69" : "199";
          starter.textContent = starter.textContent === "250" ? "99 " : "250";
          agency.textContent = agency.textContent === "549" ? "199" : "549";
          
          professionalText.textContent = professionalText.textContent === "y" ? "m" : "y";
          agencyText.textContent = agencyText.textContent === "y" ? "m" : "y";
          starterText.textContent = starterText.textContent === "y" ? "m" : "y";
      });
    });



//   Back To Top Icon
  var btn = $('#back-icon');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

  



  // Testimonial Pagination Start Hear

// window.addEventListener("load", (event) => {
//   const paginationNumbers = document.getElementById("pagination-numbers");
//   const paginatedList = document.getElementById("testimonial-paginated-list");
//   const listItems = paginatedList.querySelectorAll(".testimonial-paginated-box");
//   const nextButton = document.getElementById("next-button");
//   const prevButton = document.getElementById("prev-button");
  
  
//     const paginationLimit = 6;
//     const pageCount = Math.ceil(listItems.length / paginationLimit);
//     let currentPage = 1;
    
//     const disableButton = (button) => {
//       button.classList.add("disabled");
//       button.setAttribute("disabled", true);
//     };
    
//     const enableButton = (button) => {
//       button.classList.remove("disabled");
//       button.removeAttribute("disabled");
//     };
    
//     const handlePageButtonsStatus = () => {
//       if (currentPage === 1) {
//         disableButton(prevButton);
//       } else {
//         enableButton(prevButton);
//       }
    
//       if (pageCount === currentPage) {
//         disableButton(nextButton);
//       } else {
//         enableButton(nextButton);
//       }
//     };
    
//     const handleActivePageNumber = () => {
//       document.querySelectorAll(".pagination-number").forEach((button) => {
//         button.classList.remove("active");
//         const pageIndex = Number(button.getAttribute("page-index"));
//         if (pageIndex == currentPage) {
//           button.classList.add("active");
//         }
//       });
//     };
    
//     const appendPageNumber = (index) => {
//       const pageNumber = document.createElement("button");
//       pageNumber.className = "pagination-number";
//       pageNumber.innerHTML = index;
//       pageNumber.setAttribute("page-index", index);
//       pageNumber.setAttribute("aria-label", "Page " + index);
    
//       paginationNumbers.appendChild(pageNumber);
//     };
    
//     const getPaginationNumbers = () => {
//       for (let i = 1; i <= pageCount; i++) {
//         appendPageNumber(i);
//       }
//     };
    
//     const setCurrentPage = (pageNum) => {
//       currentPage = pageNum;
    
//       handleActivePageNumber();
//       handlePageButtonsStatus();
      
//       const prevRange = (pageNum - 1) * paginationLimit;
//       const currRange = pageNum * paginationLimit;
    
//       listItems.forEach((item, index) => {
//         item.classList.add("hidden");
//         if (index >= prevRange && index < currRange) {
//           item.classList.remove("hidden");
//         }
//       });
//     };
    
//     window.addEventListener("load", () => {
//       getPaginationNumbers();
//       setCurrentPage(1);
    
//       prevButton.addEventListener("click", () => {
//         setCurrentPage(currentPage - 1);
//       });
    
//       nextButton.addEventListener("click", () => {
//         setCurrentPage(currentPage + 1);
//         console.log("hello");
//       });
    
//       document.querySelectorAll(".pagination-number").forEach((button) => {
//         const pageIndex = Number(button.getAttribute("page-index"));
    
//         if (pageIndex) {
//           button.addEventListener("click", () => {
//             setCurrentPage(pageIndex);
//           });
//         }
//       });
//     });
//   })
  
  







