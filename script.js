const toggle = document.querySelector('.toggle-icon');
const body = document.body;
const cardBody = document.querySelectorAll('.card-body');
const emailLinkStyle = document.querySelector('.email-link');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('bi-sun');

    body.classList.toggle('dark');
    
    if(emailLinkStyle.style.color == "white"){
        emailLinkStyle.style.color = "black";
    }else{
        emailLinkStyle.style.color = "white";
    }

    for(i = 0; i < cardBody.length; i++){
        cardBody[i].classList.toggle('dark');
    }
})

