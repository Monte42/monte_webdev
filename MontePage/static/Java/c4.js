player1 = prompt('Player 1 will be blue, Please enter your name:');
playerColor1 = 'rgb(9, 1, 180)';

player2 = prompt('Player 2 will be red, Please enter your name:');
playerColor2 = 'rgb(180, 1, 9)';

tableRow = $('table tr');
gameOn = true

function reportWin(rowIndex,colIndex) {
  console.log('Game End at row, column');
  console.log(rowIndex);
  console.log(colIndex);
}

function returnColor(rowIndex,colIndex){
  return tableRow.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function changeColor(rowIndex,colIndex,color){
  return tableRow.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function findBottom(colIndex) {
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row
    }
  }
}

function fourInRow(one,two,three,four){
  return (one===two && one===three && one===four && one!=='rgb(128, 128, 128)' && one!==undefined)
}

function vertWin(){
  for (var col = 0; col < 6; col++) {
    for (var row = 0; row < 4; row++) {
      if(fourInRow(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
        console.log("vert");
        reportWin(row,col);
        return true;
      }else {
        continue
      }
    }
  }
}

function horizWin(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if(fourInRow(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
        console.log("horiz");
        reportWin(row,col);
        return true;
      }else {
        continue
      }
    }
  }
}


function diagWin(){
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if(fourInRow(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))){
        console.log("horiz");
        reportWin(row,col);
        return true;
      }if(fourInRow(returnColor(row,col),returnColor(row+1,col-1),returnColor(row+2,col-2),returnColor(row+3,col-3))){
        console.log("horiz");
        reportWin(row,col);
        return true;
      }else {
        continue
      }
    }
  }
}

function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h1').fadeOut('fast');
      $('p').fadeOut('fast');
      $('h4').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
    }
  }
}

currentPlayer = 1
currentName = player1
currentColor = playerColor1

$('p').text(currentName+' its your turn, please pick a column to drop your chip in.')
$('.board button').on('click', function(){
  col = $(this).closest('td').index();
  botAvail = findBottom(col);
  changeColor(botAvail,col,currentColor);
  if (vertWin() || horizWin() || diagWin()){
    gameEnd(currentName);
  }
  currentPlayer = currentPlayer *-1;
  if (currentPlayer === 1){
    currentName = player1;
    currentColor = playerColor1;
    $('p').text(currentName+' its your turn, please pick a column to drop your chip in.');
  }else {
    currentName = player2;
    currentColor = playerColor2;
    $('p').text(currentName+' its your turn, please pick a column to drop your chip in.');
  }
})
