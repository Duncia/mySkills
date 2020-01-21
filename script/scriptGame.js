/*
Points game using HTML, CSS and JavaScript. After clicking the button Math.random() Method is used to generate number (digits 1 to 4) and display corresponding image. If it is shield +1 point goes to Captain and if it is pizza, Leo gets +1 point. For pumpkin and tomato neither of competitors get a point. First with 5 points wins. Start by clicking the button SHOW NEXT IMAGE.

*/

// Global scope variables declared and game initialization function called

var scores, player1, player2, winningScore; 

gameInit();

function gameInit() {
    
// Array for all players reset to 0 and default values applied
    scores = [0, 0, 0];
    player1 = "Captain";
    player2 = "Leo";
    winningScore = 5;

    
// All settings reset and classes changed to start new game
    document.getElementById('randomImage').style.display = 'none';
    document.getElementById("showN").disabled = false;
    document.getElementById('pointsN-0').textContent = 'Points: 0';
    document.getElementById('pointsN-1').textContent = 'Points: 0';
    document.getElementById('pointsN-2').textContent = 'Pumpkins and tomatoes total: 0';
    document.getElementById('player-0').classList.remove('active');
    document.getElementById('player-1').classList.remove('active');
    document.getElementById('pointsN-2').classList.remove('active');
    document.getElementById('winnerBox').classList.add('hide');
    document.getElementById('nameC').textContent = 'Name of player 1: ' + player1;
    document.getElementById('nameL').textContent = 'Name of player 2: ' + player2;
    document.getElementById('scoreW').textContent = 'Score to win: ' + winningScore;
    document.getElementById('player1-name').textContent = player1;
    document.getElementById('player2-name').textContent = player2;
    document.getElementById("captainName").placeholder = "Enter name here";
    document.getElementById("leoName").placeholder = "Enter name here";
    document.getElementById("scoreWin").placeholder = "Number only";
    document.getElementById("captainName").value = "";
    document.getElementById("leoName").value = "";
    document.getElementById("scoreWin").value = "";
}

// Start new game button calling game initialization function

document.getElementById('newG').addEventListener('click', gameInit);

// Show picture button: generates number, adds it to array, checks for winner

document.getElementById('showN').addEventListener('click', function() {
    
// Active class - the grey background - removed with new click
    document.getElementById('player-0').classList.remove('active');
    document.getElementById('player-1').classList.remove('active');
    document.getElementById('pointsN-2').classList.remove('active');
    
// Random number generation and showing the picture
    var revealImage = Math.floor(Math.random() * 4) + 1;
    
    document.getElementById('randomImage').style.display = 'block';
    document.getElementById('randomImage').src = 'img/game/picture-' + revealImage + '.png';
    
// If/else statement to add generated number and check for winner
    if (revealImage === 1){
        
// Score added to player 0 array
        scores[0] += 1;
        document.getElementById('pointsN-0').textContent = 'Points: ' + scores[0];
        document.getElementById('player-0').classList.add('active');
        if (scores[0] == winningScore) {
            document.getElementById('winnerBox').classList.remove('hide');
            document.getElementById('winnerBox').textContent = 'Points: ' + winningScore + '! ' + player1 + ' wins!';
            document.getElementById("showN").disabled = true;
        }
        
    } else if (revealImage === 2) {
        
        scores[1] += 1;
        document.getElementById('pointsN-1').textContent = 'Points: ' + scores[1];
        document.getElementById('player-1').classList.add('active');
        if (scores[1] == winningScore) {
            document.getElementById('winnerBox').classList.remove('hide');
            document.getElementById('winnerBox').textContent = 'Points: ' + winningScore + '! ' + player2 + ' wins!';
            document.getElementById("showN").disabled = true;
        }
    }
        else {
            
        scores[2] += 1;
        document.getElementById('pointsN-2').textContent = 'Pumpkins and tomatoes total: ' + scores[2];
        document.getElementById('pointsN-2').classList.add('active');
            if (scores[2] == 10) {
                document.getElementById('winnerBox').classList.remove('hide');
                document.getElementById('winnerBox').textContent = 'No one wins... Vegetables rule.';
                document.getElementById("showN").disabled = true;
        }
    }
});

// Changing of two top players

document.getElementById('nameBtn1').addEventListener('click', function(){

// Checking if entered value is not empty string and continue
        if (captainName.value !== "") {
            player1 = document.getElementById("captainName").value;
        } else {
            player1 = "Captain";
        }
    
    document.getElementById('nameC').textContent = 'Name of player 1: ' + player1;
    document.getElementById('player1-name').textContent = player1;
});

document.getElementById('nameBtn2').addEventListener('click', function(){

// Checking if entered value is not empty string and continue
        if (leoName.value !== "") {
            player2 = document.getElementById("leoName").value;
        } else {
            player2 = "Leo";
        }
    
    document.getElementById('nameL').textContent = 'Name of player 2: ' + player2;
    document.getElementById('player2-name').textContent = player2;
});

// Score adjustment to win for Captain or Leo

document.getElementById('nameBtn3').addEventListener('click', function(){

// Checking if entered value is not empty string and continue
        if (scoreWin.value !== "") {
            winningScore = document.getElementById("scoreWin").value;
        } else {
            winningScore = 5;
            document.getElementById("scoreWin").value = "";
        }
    
    document.getElementById('scoreW').textContent = 'Score to win: ' + winningScore;
});

