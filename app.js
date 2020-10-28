const text = document.querySelector('.headline');
const content = text.textContent;
const splitText = content.split("");
text.textContent = "";

for (let index = 0; index < splitText.length; index++) {
    text.innerHTML += "<span>" + splitText[index] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() { 
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}