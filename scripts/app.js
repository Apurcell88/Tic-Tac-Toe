'use strict'

const Player = (mark) => {
    this.mark = mark;

    const getMark = () => mark;

    return {
        getMark,
    }
}

const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    const spaceBtns = document.querySelectorAll('[data-space-btn]');

    // function render() {
    //     board.forEach((space, index) => {
    //         spaceBtns[index].innerText = space;
    //     });

    //     // return board;
    // }

    function setBoard(index, sign) {
        if (index > board.length) return;

        board[index] = sign;
    }

    function getBoard() {
        
    }
    
    // spaceBtns.forEach((space, index) => {
    //     space.addEventListener('click', (e) => {
    //         console.log(e);
    //         space.innerText = markBoard(index, player1.getMark());
    //     });
    // });

    return {
        setBoard,
    }
})();

const DisplayController = (() => {

})();

const GameController = (() => {
    const player1 = Player('x');
    const player2 = Player('o');
    let round = 1;
})();

Gameboard.render();