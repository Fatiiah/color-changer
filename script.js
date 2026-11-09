
// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select the color box and button
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random hexadecimal color
    function getRandomColor() {

        const letters = "0123456789ABCDEF";

        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    // Add click event to the button
    changeColorBtn.addEventListener("click", function () {

        // Generate a random color
        const randomColor = getRandomColor();

        // Change the background color of the box
        colorBox.style.backgroundColor = randomColor;

        // Display the generated color in the console
        console.log(randomColor);

    });

});
