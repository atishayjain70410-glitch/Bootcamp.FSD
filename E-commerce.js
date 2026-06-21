// ===================== SEARCH PRODUCTS =====================

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    products.forEach(function (product) {

        let name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});

// ===================== ADD TO CART =====================

let cart = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartIcon = document.querySelector(".fa-cart-shopping");

cartButtons.forEach(function(button){

    button.addEventListener("click",function(){

        cart++;

        alert("Product Added To Cart!");

        cartIcon.innerHTML = `🛒 ${cart}`;

    });

});

// ===================== CALCULATOR =====================

const display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        alert("Invalid Expression");

        display.value = "";

    }

}

// ===================== SHOP NOW BUTTON =====================

const shopBtn = document.querySelector(".hero button");

shopBtn.addEventListener("click",function(){

    document.getElementById("products").scrollIntoView({

        behavior:"smooth"

    });

});

// ===================== CONTACT FORM =====================

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent.");

    form.reset();

});

// ===================== NAVBAR ACTIVE LINK =====================

const links = document.querySelectorAll("nav ul li a");

links.forEach(function(link){

    link.addEventListener("click",function(){

        links.forEach(function(l){

            l.style.color="#333";

        });

        this.style.color="#ff4d6d";

    });

});

// ===================== IMAGE HOVER EFFECT =====================

const images = document.querySelectorAll(".product img");

images.forEach(function(img){

    img.addEventListener("mouseenter",function(){

        img.style.transform="scale(1.05)";
        img.style.transition=".3s";

    });

    img.addEventListener("mouseleave",function(){

        img.style.transform="scale(1)";

    });

});

// ===================== PAGE LOADED =====================

window.onload=function(){

    console.log("Blooming Craft Website Loaded Successfully!");

};