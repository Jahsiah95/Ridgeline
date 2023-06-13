//Dropdown menu
const dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', menu)

const tabs = document.querySelector('.tabs');


function menu(){
    if(!tabs.getAttribute('id')){
        tabs.setAttribute('id','display')
    } else{
        tabs.removeAttribute('id')
    }
}

//hero text reel
const adjective = document.querySelector('.adjective');
const hero = document.querySelector('#hero');
const currentImg = document.querySelector('#currentImg');
const nextImg = document.querySelector('#nextImg');
const photoArray = [
    './media/outside\ extension.jpg',
    './media/house\ construcion.jpg',
    './media/extension\ window.webp',
    './media/housing\ estate.jpg',
    './media/kitchen-extension-internal.jpg',
    './media/extension\ scaffold.jpeg'
];
const adjArray = ['INTEGRITY','TRANSPARENCY','HONESTY','EXPERIENCE','CARE','EXCELLENCE'];
let i = 0;

currentImg.style.backgroundImage = `url('${photoArray[photoArray.length-1]}')`

nextImg.style.animation = 'fade 7s ease-out infinite';


adjective.textContent = adjArray[adjArray.length-1]
adjective.style.animation = 'swipe 7s ease-out infinite';

slideshow()

function slideshow(){
    setInterval(next, 7000)
    setTimeout(current, 3500)
}

function next(){
    adjective.textContent = adjArray[i];

    nextImg.style.backgroundImage = `url('${photoArray[i]}')`;

    i++;

    if(i < adjArray.length){
        // slideshow();            
    } else{
        i = 0;
        // currentImg.style.backgroundImage = `url('${photoArray[0]})`
        // slideshow();
    }
}

function current(){
    setInterval(()=>{
        if(i>0){
            currentImg.style.backgroundImage = `url('${photoArray[i-1]}')`;
        }else{
            currentImg.style.backgroundImage = `url('${photoArray[photoArray.length-1]}')`
        }
    }, 7000)
}
