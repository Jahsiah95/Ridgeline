//dropdown
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


//Enquiries
function email(){
    const link = 'mailto: info@ridgelinestructural.co.uk';
    window.location.href = link
}

const enquiry = document.querySelectorAll('.enquire');
enquiry.forEach((enquiry) => enquiry.addEventListener('click',email))

// enquiry.forEach((enquiry) => enquiry.addEventListener('mouseup', (e) => {
//     e.target.style.background = 'lightgray'
//     e.target.style.color = 'black'
    
// }))



