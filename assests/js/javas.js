// ============= Add Hovered Class to selected items ========

let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item)=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
};

list.forEach((item)=>item.addEventListener("mouseover",activeLink));



// ================= Toggle Menu =================

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let navParent = document.querySelector('.navParent');
let mainParent = document.querySelector('.mainParent');
let spcCard = document.querySelectorAll('.mdCount');

toggle.onclick = function (){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    mainParent.classList.toggle('mainWidth');
    navParent.classList.toggle('navWidth');
    // ======= xs =======
    navParent.classList.toggle('col-3');
    navParent.classList.toggle('col-1');
    mainParent.classList.toggle('col-9');
    mainParent.classList.toggle('col-11');
    // ======= Md =======
    // spcCard.forEach((item)=>item.classList.toggle('col-md-6'))
    // ======= Lg =======
    navParent.classList.toggle('col-lg-1');
    navParent.classList.toggle('col-lg-3');
    mainParent.classList.toggle('col-lg-11');
    mainParent.classList.toggle('col-lg-9');

    navigation.classList.toggle('clear');
};

// if (navigation.classList.contains('active')){
//     navParent.classList.replace('col-lg-3' , 'col-lg-1');
//     mainParent.classList.replace('col-lg-9' , 'col-lg-11');
// }
