const toggle = document.querySelector('.toggle-icon');
const body = document.body;
const cardBody = document.querySelectorAll('.card-body');
const emailLinkStyle = document.querySelector('.email-link');
const badgeStyle = document.querySelectorAll('.badge');

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

    for(i = 0; i < badgeStyle.length; i++){
        badgeStyle[i].classList.toggle('bg-dark');

        if(badgeStyle[i].style.color == "white"){
            badgeStyle[i].style.color = "black";
        }else{
            badgeStyle[i].style.color = "white";
        }

        if(badgeStyle[i].style.outlineColor == "white"){
            badgeStyle[i].style.outlineColor = "black";
        }else{
            badgeStyle[i].style.outlineColor = "white";
        }

    }
})

