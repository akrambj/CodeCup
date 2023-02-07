let Menu = document.querySelector('#open');
let Close = document.querySelector('#close');

let navMenu = document.querySelector('#navMenu');
let header = document.querySelector('header')



Menu.addEventListener("click", function() {
    Menu.classList.toggle('active');
    navMenu.classList.toggle("active");
});


document.addEventListener("scroll", function(){
    let y = scrollY

    if (y>=30) {
        header.style.backgroundColor = "#16304C"
    } else {
        header.style.backgroundColor = "transparent"
    }
})


