function email(){
    const link = 'mailto: daniel.marshall8697@gmail.com';
    window.location.href = link
}

const enquiry = document.querySelectorAll('.enquire');
enquiry.forEach((enquiry) => enquiry.addEventListener('click',email))
enquiry.forEach((enquiry) => enquiry.addEventListener('mousedown', (e) => {
    e.target.style.background = 'darkslategray'
    e.target.style.color = 'white'
    
}))
enquiry.forEach((enquiry) => enquiry.addEventListener('mouseup', (e) => {
    e.target.style.background = 'lightgray'
    e.target.style.color = 'black'
    
}))



