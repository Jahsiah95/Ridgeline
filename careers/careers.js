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
let enquiries = (function(){
    const apply = document.querySelectorAll('.apply');
    apply.forEach((application) => application.addEventListener('click', email))

    function email(){
        const link = 'mailto: info@ridgelinestructural.co.uk';
        window.location.href = link
    };
})();





//searchbar
let searchbar = (function(){
    const searchbar = document.querySelector('#searchbar');
    const vacancy = document.querySelectorAll('.vacancy');

    let roles = [];
    
    vacancy.forEach(vacancy => {
        let role = vacancy.getAttribute('id');
        roles.push(role.toUpperCase());
    });
    
    searchbar.addEventListener('keyup', filter);
    
    function filter(){
        let input = searchbar.value.toUpperCase();
        let pos = [];

        roles.forEach(role => {
            pos.push(role.search(input))
        })
    
        for(let i = 0; i < roles.length; i++){
            if(pos[i] != -1){
                vacancy[i].style.display = "";
            } else{
                vacancy[i].style.display = "none";
            }
        }
    };
    return {vacancy}
})();

let jobCount = (function(){
    const text = document.querySelector('#jobCount')
    let count = searchbar.vacancy.length
    text.textContent = `We currently have [${count}] vacancies available`
})();


