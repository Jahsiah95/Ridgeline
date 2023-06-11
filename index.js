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
const adjective = document.querySelector('.adjective')
const hero = document.querySelector('#hero')
const photoArray = [
    './media/outside\ extension.jpg',
    './media/house\ construcion.jpg',
    './media/extension\ window.webp',
    './media/housing\ estate.jpg',
    './media/kitchen-extension-internal.jpg',
    './media/extension\ scaffold.jpeg'
]
const adjArray = ['INTEGRITY','TRANSPARENCY','HONESTY','RESPECT','CARE','EXCELLENCE']
let i = 0;

hero.style.backgroundImage = `url('${photoArray[photoArray.length-1]}')`
adjective.textContent = adjArray[adjArray.length-1]

slideshow()

function slideshow(){
    setTimeout(function(){
        adjective.textContent = adjArray[i];
        // hero.style.animation = 'fade 5s infinite'
        hero.style.backgroundImage = `url('${photoArray[i]}')`
        i++;
        if(i < adjArray.length){
            slideshow();            
        } else{
            i = 0
            slideshow()
        }
    }, 5000)
}
