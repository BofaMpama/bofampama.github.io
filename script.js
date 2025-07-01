const sidebar = document.querySelector('.sidebar');

function showSidebar(){
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    sidebar.style.display = 'none';

}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting){
            entry.target.classList.add('animateUpReveal');
            entry.target.classList.add('animateDownReveal');
            entry.target.classList.add('animateLeftReveal');
            entry.target.classList.add('animateRightReveal');

        }else {
            entry.target.classList.remove('animateUpReveal');
            entry.target.classList.remove('animateDownReveal');            entry.target.classList.remove('animateDownReveal');
            entry.target.classList.remove('animateLeftReveal');
            entry.target.classList.remove('animateRightReveal');


        }
    });
});

const animateUpElements = document.querySelectorAll(".animateUp");
animateUpElements.forEach((el) => observer.observe(el));

const animateDownElements = document.querySelectorAll(".animateDown");
animateDownElements.forEach((el) => observer.observe(el));

const animateLeftElements = document.querySelectorAll(".animateLeft");
animateLeftElements.forEach((el) => observer.observe(el));

const animateRightElements = document.querySelectorAll(".animateRight");
animateRightElements.forEach((el) => observer.observe(el));