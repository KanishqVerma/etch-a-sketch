function randomNumberGenerator(){
    let n = Math.floor(Math.random()*256);
    return n;
}

function resetEventListeners(){
    let row = document.querySelectorAll(".row");
    let flag = false;
    let body = document.querySelector("body");
    body.addEventListener("mousedown", () => {
        flag = true;
    })

    body.addEventListener("mouseup", () => {
        flag = false;
    })

    row.forEach((cell) => {
        cell.addEventListener("mousedown", () => {
            // cell.style.backgroundColor = "white";
            cell.style.backgroundColor = "white";
        })
        
        cell.addEventListener("mouseover", () => {
            if (flag === true){
                // cell.style.backgroundColor = "white";
                cell.style.backgroundColor = "white";
            }
        })
    })
}

function createGrid(n){
    let container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < n; i++){
        let column = document.createElement("div");
        column.className = "column";
        for(let j = 0; j < n; j++){
            let row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createGrid(16);
resetEventListeners();
let chooseSize = document.querySelector(".chooseSize");
let size = 16;
chooseSize.addEventListener("click", () => {
    do{
        size = prompt("Size? (between 1 and 100)");
        if(size === null){
            return;
        }
        size = parseInt(size);
    }
    while(Number.isNaN(size) || Number.isInteger(size) === false || size > 100 || size < 0);
    createGrid(size);
    resetEventListeners();
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    createGrid(size);
    resetEventListeners();
})