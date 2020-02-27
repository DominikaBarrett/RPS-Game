function playGame(playerInput) {
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let argComputerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + argComputerMove);
  


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




  let argPlayerMove = getMoveName(playerInput)
  console.log('Gracz wpisał: ' + playerInput);
  printMessage('Twój ruch to: ' + argPlayerMove);


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



  // / Wynik gry




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
  displayResult(argComputerMove, argPlayerMove);
}


  document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
playGame(3);
});


  
