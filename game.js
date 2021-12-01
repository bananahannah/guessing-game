console.log('guessing game')



//  click on any button, and then that button will be disabled once you click on it 
// access as a property and disable the button 

var guessButtons = document.querySelectorAll('section, button')
var resetButton = document.querySelector('.reset-btn')
var guessNumberSpan = document.querySelector('span')
var messageDiv = document.querySelector('.message-div')

var testNumber = 0
var secretNumber = 7; // hard code for conveneience 


function handleUserGuess(event) {
    testNumber++
    guessNumberSpan.textContent = testNumber
    debugger

    let theOneTheUserClickedOn = event.target
    theOneTheUserClickedOn.disabled = true

    let userSelectedNumber =  Number(theOneTheUserClickedOn.textContent)
    console.log(userSelectedNumber)

    if (userSelectedNumber === secretNumber) {
        messageDiv.textContent = 'congrats babe';

    // disable all da buttons
    for (let i = 0; i < guessButtons.length; i++){
        guessButtons[i].disabled = true
        }
    }
}



function reset(event) {
    for (let index = 0; index < guessButtons.length; index++) {
        guessButtons[index].disabled = false;  

        let theOneTheUserClickedOn = event.target

        if(theOneTheUserClickedOn === resetButton){
            document.querySelector('span').textContent = '0',
            messageDiv.textContent = ''
        }
    }
}


guessButtons.forEach(function(button) {
    button.addEventListener('click', handleUserGuess)
})



resetButton.addEventListener('click', reset)
