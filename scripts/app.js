'use strict'
const Player = (mark) => {
    this.mark = mark;

    const getMark = () => mark;

    return {
        getMark,
    }
}

const DisplayController = (() => {
    const _spaceBtns = document.querySelectorAll('[data-space-btn]');
    const winner = document.querySelector('[data-winner]');
    const winnerContainer = document.querySelector('[data-winner-container]');
    const newGame = document.querySelector('[data-new-game]');
    // const displayContainer = document.querySelector('[data-turn-container]');
    // const displayTurn = document.querySelector('[data-display-turn]');

    let board = ['', '', '', '', '', '', '', '', ''];

    function render() {
        _spaceBtns.forEach((space, index) => {
            space.addEventListener('mouseup', (e) => {
                if (board[index] === '') {
                    space.innerText = GameController.getCurrentPlayer(); 
                    board[index] = space.innerText;
                }
                checkWin(board);
            });
        });
    }

    function checkWin(board) {
        // player1 checks
        if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }
        if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
            declareWinnerP1(GameController);
            disableBtns()
        }


        // player 2 checks
        if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }
        if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
            declareWinnerP2(GameController);
            disableBtns()
        }        
    }

    function disableBtns() {
        _spaceBtns.forEach((btn) => {
            btn.disabled = true;
        });
    }

    function enableBtns() {
        _spaceBtns.forEach((btn) => {
            btn.disabled = false;
        });
    }

    function declareWinnerP1(Controller) {
        winner.textContent = `Player ${Controller.player1.getMark()} wins!`;
        winnerContainer.appendChild(winner);
    }

    function declareWinnerP2(Controller) {
        winner.textContent = `Player ${Controller.player2.getMark()} wins!`;
        winnerContainer.appendChild(winner);
    }

    function resetGame() {
        enableBtns();
        GameController.resetRound();
        _spaceBtns.forEach((space, index) => {
            if (board[index] !== '') {
                    space.innerText = '' 
                    board[index] = space.innerText;
            }
        });
    
        winnerContainer.innerText = '';
    }

    newGame.addEventListener('click', resetGame);

    return {
        render,
    }
})();

const GameController = (() => {
    const player1 = Player('x', 'Jim');
    const player2 = Player('o', 'Osiris');
    let round = 1;

    function getCurrentPlayer() {
        for (let i = 0; i <= 8; i++) {
            var currentPlayer = round % 2 === 0 ? player2.getMark() : player1.getMark();
            round++;
        }
        
        return currentPlayer;
    };

    function resetRound() {
        round = 1;
    }

    return {
        getCurrentPlayer,
        resetRound,
        player1,
        player2,
    }
})();

DisplayController.render();