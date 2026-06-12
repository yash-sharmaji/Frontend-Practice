let subtn = document.getElementById("submit");
const textbox = document.getElementById("text-box");
const radio1 = document.getElementById("radio1");
const radio2= document.getElementById("radio2");
const para = document.getElementById("para");


subtn.addEventListener("click", () =>{
    let temperature =Number(textbox.value);
    if(!isNaN(temperature)){
        if(radio1.checked){
            para.textContent = `The Farenhiet conversion is ${(temperature - 32) * 5 / 9}`;
        }
        else if(radio2.checked){
            para.textContent = `The Celsius conversion is ${9 / 5 * (temperature + 32) }`;
        }
    }
    else{
        para.textContent = `Invalid input`;
    }
});