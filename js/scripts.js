function Player(playerSymbol)
{
  this.playerSymbol = playerSymbol;
}
function Game(playerTurn)
{
  this.playerTurn = playerTurn;
}
var playerOne = new Player("X");
var playerTwo = new Player("O");
var newGame = new Game(0);
var boardArray = [["open", "open", "open"], ["open", "open", "open"], ["open", "open", "open"]];

$(document).ready(function()
{

  $("#zero-zero").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[0][0] === "open")
    {
      $("#zero-zero-x").show();
      boardArray[0][0] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[0][0] === "open")
    {
      $("#zero-zero-o").show();
      boardArray[0][0] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  $("#zero-one").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[0][1] === "open")
    {
      $("#zero-one-x").show();
      boardArray[0][1] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[0][1] === "open")
    {
      $("#zero-one-o").show();
      boardArray[0][1] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  $("#zero-two").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[0][2] === "open")
    {
      $("#zero-two-x").show();
      boardArray[0][2] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[0][2] === "open")
    {
      $("#zero-two-o").show();
      boardArray[0][2] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  /////////
  $("#one-zero").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[1][0] === "open")
    {
      $("#one-zero-x").show();
      boardArray[1][0] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[1][0] === "open")
    {
      $("#one-zero-o").show();
      boardArray[1][0] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  $("#one-one").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[1][1] === "open")
    {
      $("#one-one-x").show();
      boardArray[1][1] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[1][1] === "open")
    {
      $("#one-one-o").show();
      boardArray[1][1] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  $("#one-two").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[1][2] === "open")
    {
      $("#one-two-x").show();
      boardArray[1][2] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[1][2] === "open")
    {
      $("#one-two-o").show();
      boardArray[1][2] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });
  /////////
  $("#two-zero").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[2][0] === "open")
    {
      $("#two-zero-x").show();
      boardArray[2][0] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[2][0] === "open")
    {
      $("#two-zero-o").show();
      boardArray[2][0] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  $("#two-one").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[2][1] === "open")
    {
      $("#two-one-x").show();
      boardArray[1][1] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[2][1] === "open")
    {
      $("#two-one-o").show();
      boardArray[2][1] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

  $("#two-two").click(function()
  {
    if (newGame.playerTurn === 0 && boardArray[2][2] === "open")
    {
      $("#two-two-x").show();
      boardArray[2][2] = playerOne.playerSymbol;
      newGame.playerTurn = 1;
    }
    else if (newGame.playerTurn === 1 && boardArray[2][2] === "open")
    {
      $("#two-two-o").show();
      boardArray[2][2] = playerTwo.playerSymbol;
      newGame.playerTurn = 0;
    }
    else
    {
      alert("Stop It");
    }
  });

});
