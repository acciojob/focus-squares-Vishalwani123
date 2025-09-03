//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
    square.addEventListener('mouseenter', () => {
        squares.forEach((sq, i) => {
            if (i !== index) {
                sq.style.backgroundColor = 'rgb(111, 78, 55)'; 
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        squares.forEach(sq => {
            sq.style.backgroundColor = 'rgb(230, 230, 250)'; 
        });
    });
});
