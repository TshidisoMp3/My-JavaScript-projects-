// To get button from html
const button = document.getElementById('btn');

// Add an event listener to the button
button.addEventListener('click', function() {

    //The function to change color
    const randomColor = getRandomColor();

    //Background Color Change
    document.body.style.backgroundColor = randomColor;

    // Function of the getRandomColor
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i<6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    }

})