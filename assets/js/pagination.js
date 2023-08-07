// Teams Pagination Load More
$(document).ready(function(){
    $(".all-team-member").slice(0, 8).show();
    $(".load-more").on("click", function(e){
        e.preventDefault();
        $(".all-team-member:hidden").slice(0, 4).slideDown();
        if($(".all-team-member:hidden").length == 0) {
        $(".load-more").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".digital-team-member").slice(0, 8).show();
    $(".load-more").on("click", function(e){
        e.preventDefault();
        $(".digital-team-member:hidden").slice(0, 4).slideDown();
        if($(".digital-team-member:hidden").length == 0) {
        $(".load-more").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".design-team-member").slice(0, 8).show();
    $(".load-more").on("click", function(e){
        e.preventDefault();
        $(".design-team-member:hidden").slice(0, 4).slideDown();
        if($(".design-team-member:hidden").length == 0) {
        $(".load-more").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".developer-team-member").slice(0, 8).show();
    $(".load-more").on("click", function(e){
        e.preventDefault();
        $(".developer-team-member:hidden").slice(0, 4).slideDown();
        if($(".developer-team-member:hidden").length == 0) {
        $(".load-more").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".seo-team-member").slice(0, 8).show();
    $(".load-more").on("click", function(e){
        e.preventDefault();
        $(".seo-team-member:hidden").slice(0, 4).slideDown();
        if($(".seo-team-member:hidden").length == 0) {
        $(".load-more").text("No Content").addClass("noContent");
        }
    });
})




//  All Pagination Start Hear
const paginationNumbers = document.getElementById("all-pagination-numbers");
const paginatedList = document.getElementById("all-paginated-list");
const listItems = paginatedList.querySelectorAll(".gallery-image-list");
const nextButton = document.getElementById("all-next-button");
const prevButton = document.getElementById("all-prev-button");

const paginationLimit = 6;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// Pagination End Hear


//  All Pagination Start Hear
// const projectPaginationNumbers = document.getElementById("project-all-paginated-list");
// const projectPaginatedList = document.getElementById("project-all-pagination-numbers");
// const projectAllListItems = projectPaginatedList.querySelectorAll(".all-project-list");
// const projectNextButton = document.getElementById("project-all-next-button");
// const ProjectPrevButton = document.getElementById("project-all-prev-button");

// const projectAllPaginationLimit = 6;
// const projectAllPageCount = Math.ceil(projectAllListItems.length / projectAllPaginationLimit);
// let ProjectAllCurrentPage = 1;

// const projectDisableButton = (button) => {
//   button.classList.add("disabled");
//   button.setAttribute("disabled", true);
// };

// const projectEnableButton = (button) => {
//   button.classList.remove("disabled");
//   button.removeAttribute("disabled");
// };

// const handleProjectAllPageButtonsStatus = () => {
//   if (ProjectAllCurrentPage === 1) {
//     projectDisableButton(ProjectPrevButton);
//   } else {
//     projectEnableButton(ProjectPrevButton);
//   }

//   if (projectAllPageCount === ProjectAllCurrentPage) {
//     projectDisableButton(projectNextButton);
//   } else {
//     projectEnableButton(projectNextButton);
//   }
// };

// const handleProjectAllActivePageNumber = () => {
//   document.querySelectorAll(".pagination-number").forEach((button) => {
//     button.classList.remove("active");
//     const pageIndex = Number(button.getAttribute("page-index"));
//     if (pageIndex == ProjectAllCurrentPage) {
//       button.classList.add("active");
//     }
//   });
// };

// const appendProjectPageNumber = (index) => {
//   const pageNumber = document.createElement("button");
//   pageNumber.className = "pagination-number";
//   pageNumber.innerHTML = index;
//   pageNumber.setAttribute("page-index", index);
//   pageNumber.setAttribute("aria-label", "Page " + index);

//   projectPaginationNumbers.appendChild(pageNumber);
// };

// const getProjectPaginationNumbers = () => {
//   for (let i = 1; i <= projectAllPageCount; i++) {
//     appendProjectPageNumber(i);
//   }
// };

// const setProjectAllCurrentPage = (pageNum) => {
//     ProjectAllCurrentPage = pageNum;

//   handleProjectAllActivePageNumber();
//   handleProjectAllPageButtonsStatus();
  
//   const prevRange = (pageNum - 1) * projectAllPaginationLimit;
//   const currRange = pageNum * projectAllPaginationLimit;

//   projectAllListItems.forEach((item, index) => {
//     item.classList.add("hidden");
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove("hidden");
//     }
//   });
// };

// window.addEventListener("load", () => {
//   getProjectPaginationNumbers();
//   setProjectAllCurrentPage(1);

//   ProjectPrevButton.addEventListener("click", () => {
//     setProjectAllCurrentPage(ProjectAllCurrentPage - 1);
//   });

//   projectNextButton.addEventListener("click", () => {
//     setProjectAllCurrentPage(ProjectAllCurrentPage + 1);
//   });

//   document.querySelectorAll(".pagination-number").forEach((button) => {
//     const pageIndex = Number(button.getAttribute("page-index"));

//     if (pageIndex) {
//       button.addEventListener("click", () => {
//         setProjectAllCurrentPage(pageIndex);
//       });
//     }
//   });
// });


