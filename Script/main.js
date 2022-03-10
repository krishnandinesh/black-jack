let cards = [];
let extracard;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageel = document.getElementById('message-el');
let sumel = document.getElementById('sum-el');
let cardel = document.getElementById('card-el');


let game = document.getElementById('start');
game.addEventListener('click', startGame);

let newcards = document.getElementById('new-card');
newcards.addEventListener('click', newcard);

function startGame(){
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;

    renderGame();
}

function renderGame(){

    cardel.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardel.textContent += cards[i] + " ";
    }

    sumel.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageel.textContent = message;
}

function newcard(){

    if (hasBlackJack === false && isAlive === true){

        extracard = getRandomCard();
        sum += extracard;
        cards.push(extracard);
        renderGame();
    }
}

function getRandomCard(){

    let random = Math.floor(Math.random() * 13) + 1;

    if(random === 1){
        return 11;
    }else if(random > 10){
        return 10;
    }else{
        return random;
    }
}