
function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;

    var guess = elements.guess.value;

    var result = document.getElementById('result');

    result.textContent = 'You made a guess of ' + guess;

    if(guess < 3) {
        result.textContent = 'Your guess is too low!'
    } else if (guess > 3) {
        result.textContent = 'Your guess is too high!'
    } else {
        result.textContent = 'Your guess is correct!'
    }
    
    
}

