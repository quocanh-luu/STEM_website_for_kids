function revealNextStep(){
    let steps = [
        "Go to <strong><code>chrome://dino</code></strong> in the Chrome browser",
        "Press <strong>Ctrl + Shift + I</strong> (Windows/Linux) or <strong>Cmd + Option + I</strong>  (Mac)",
        "Navigate to the <strong>Console tab</strong> (bottom of the window)",
        "Paste this code into the Console: Runner.prototype.gameOver = function() {};",
        "Press Enter. The game will no longer end even if you hit obstacles!",
        "Now try to adjust the speed: Runner.instance_.setSpeed(100);"
    ];

    if(window.innerWidth < 1024){
        steps.unshift("If you are on mobile, get the computer and continue");
    }

    const meter = document.querySelector("meter");
    meter.max = steps.length;

    //create a container
    const stepContainer = document.createElement("div");
    stepContainer.className = "step-container";

    //create a check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "&#10003";
    checkBtn.className = "check-btn";

    const onClick = () =>{
        checkBtn.classList.add("checked");
        step.classList.add("checked");
        checkBtn.removeEventListener("click", onClick);
        revealNextStep();
    }
    checkBtn.addEventListener("click", onClick);

    //create and reveal first step
    const step = document.createElement("p");
    step.className = "step";
    step.innerHTML = steps[counter];

    stepContainer.appendChild(step);
    stepContainer.appendChild(checkBtn);

    document.getElementById("list").appendChild(stepContainer);
    meter.value = counter;
    counter++;

    if(counter == 1){
        startBtn.removeEventListener("click", start);
        startBtn.addEventListener("click", () => {
            window.alert("please check the step when finished!");
        });
    }

    if(counter == steps.length){
        const btn = [...document.getElementsByClassName("check-btn")];
        btn.forEach(element => {
            element.removeEventListener("click", onClick);
        });
        checkBtn.addEventListener("click", () => {
            checkBtn.classList.add("checked");
            step.classList.add("checked");
            checkBtn.removeEventListener("click", onClick);
            meter.value = counter++;
        });
    }
}

let counter = 0;


const startBtn = document.getElementById("start");

startBtn.addEventListener("click", revealNextStep);