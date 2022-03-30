const gameBoard = (() => {
  document.getElementById("newGame").addEventListener("click", openForm);
  const gameContainer = document.querySelector("#container");
  // const restartRoundButton = document.querySelector('#restart');
  // const newGameButton = document.querySelector('#new-game');

  let board = ["", "", "", "", "", "", "", "", ""];
  let playerOneBoard = [];
  let playerTwoBoard = [];

  const renderBoard = () => {
    for (let i = 0; i < board.length; i += 1) {
      const gameDiv = document.createElement("div");
      gameDiv.setAttribute("data-index", i);
      gameContainer.appendChild(gameDiv);
    }
  };
  renderBoard();
})();

const player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
};
