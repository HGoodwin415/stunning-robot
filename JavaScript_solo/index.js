function addOneHome() {
    let homeScore = document.getElementById('home-score');
    homeScore.textContent = +homeScore.textContent + 1;
}

function addTwoHome() {
    let homeScore = document.getElementById('home-score');
    homeScore.textContent = +homeScore.textContent + 2;
}

function addThreeHome() {
    let homeScore = document.getElementById('home-score');
    homeScore.textContent = +homeScore.textContent + 3;
}

function addOneGuest() {
    let guestScore = document.getElementById('guest-score');
    guestScore.textContent = +guestScore.textContent + 1;
}

function addTwoGuest() {
    let guestScore = document.getElementById('guest-score');
    guestScore.textContent = +guestScore.textContent + 2;
}

function addThreeGuest() {
    let guestScore = document.getElementById('guest-score');
    guestScore.textContent = +guestScore.textContent + 3;
}

function restartGame() {
   document.getElementById('home-score').textContent = 0
   document.getElementById('guest-score').textContent = 0
    
}











