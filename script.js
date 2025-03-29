document.addEventListener("DOMContentLoaded", () => {
    // -------------- Query Selection -------------
    const resetbtn = document.getElementById("resetbtn");
    const cards = Array.from(document.getElementsByClassName("card"));
    

    // -------------- Variables -------------
    let newCards = [];
    let move = 0;
    let winCount = 0;
    let movesDisplay = document.createElement("p");
    document.body.appendChild(movesDisplay);

    // -------------- Card Flip -------------
    cards.forEach(card => {
        card.addEventListener("click", function () {
            this.classList.add("flipped");
            newCards.push(this); 
            
            if (newCards.length === 2) {
                let lastCard = newCards[0].querySelector(".card-back").innerText;
                let recentCard = newCards[1].querySelector(".card-back").innerText;

                if (lastCard !== recentCard) {
                    setTimeout(() => {
                        newCards[0].classList.remove("flipped");
                        newCards[1].classList.remove("flipped");
                        newCards = [];
                    }, 500);
                } else {
                    newCards = [];
                    winCount++;
                }

                move++;
                movesDisplay.innerText = `Moves: ${move}`;

                if (winCount === cards.length / 2) {
                    alert(`You won the game in ${move} moves.`);
                    
                }
            }
        });
    });

    // -------------- Reset -------------
    resetbtn.addEventListener("click", () => {
        cards.forEach(card => card.classList.remove("flipped")); 
    
        newCards = [];
        move = 0;
        winCount = 0;
        movesDisplay.innerText = `Moves: ${move}`; 
        
        let cardsArray = [...cards];
        cardsArray.sort(() => Math.random() - 0.5);
    
        let gameBoard = document.querySelector(".container"); 
        gameBoard.innerHTML = ""; 
        cardsArray.forEach(card => gameBoard.appendChild(card));
    });
});
