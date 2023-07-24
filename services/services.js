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


//Searchbar
let searchbar = (function(){
    const searchbar = document.querySelector('#searchbar');
    const service = document.querySelectorAll('.service');

    let services = [];
    
    service.forEach(service => {
        let type = service.getAttribute('id');
        services.push(type.toUpperCase());
    });
    
    searchbar.addEventListener('keyup', filter);
    
    function filter(){
        let input = searchbar.value.toUpperCase();
        let pos = [];

        services.forEach(service => {
            pos.push(service.search(input))
        })
    
        for(let i = 0; i < services.length; i++){
            if(pos[i] != -1){
                service[i].style.display = "";
            } else{
                service[i].style.display = "none";
            }
        }
    };
})();



