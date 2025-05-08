let saveEl = document.getElementById("save-el");
let countEl= document.getElementById("count-el");
let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let entry = count + " - " ;
    saveEl.textContent += entry;
    count = 0
    countEl.textContent =count
}

let myPoints = 3

function add3Points() {
    myPoints += 3;
}

function removePoint() {
    myPoints --;
}

add3Points();
add3Points();
add3Points();
removePoint();
removePoint();


console.log(myPoints);
