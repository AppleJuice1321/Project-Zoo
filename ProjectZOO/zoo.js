// DOM(Document Object Modelling) REFERENCES ====================================================
const pointBox = document.querySelector("#score"); // Point table
const dragFoodBox = document.querySelectorAll(".foodContainer article"); // Select all foods
const targetAnimal = document.querySelectorAll("#animals div"); // Select all foods animals
const foodBox = document.querySelector(".foodContainer"); // Foodbox

// console.log(pointBox);

// EVENTS ON THE ELEMENTS =======================================================================
dragFoodBox.forEach(function(element) {
    element.addEventListener("dragstart", startDrag); // waits till dragstart 
});

targetAnimal.forEach(function(element) {
    element.addEventListener("dragover", cancelDefault) //
    element.addEventListener("drop", dropMad)
});

// FUNCTIONS ===================================================================================
function startDrag(event) {
    // console.log(this.dataset.food);
    event.dataTransfer.setData("foodId", this.id);
    event.dataTransfer.setData("foodName", this.dataset.food);
};

function cancelDefault(event) {
    event.preventDefault();
};

function dropMad(event) {
    // console.log("Der er droppet mad");
    let madId = event.dataTransfer.getData("foodId")
    let madType = event.dataTransfer.getData("foodName")

    if (madType == this.dataset.food) {
        let heart = document.createTextNode("🖤");
        this.appendChild(heart);
        pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
    } else {
        alert("Dyret kunne ikke lide det.");
        // this.replaceChild(heart);
        let poop = document.createTextNode("💩");
        this.appendChild(poop);
        pointBox.innerHTML = parseInt(pointBox.innerHTML) - 200; 
        foodBox.removeChild(document.querySelector("#" + madId));
    }
};


// const HIDEFOOD = document.querySelector(".hideFood") 

// HIDEFOOD.addEventListener("click", function(event) {
//     onclick = (event)
// })



// function hide() {
//     document.getElementsByClassName(".hideFood").addEventListener("click")
// }



// $('.hideFoodButton').toggle(function() {
//     $('.foodContainer').css('bottom', '-84px');
// }, function() {
//     $('.foodContainer').css('bottom', '0');
// });



// BUTTON HIDE FOOD ===================================================================================
let buttonHide = document.querySelector(".hideFoodButton");
let buttonResetHide = document.querySelector(".resetPageButton");
// let headingHide = document.querySelector(".foodHeading");
// let expand = document.querySelector(".footerFood");

buttonHide.addEventListener("click",function() {
    var foodSection = document.querySelector('.foodContainer');
    if(foodSection.style.display !== 'none') {
        foodSection.style.display = 'none';
        buttonResetHide.style.display = 'none';
        // headingHide.style.display = 'none';
        // expand.style.width = '1000px';
    } else {
        foodSection.style.display = 'flex';
        buttonResetHide.style.display = 'block';
    }
});

// BACKGROUND COLOR ANIMALS ===================================================================================

// targetAnimal.addEventListener("dragover", function() {
//     var colorHoverAnimals = document.querySelector('.dragAnimals');
//     if(colorHoverAnimals.style.backroundcolor !== 'none') {
//         colorHoverAnimals.style.backroundcolor = 'none';
//     } else {
//         colorHoverAnimals.style.background = 'green';
//     }
// })