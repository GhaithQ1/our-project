const sec = document.getElementById("secroll");

window.onscroll = ()=>{
    if(window.scrollY >= 100){
        sec.style.backgroundColor = 'white'
    }
    else{
        sec.style.backgroundColor = 'transparent'
    }
}

