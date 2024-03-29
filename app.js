/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, dice, currentNum, player;

scores = [0,0];
currentNum = 0;

player = 0;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){
    dice = Math.floor(Math.random()*6)+1;
    if(dice>1){
        currentNum += dice;
        document.getElementById('current-' + player).textContent = currentNum;
    }
    else{
        currentNum = 0;
        document.getElementById('current-' + player).textContent = currentNum;
        document.querySelector('.player-' + player + '-panel').classList.remove('active');
        player = (player==1)? 0: 1;
        document.querySelector('.player-' + player + '-panel').classList.add('active');
    }

    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').setAttribute('src', 'dice-' + dice + '.png');
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[player] += currentNum;

    currentNum = 0;
    document.getElementById('current-' + player).textContent = currentNum;
    document.getElementById('score-' + player).textContent = scores[player];
    document.querySelector('.player-' + player + '-panel').classList.remove('active');
    player = (player==1)? 0: 1;
    document.querySelector('.player-' + player + '-panel').classList.add('active');

    if(scores[0] >= 100){
        document.getElementById('name-0').textContent = "WINNER!";
        //document.getElementById('name-0').style.fontWeight = 'bold';
        //document.getElementById('name-0').style.color = 'red';
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';

        document.querySelector('.player-' + player + '-panel').classList.remove('active');
    }
    else if(scores[1] >= 100){
        document.getElementById('name-1').textContent = "WINNER!";
        //document.getElementById('name-1').style.fontWeight = 'bold';
        //document.getElementById('name-1').style.color = 'red';
        document.querySelector('.player-1-panel').classList.add('winner');
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';

        document.querySelector('.player-' + player + '-panel').classList.remove('active');
    }

    
});

document.querySelector('.btn-new').addEventListener('click', function(){
    dice = 0;
    currentNum = 0;
    document.querySelector('.player-' + player + '-panel').classList.remove('active');
    player = 0;
    document.querySelector('.player-' + player + '-panel').classList.add('active');
    scores = [0,0];

    document.getElementById('current-0').textContent = currentNum;
    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('current-1').textContent = currentNum;
    document.getElementById('score-1').textContent = scores[1];

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-0').textContent = "PLAYER 1";
    document.getElementById('name-0').style.fontWeight = 'normal';
    document.getElementById('name-1').textContent = "PLAYER 2";
    document.getElementById('name-1').style.fontWeight = 'normal';

    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
});
