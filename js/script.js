// toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");
// when hamburger menu on click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active"); 
};

// toogle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// toogle clas active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// click outside
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// modal box
document.querySelector(".sleeves").onclick = (e) => {
  document.querySelector("#modal-sleeves").style.display = "flex";
  e.preventDefault();
};
document.querySelector(".loose").onclick = (e) => {
  document.querySelector("#modal-loose").style.display = "flex";
  e.preventDefault();
};
document.querySelector(".fit").onclick = (e) => {
  document.querySelector("#modal-fit").style.display = "flex";
  e.preventDefault();
};
document.querySelector(".ribbed").onclick = (e) => {
  document.querySelector("#modal-ribbed").style.display = "flex";
  e.preventDefault();
};
document.querySelector(".striped").onclick = (e) => {
  document.querySelector("#modal-striped").style.display = "flex";
  e.preventDefault();
};

// close button
document.querySelectorAll(".modal .close-icon").forEach((element) => {
  element.addEventListener("click", (e) => {
    detailCoffeBeans.style.display = "none";
    document.querySelector("#modal-sleeves").style.display = "none";
    document.querySelector("#modal-loose").style.display = "none";
    document.querySelector("#modal-fit").style.display = "none";
    document.querySelector("#modal-ribbed").style.display = "none";
    document.querySelector("#modal-striped").style.display = "none";
    e.preventDefault();
  });
});

// notification
document.querySelector("#cari").onclick = (e) => {
  swal("Sorry :(", "Feature not working now", "error");
  e.preventDefault();
};

document.querySelectorAll(".add").forEach((element) => {
  element.addEventListener("click", (e) => {
    swal("Success!", "Successfully added to cart", "success");
    e.preventDefault();
  });
});

document.querySelectorAll(".cart").forEach((element) => {
  element.addEventListener("click", (e) => {
    swal("Success!", "Successfully added to cart", "success");
    e.preventDefault();
  });
});
document.querySelector(".btn").onclick = (e) => {
  swal("Sent!", "Your message has been sent", "success");
  e.preventDefault();
};
document.querySelector(".cekout").onclick = (e) => {
  swal("Sorry :(", "Feature not working now", "error");
  e.preventDefault();
};
document.querySelectorAll(".remove-item").forEach((element) => {
  element.addEventListener("click", (e) => {
    swal("Sorry :(", "Feature not working now", "error");
    e.preventDefault();
  });
});
