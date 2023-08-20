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
    './media/S\ STEEL.jpg',
    './media/brickwork.jpg',
    './media/kitchen-extension-internal.jpg',
    './media/extension\ scaffold.jpeg'
];
const adjArray = ['INTEGRITY','TRANSPARENCY','HONESTY','EXPERIENCE','CARE','EXCELLENCE'];
let i = 0;

currentImg.style.backgroundImage = `url('${photoArray[photoArray.length-1]}')`

nextImg.style.animation = 'fade 10s ease-out infinite';

adjective.textContent = adjArray[adjArray.length-1]
adjective.style.animation = 'swipe 10s ease-out infinite';

slideshow()

function slideshow(){
    setInterval(next, 10000)
    setTimeout(current, 5000)
}

function next(){
    adjective.textContent = adjArray[i];
    adjective.style.animation = 'swipe 10s ease-out infinite';

    nextImg.style.backgroundImage = `url('${photoArray[i]}')`;
    nextImg.style.animation = 'fade 10s ease-out infinite';

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
    }, 10000)
}

//Scroll effects

const text = document.querySelectorAll('.text')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
let height = window.innerHeight || document.documentElement.clientHeight;

window.addEventListener('scroll', inView)

text.forEach(text => {
        text.style.opacity = 0;
        text.style.transform = 'translate(0,20vh)';
    });

function inView(){
    text.forEach(text => {
        let distance = text.getBoundingClientRect().top;
        if(distance <= height){
            text.style.animation = 'moveText 1s forwards'
        }
    });

    let distance1 = img1.getBoundingClientRect().top;
    let distance2 = img2.getBoundingClientRect().top;
    let distance3 = img3.getBoundingClientRect().top;

    if(distance1 <= height){
        img1.style.animation = 'moveImg 2s forwards'
    }

    if(distance2 <= height){
        img2.style.animation = 'moveImg2 2s forwards'
    }

    if(distance3 <= height){
        img3.style.animation = 'moveImg 2s forwards'
    }
};


