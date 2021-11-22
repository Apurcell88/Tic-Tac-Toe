'use strict'

const Player = (mark) => {
    this.mark = mark;

    const getMark = () => mark;

    return {
        getMark,
    }
}

const DisplayController = (() => {
    const spaceBtns = document.querySelectorAll('[data-space-btn]');
    let _board = ['', '', '', '', '', '', '', '', ''];

    function render() {
        spaceBtns.forEach((space, index) => {
            space.addEventListener('click', (e) => {
                if (_board[index] === '') {
                    space.innerText = GameController.playRound(); 
                    _board[index] = space.innerText;
                }
            });
        });
    }

    return {
        render,
    }
})();

const GameController = (() => {
    const _player1 = Player('x');
    const _player2 = Player('o');
    let _round = 1;

    function playRound() {
        for (let i = 0; i <= 8; i++) {
            var currentPlayer = _round % 2 === 0 ? _player2.getMark() : _player1.getMark();
            _round++;
        }
        
        return currentPlayer;
    }

    return {
        playRound,
    }
})();

DisplayController.render();