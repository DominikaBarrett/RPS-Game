function playGame(playerInput) {

  clearMessages();
  console.log('clearMessages: ' + clearMessages());

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    }
    else if (argMoveId == 2) {
      return 'papier';
    }
    else if (argMoveId == 3) {
      return 'nozyczki';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

// Odczytanie ruchu komputera

let computerMove = getMoveName(randomNumber);

// if(randomNumber == 1){
//     computerMove = 'kamień';
// } 
// else if(randomNumber == 2){
//     computerMove = 'papier';
// }
// else if(randomNumber == 3){
//     computerMove = 'nożyce';
// } 

printMessage('Mój ruch to: ' + computerMove);

//Odczytanie ruchu gracza

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
const playerMove = getMoveName(playerInput);

// let playerMove = getMoveName(randomNumber);

// if(playerInput == '1'){
//   playerMove = 'kamień';
// }
// else if(playerInput == '2'){
//     playerMove = 'papier';
// }
// else if(playerInput == '3'){
//     playerMove = 'nożyce';
// }
function getMoveName(playerInput) {
  if (playerInput == 1) {
    return 'kamień';
  }
  else if (playerInput == 2) {
    return 'papier';
  }
  else if (playerInput == 3) {
    return 'nozyczki';
  }
  else {
    printMessage('Nie znam ruchu o id ' + playerInput + '.');
    return 'nieznany ruch';
  }
}

printMessage('Twój ruch to: ' + playerMove);

// Wynik gry


// if(computerMove == 'kamień' && playerMove == 'papier'){
//     printMessage('Ty wygrywasz!');
//   }
// else if(computerMove == playerMove){
//     printMessage('Remis');
//   }
// else if(computerMove == 'papier' && playerMove == 'nożyce'){
//     printMessage('Ty wygrywasz!');
//   }
// else if(computerMove == 'nnożyce' && playerMove == 'kamień'){
//     printMessage('Ty wygrywasz!');
//   }
// else {
//     printMessage('Przegrywasz!');
// }



function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyczki') {
    printMessage('Wygrałem!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrałem!');
  } else if (argPlayerMove == 'nożyczki' && argComputerMove == 'papier') {
    printMessage('Wygrałem!');
  } else {
    printMessage('Przegrywasz!');
  }
}

// displayResult();
displayResult(computerMove, playerMove);

document.getElementById('play-rock').addEventListener('click', function () {
  printMessage(playGame(1));
});

document.getElementById('play-paper').addEventListener('click', function () {
  printMessage(playGame(2));
});

document.getElementById('play-scissors').addEventListener('click', function () {
  printMessage(playGame(3));
});
