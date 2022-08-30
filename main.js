// Reference to the targets
const hexCode = document.querySelector('.hex');
const hexButton = document.querySelector('.hex-btn');
const bodyBg = document.querySelector('body');

// Create an array of colors for the background change
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// Add an event listener to the button to listen to the events
hexButton.addEventListener('click', () => {
    let hexCol = '#';
    for(i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);
        // console.log(random);
        hexCol += hexNumbers[random];
        // console.log(hexCol);
    }
    bodyBg.style.backgroundColor = hexCol;
    hexCode.innerHTML = hexCol;
})