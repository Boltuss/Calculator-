var numberOfNumberedButton = document.querySelectorAll('.button');

for (var i = 0; i < numberOfNumberedButton.length; i++ ){
   numberOfNumberedButton[i].addEventListener('click' , function() {
    var NumButton = this.textContent; 
    callingNumber(NumButton);
   });
}


document.addEventListener('keypress', function(event) {
    callingNumber(event.key);
});


function callingNumber (num){
    var Number = document.getElementById('input');
    switch (num) {
        case "=":
            Number.value = eval(Number.value);
            break;
        case "AC":
            Number.value = '  ';
            break;
        case "DEL":
            Number.value = Number.value.slice(0, -1);
            break;
        case "Backspace":
            Number.value = Number.value.slice(0, -1);
            break;
        case "%":
            Number.value += ' % ';
            break;
        case "/":
            Number.value += ' / ';
            break;
        case "*":
            Number.value += ' * ';
            break;
        case "-":
            Number.value += ' - ';
            break;
        case "+":
            Number.value += ' + ';
            break;
        case ".":
            Number.value += '.';
            break;
        case "9":
            Number.value += '9';
            break;
        case "8":
            Number.value += '8';
            break;
        case "7":
            Number.value += '7';
            break;
        case "6":
            Number.value += '6';
            break;
        case "5":
            Number.value += '5';
            break;
        case "4":
            Number.value += '4';
            break;
        case "3":
            Number.value += '3';
            break;
        case "2":
            Number.value += '2';
            break;
        case "1":
            Number.value += '1';
            break;
        default:
            break;
    }
}

