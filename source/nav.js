//to "open" details tag on laptop screen, otherwise the links will be invisible
function handleNavBar(){
    if(innerWidth >= 1024){
        //because syntax is setAttribute(name, value);
        document.querySelector("details").setAttribute('open', "");
    }
    else{
        document.querySelector("details").removeAttribute('open');
    }
}

onload = handleNavBar;

onresize = handleNavBar;