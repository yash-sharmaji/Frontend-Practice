// Digital clock program -->

const displayArea = document.getElementById("timeid");


function updateClock(){

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const second = now.getSeconds();

    displayArea.textContent=`${String((hours%12 || 12)).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(second).padStart(2,'0')}`;

}
function continued(){
    updateClock();
    recursion();
}

function recursion(){
    setTimeout(() => {
        continued()
    }, 1000);
}

updateClock();
recursion();
