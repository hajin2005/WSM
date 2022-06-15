//show/hide menu = toggle menu
const toggleMenu = (toggleId, navListId) => {
    //html ==> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);

    const clickHandler = () => {
        //show/hide menu, show-menu
        navList.classList.toggle('show-menu');
    }

    if (toggle && navList) {
        //toggle click 됐을 때
        toggle.addEventListener('click', clickHandler)
    }
}
toggleMenu("nav-toggle", "nav-list");

// const say = function() {
//     console.log('hello world');
// }

// const say = () => {
//     console.log('hello world');
// }

// const say = () => console.log('hello world');
// say();