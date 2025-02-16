const sec = document.getElementById("secroll");

window.onscroll = ()=>{
    if(window.scrollY >= 100){
        sec.style.backgroundColor = 'white'
    }
    else{
        sec.style.backgroundColor = 'transparent'
    }
}



// ================================================


document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
 }
 document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
 }


const mun = document.querySelector(".mun");

const icon = document.querySelector('.show')

icon.onclick = ()=>{
    mun.classList.toggle('show')
}

