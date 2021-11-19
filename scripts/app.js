const Gameboard = ((id) => {
    const spaces = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    const spaceBtns = document.querySelectorAll('[data-space-btn]');

    function render() {
        spaces.forEach((space, index) => {
            spaceBtns[index].innerText = space;
        });

        return spaces;
    }

    return {
        render,
    }
})();

const Player = (mark) => {

}

Gameboard.render();