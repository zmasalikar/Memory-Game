document.addEventListener("DOMContentLoaded", () => {

// --------------query selection-------------

const resetbtn = document.getElementById("resetbtn");
const cards = document.getElementsByClassName("card");


//  --------------Reset-------------//

resetbtn.addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("flipped"); 
    }
});

//  --------------card flip-------------//

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            cards[i].classList.toggle("flipped");
        });
    }

//  --------------card flip-------------//































});

