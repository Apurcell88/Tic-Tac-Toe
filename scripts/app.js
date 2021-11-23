'use strict'
const Player = (mark, name) => {
    this.mark = mark;
    this.name = name;

    const getMark = () => mark;
    const getName = () => name;

    return {
        getMark,
        getName,
    }
}

const DisplayController = (() => {
    const _spaceBtns = document.querySelectorAll('[data-space-btn]');
    const winner = document.querySelector('[data-winner]');
    const winnerContainer = document.querySelector('[data-winner-container]');
    let board = ['', '', '', '', '', '', '', '', ''];

    function render() {
        _spaceBtns.forEach((space, index) => {
            space.addEventListener('mouseup', (e) => {
                if (board[index] === '') {
                    space.innerText = GameController.playRound(); 
                    board[index] = space.innerText;
                }
                checkWin(board);
            });
        });
    }

    function checkWin(board) {
        if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
            winner.textContent = `${GameController.player1.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }


        if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);
            disableBtns()
        }
        if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
            winner.textContent = `${GameController.player2.getName()} wins!`;
            winnerContainer.appendChild(winner);;
            disableBtns()
        }        
    }

    function disableBtns() {
        _spaceBtns.forEach((btn) => {
            btn.disabled = true;
        });
    }

    return {
        render,
    }
})();

const GameController = (() => {
    const player1 = Player('x', 'Jim');
    const player2 = Player('o', 'Osiris');
    let _round = 1;

    function playRound() {
        for (let i = 0; i <= 8; i++) {
            var currentPlayer = _round % 2 === 0 ? player2.getMark() : player1.getMark();
            _round++;
        }
        
        return currentPlayer;
    };

    return {
        playRound,
        player1,
        player2,
    }
})();

DisplayController.render();