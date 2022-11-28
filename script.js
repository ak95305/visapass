$('.slider-hero .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
})


$('.countries-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
    dots: false,
    autoplay: true,
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
})



$('.test-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    },
    dots: true,
    autoplay: true,
})





let featImgs = document.querySelectorAll(".bg-src");
featImgs.forEach((item)=>{
    imgSrc = item.getAttribute("img-src");
    item.style.backgroundImage = "url("+imgSrc+")";
});





// hamburger
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".mob_nav_menu");
let cross = document.querySelector(".close_mob_nav");

hamburger.addEventListener("click", ()=>{
    navMenu.classList.add("active");
    document.body.classList.add("overflow-hidden");
});
cross.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
});
