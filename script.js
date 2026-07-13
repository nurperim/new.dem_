// New.Dem script

document.addEventListener("DOMContentLoaded", () => {

    // Плавное появление карточек

    const cards = document.querySelectorAll(".card, .contact-card");


    cards.forEach((card, index)=>{

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";


        setTimeout(()=>{

            card.style.transition = "0.6s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);


    });



    // сообщение при нажатии кнопки жалобы

    const button = document.querySelector(".main-btn");


    if(button){

        button.addEventListener("click",()=>{

            console.log(
            "Переход к форме обращения"
            );

        });
// PWA регистрация

if("serviceWorker" in navigator){

window.addEventListener(
"load",
()=>{

navigator.serviceWorker.register(
"service-worker.js"
);

});

}
    }



});

