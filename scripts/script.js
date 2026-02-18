// плавная прокрутка к нужной секции
// пункты меню
const productsBtn = document.getElementById("productsBtn");
const aboutBtn = document.getElementById("aboutBtn");
const orderBtn = document.getElementById("orderBtn");

// секции страницы
const aboutSection = document.getElementById("aboutSection");
const productsSection = document.getElementById("productsSection");
const orderSection = document.getElementById("orderSection");

productsBtn.addEventListener('click', function (e) {
    productsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
aboutBtn.addEventListener('click', function (e) {
    aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
orderBtn.addEventListener('click', function (e) {
    orderSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

// .. плавная прокрутка к нужной секции