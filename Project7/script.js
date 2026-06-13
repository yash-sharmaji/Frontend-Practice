const submitbtn = document.getElementById("submit-btn");
const datainput = document.getElementById("amount");
const dicetext = document.getElementById("dice-text");
const diceimages = document.getElementById("dice-images");

let values=[];
let images=[];

submitbtn.addEventListener("click",() =>{
    values = [];
    images = [];
    let num = Number(datainput.value);

    if(!isNaN(num)){
        for(let i=0;i<num;i++){
            values.push(Math.ceil(Math.random()* 5 + 1));
            images.push(`<img src = "dice_images/${values[i]}.png">`);
        }
        dicetext.textContent = `The ${datainput.value} values are ${values.join(`, `)}`;
        diceimages.innerHTML = images.join("");
    }
});