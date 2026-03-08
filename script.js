const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");

function createGrid(size){
    container.innerHTML = "";

    const squareSize = 960 / size;

    for(let i = 0; i < size * size; i++){
        const div= document.createElement("div");
        div.classList.add("square");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        
        div.addEventListener("mouseover" , () =>{
            div.style.backgroundColor = "black";
        });

        container.appendChild(div);
    }
}

createGrid(16);