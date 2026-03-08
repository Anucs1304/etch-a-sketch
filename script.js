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

        div.dataset.darkness = 0;
        
        div.addEventListener("mouseover" , () =>{
            let darkness = parseInt(div.dataset.darkness);

            if (darkness < 10) {
                darkness++;
                div.dataset.darkness = darkness;
            }

            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            const factor = (10 - darkness) / 10;

            div.style.backgroundColor = `rgb(${r * factor}, ${g * factor}, ${b * factor})`;
        });

        container.appendChild(div);
    }
}

createGrid(16);

resetBtn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter grid size (1-100):"));

    if(isNaN || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.")
        return ;
    }

    createGrid(size);
});