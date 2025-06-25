const fadeInMenu = document.querySelector(".fade-in-menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(){
    if(fadeInMenu.classList.contains("showMenu")){
        fadeInMenu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else{
        fadeInMenu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener(clickMe(), toggleMenu);

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener(clickMe(), toggleMenu);
    }
)



const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
    });

    const scrollerInner = scroller.querySelector('.scroller__inner');
 //   const scrollerContent = scrollerInner.
}