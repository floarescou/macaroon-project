// плавная прокрутка к нужной секции
// пункты меню
const productsBtn = document.getElementById("productsBtn");
const aboutBtn = document.getElementById("aboutBtn");
const orderBtn = document.getElementById("orderBtn");

const productsBtnMobile = document.getElementById("productsBtn-mobile");
const aboutBtnMobile = document.getElementById("aboutBtn-mobile");
const orderBtnMobile = document.getElementById("orderBtn-mobile");

// секции страницы
const aboutSection = document.getElementById("aboutSection");
const productsSection = document.getElementById("productsSection");
const orderSection = document.getElementById("orderSection");

const productsTitles = document.getElementsByClassName("products-block__title");
const orderBlockBtns = document.getElementsByClassName("block__btn");

const orderSelectField = document.getElementById("product");
const nameSelectField = document.getElementById("name");
const phoneSelectField = document.getElementById("phone");

const mainChoiceBtn = document.getElementById("main-choice");

const submitBtn = document.getElementById('btn-submit');

let burgerMenu = document.querySelector(".burger-menu");
const menuIcon = document.querySelector('.menu-icon');

let inputFields = [orderSelectField, nameSelectField, phoneSelectField];

productsBtn.addEventListener('click', function (e) {
    productsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
aboutBtn.addEventListener('click', function (e) {
    aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
orderBtn.addEventListener('click', function (e) {
    orderSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

let mobileMenuLinks = [aboutBtnMobile, productsBtnMobile, orderBtnMobile];
let sectionsBlocks = [aboutSection, productsSection, orderSection];

for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function (e) {
        sectionsBlocks[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        burgerMenu.classList.remove("burger-menu_active");
        menuIcon.classList.toggle('menu-icon-active');
        document.body.classList.toggle("hidden");
    });
}

mainChoiceBtn.addEventListener('click', () => {
    productsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

for (let i = 0; i < orderBlockBtns.length; i++) {
    orderBlockBtns[i].addEventListener('click', () => {
        orderSelectField.value = productsTitles[i].innerText;
        orderSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
}

submitBtn.addEventListener("click", (e) => {
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === '') {
            e.preventDefault();
            inputFields[i].style.borderColor = "darkred";
            inputFields[i].style.borderWidth = "2" + "px"
        } else {
            inputFields[i].style.borderWidth = "1" + "px"
        }
    }
});

nameSelectField .addEventListener('keypress', function (e) {
    if (/\d/.test(e.key)) {
        e.preventDefault(); // Отменяет ввод, если нажата цифра
    }
});

phoneSelectField.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

//=====     маска для инпута телефона в форме
$(".input-phone").mask("+7(999)999-99-99");

document.querySelector('.menu-icon-wrapper').onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    burgerMenu.classList.toggle("burger-menu_active");
    document.body.classList.toggle("hidden");
};