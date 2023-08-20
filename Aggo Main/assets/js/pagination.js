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
    $("#digitalLoadMore").on("click", function(e){
        e.preventDefault();
        $(".digital-team-member:hidden").slice(0, 4).slideDown();
        if($(".digital-team-member:hidden").length == 0) {
        $("#digitalLoadMore").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".design-team-member").slice(0, 8).show();
    $("#designLoadMore").on("click", function(e){
        e.preventDefault();
        $(".design-team-member:hidden").slice(0, 4).slideDown();
        if($(".design-team-member:hidden").length == 0) {
        $("#designLoadMore").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".developer-team-member").slice(0, 8).show();
    $("#webLoadMore").on("click", function(e){
        e.preventDefault();
        $(".developer-team-member:hidden").slice(0, 4).slideDown();
        if($(".developer-team-member:hidden").length == 0) {
        $("#webLoadMore").text("No Content").addClass("noContent");
        }
    });
})
$(document).ready(function(){
    $(".seo-team-member").slice(0, 8).show();
    $("#appLoadMore").on("click", function(e){
        e.preventDefault();
        $(".seo-team-member:hidden").slice(0, 4).slideDown();
        if($(".seo-team-member:hidden").length == 0) {
        $("#appLoadMore").text("No Content").addClass("noContent");
        }
    });
})



// Project Pagination Load More

$(document).ready(function(){
  $(".all-project-list").slice(0, 8).show();
  $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".all-project-list:hidden").slice(0, 4).slideDown();
      if($(".all-project-list:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
      }
  });
})
$(document).ready(function(){
  $(".digital-project-list").slice(0, 8).show();
  $("#digitaLoadMore").on("click", function(e){
      e.preventDefault();
      $(".digital-project-list:hidden").slice(0, 4).slideDown();
      if($(".digital-project-list:hidden").length == 0) {
      $("#digitaLoadMore").text("No Content").addClass("noContent");
      }
  });
})
$(document).ready(function(){
  $(".design-project-list").slice(0, 8).show();
  $("#designLoadMore").on("click", function(e){
      e.preventDefault();
      $(".design-project-list:hidden").slice(0, 4).slideDown();
      if($(".design-project-list:hidden").length == 0) {
      $("#designLoadMore").text("No Content").addClass("noContent");
      }
  });
})
$(document).ready(function(){
  $(".web-project-list").slice(0, 8).show();
  $("#webLoadMore").on("click", function(e){
      e.preventDefault();
      $(".web-project-list:hidden").slice(0, 4).slideDown();
      if($(".web-project-list:hidden").length == 0) {
      $("#webLoadMore").text("No Content").addClass("noContent");
      }
  });
})
$(document).ready(function(){
  $(".app-project-list").slice(0, 8).show();
  $("#appLoadMore").on("click", function(e){
      e.preventDefault();
      $(".app-project-list:hidden").slice(0, 4).slideDown();
      if($(".app-project-list:hidden").length == 0) {
      $("#appLoadMore").text("No Content").addClass("noContent");
      }
  });
})


// Testimonial Pagination
$(document).ready(function(){
  $(".testimonial-paginated-box").slice(0, 6).show();
  $("#testLoadMore").on("click", function(e){
      e.preventDefault();
      $(".testimonial-paginated-box:hidden").slice(0, 4).slideDown();
      if($(".testimonial-paginated-box:hidden").length == 0) {
      $("#testLoadMore").text("No Content").addClass("noContent");
      }
  });
})

//  Portfolio Pagination Start Hear

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


