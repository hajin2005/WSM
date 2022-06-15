//show/hide menu = toggle menu
const toggleMenu = (toggleId, navListId) => {
    //html ==> js 요소 가져오기
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navList) {
        //toggle click 됐을 때
        toggle.addEventListener('click', () => {
            //show/hide menu, show-menu
            navList.classList.toggle('show-menu');
            //change toggle item: bx menu<->bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle")
        })

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