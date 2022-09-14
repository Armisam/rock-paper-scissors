var userScore = 0;
var computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const show_p = document.getElementById("show_p");
const result_p = document.getElementById("result_p");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");


function getComputerChoice(){
    const choices = ['kő', 'papír', 'olló'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}

function win(userChoice, computerChoice){
    userScore++;
    localStorage.setItem('userScore', userScore);
    loadScore(userScore, computerScore);
    show_p.innerHTML = "Te mutatod: " + userChoice + ", számítógép mutatja: " + computerChoice + ". <br>";
    result_p.style.color = "green";
    result_p.innerHTML = "Nyertél! &#128578;";
}

function lose(userChoice, computerChoice){
    computerScore++;
    localStorage.setItem('computerScore', computerScore);
    loadScore(userScore, computerScore);
    show_p.innerHTML = "Te mutatod: " + userChoice + ", számítógép mutatja: " + computerChoice + ". <br>";
    result_p.style.color = "red";
    result_p.innerHTML = "Vesztettél! &#128577;";
}


function draw(userChoice, computerChoice){
    show_p.innerHTML = "Te mutatod: " + userChoice + ", számítógép mutatja: " + computerChoice + ". <br>";
    result_p.style.color = "black";
    result_p.innerHTML = "Döntetlen! &#128528;";
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "kőolló":
        case "papírkő":
        case "ollópapír":
            win(userChoice, computerChoice);
            break;
        case "kőpapír":
        case "papírolló":
        case "ollókő":
            lose(userChoice, computerChoice);
            break;
        case "kőkő":
        case "papírpapír":
        case "ollóolló":
            draw(userChoice, computerChoice);
            break;
    }
}

function resetScore() {
    loadScore(0, 0);
    localStorage.setItem('userScore', 0);
    localStorage.setItem('computerScore', 0);
}

function loadScore(userScore, computerScore) {
    this.userScore = userScore;
    this.computerScore = computerScore;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
}

window.addEventListener('load', main());    

function main() {
    if(localStorage.getItem('userScore') != null && localStorage.getItem('computerScore') != null) {
        loadScore(localStorage.getItem('userScore'), localStorage.getItem('computerScore'));
    } else {
        loadScore(0, 0);
    }

    rock_button.addEventListener('click', function(){
        game("kő");
    })
        
    paper_button.addEventListener('click', function(){
        game("papír");
    })

    scissors_button.addEventListener('click', function(){
        game("olló");
    })
}