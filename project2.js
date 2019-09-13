// Create a two player game similar to the image attached.
// When one player takes the lead, show that in the middle area.

let player_1 = 0;
let player_2 = 0;
let lead_score;

//change player 1 score
function number_function() {
    player_1+= 1;
    document.getElementById("P1").click();
    document.getElementById("score1").innerText = 1;
    console.log(player_1);
}
//change player 2 score
function number_function2(){
    player_2+= 1;
    document.getElementById("P2").click();
    document.getElementById("score2").innerHTML = 1;
    console.log(player_2);

}


