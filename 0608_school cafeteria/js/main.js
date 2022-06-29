//1. 햄버거 메뉴 : show/hide menu = toggle menu
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

//2.
const addNow = (mainCardId) => {
    //html에서 js로 요소 가져오기
    const mainCard = document.getElementById(mainCardId);

    //다음 식사 -> 몇번째 카드인지
    let now = new Date(); //현재 날짜 가져오기
    let hour = now.getHours(); //now에서 시간 가져오기
    let minute = now.getMinutes(); //now에서 분 가져오기
    let index= 0;
    console.log(`${hour}시 ${minute}분`);
    
    let minutes = (hour*60)+minute;  //(분)으로 단위변환
    
    //조식 끝시각 07:30 => 450분 
    if(minutes>=450) index = 1; //조식 끝->중식(1)
    
    //중식 끝 13:10 => 790분
    else if(minutes>=790) index = 2; //중식 끝->석식(2)
    
    //석식 끝: 18:10 => 1090분
    else if(minutes>=1090) index = 0; //석식 끝-> 조식(0) 
    
    //07:30 이전까지 조식
    else index = 0; 
    
    console.log('index :'+index);
    
    //now 클래스 추가
    let selectedCard = mainCard.getElementsByClassName('card')[index];
    selectedCard.classList.add('now');
}

addNow('main-card'); 
 
// const say = function() {
//     console.log('hello world');
// }

// const say = () => {
//     console.log('hello world');
// }

// const say = () => console.log('hello world');
// say();