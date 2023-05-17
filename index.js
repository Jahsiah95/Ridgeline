const dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', menu)

const tabs = document.querySelector('.tabs');
// const display = document.querySelector('.display');


function menu(){
    console.log('click')
    // if (tabs.style.display === 'none'){
    //     tabs.style.display = 'flex';
    // } else {
    //     tabs.style.display = 'none'
    // }

    // if(!dropdown.getAttribute('id')){
    //     tabs.style.display = 'flex'
    //     dropdown.setAttribute('id','open')     
    // } else if(dropdown.getAttribute('id') === 'open' && window.innerWidth < 700){
    //     tabs.style.display = 'none'
    //     dropdown.removeAttribute('id')
    // }

    if(!tabs.getAttribute('id')){
        tabs.setAttribute('id','display')
    } else{
        tabs.removeAttribute('id')
    }
}

