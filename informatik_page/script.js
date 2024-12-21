//typing text effect
const text = "Hello World!";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
    typingElement.textContent = text.slice(0, index);
    index = (index + 1) % (text.length + 1); // Infinite loop through the text

    setTimeout(typeText, 300);
}

typeText(); 


//--------------------------------------------------


//code-example buttons
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");

button1.onclick = () => window.alert("Hello World!")


button2.onclick = () => {
    let name = window.prompt("Bitte gib deinen Namen ein.")
    window.alert("Hallo " + name);
}