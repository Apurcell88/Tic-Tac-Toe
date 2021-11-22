'use strict'
let board = ['', '', '', '', '', '', '', '', ''];

const Player = (mark) => {
    this.mark = mark;

    const getMark = () => mark;

    return {
        getMark,
    }
}

const DisplayController = (() => {
    const _spaceBtns = document.querySelectorAll('[data-space-btn]');
    let board = ['', '', '', '', '', '', '', '', ''];

    function render() {
        _spaceBtns.forEach((space, index) => {
            space.addEventListener('click', (e) => {
                if (board[index] === '') {
                    space.innerText = GameController.playRound(); 
                    board[index] = space.innerText;
                }
            });
        });
    }

    return {
        render,
        board
    }
})();

const GameController = (() => {
    const _player1 = Player('x');
    const _player2 = Player('o');
    let _round = 1;

    function playRound() {
        for (let i = 0; i <= 8; i++) {
            if (DisplayController.board[0] === 'x' && DisplayController.board[1] === 'x' && DisplayController.board[2] === 'x') {
                break;
            }
            var currentPlayer = _round % 2 === 0 ? _player2.getMark() : _player1.getMark();
            _round++;
        }
        
        return currentPlayer;
    };

    function checkWin(board) {
        
    }

    return {
        playRound,
        checkWin
    }
})();

DisplayController.render();