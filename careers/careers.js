//dropdown
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', menu);

const tabs = document.querySelector('.tabs');


function menu(){
    if(!tabs.getAttribute('id')){
        tabs.setAttribute('id','display')
    } else{
        tabs.removeAttribute('id')
    }
};


//Enquiries
function email(){
    const link = 'mailto: info@ridgelinestructural.co.uk';
    window.location.href = link
};

const enquiry = document.querySelectorAll('.enquire');
enquiry.forEach((enquiry) => enquiry.addEventListener('click', email))


//searchbar
const searchbar = document.querySelector('#searchbar');
let vacancy = document.querySelectorAll('.vacancy')
console.log(vacancy)
let roles = []
vacancy.forEach(vacancy => roles.push(vacancy.getAttribute('id')))
console.log(roles)

function filter(){
    let input = searchbar.value.toUpperCase();
    console.log(input);
    
};
