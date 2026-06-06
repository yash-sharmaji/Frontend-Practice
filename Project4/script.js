let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontsizeref = document.getElementById("fontsize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontlist = [
    "Arial",
    "Cursive",
    "Georgia",
    "Courier New"
];

const initializer=()=>{
    highlighter(alignButtons,true);
    highlighter(spacingButtons,true);
    highlighter(formatButtons,false);
    highlighter(scriptButtons,true);

    fontlist.map((value)=>{
        let option = document.createElement("option");
        option.value=value;
        option.innerHTML=value;

        fontName.appendChild(option);
    });

    for(let i=1;i<=7;i++){
        let option = document.createElement("option");
        option.value=2*i;
        option.innerHTML=2*i;

        fontsizeref.appendChild(option);
    }
    fontsizeref.value=4;
};

const modifyText =(command,defaultUI,value) =>{
    document.execCommand(command , defaultUI ,value);
};

optionsButtons.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        modifyText(buttons.id,false,null);
    });
});

advancedOptionButton.forEach((buttons)=>{
    buttons.addEventListener("change",()=>{
        modifyText(buttons.id,false,buttons.value);
    });
});

linkButton.addEventListener("click",()=>{
    let userLink = prompt("Enter a URL");

    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
    }else{
        userLink = "http://"+userLink;
        modifyText(linkButton.id,false,userLink);
    }
});

const highlighter = (className,needsRemoval) =>{
    className.forEach((button)=>{
        button.addEventListener("click",()=>{
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains("active")){
                    alreadyActive=true;
                }
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                button.classList.toggle("active");
            }
        });
    });
};
const highlighterRemover = (className) => {
    className.forEach((button)=>{
        button.classList.remove("active");
    });
};
window.onload = () => {
    initializer();
}
