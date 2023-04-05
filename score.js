let scoreEl = document.getElementById('score')
let button_1 = document.getElementById('button-1')
let button_2 = document.getElementById('button-2')
let button_3 = document.getElementById('button-3')
let score2El =document.getElementById('score2')
let button11 = document.getElementById('button-11')
let button22 = document.getElementById('button-22')
let button33 = document.getElementById('button-33')



// home 
   let HomeScore = 0
  
function add1Point(){
    HomeScore += 1;
    scoreEl.textContent = HomeScore;
}

function add2Point(){
    HomeScore+=2
    scoreEl.textContent = HomeScore;
}
function add3Point(){
    HomeScore+= 3
    scoreEl.textContent = HomeScore;
}

// Guest 

let GuestCount = 0

function add1Points(){
    GuestCount += 1 
    score2El.textContent = GuestCount;
}
function add2Points(){
    GuestCount += 2 
    score2El.textContent = GuestCount;
}
function add3points(){
    GuestCount += 3 
    score2El.textContent = GuestCount;
}

// refresh score

function refresh(){
    window.location.reload;
}




