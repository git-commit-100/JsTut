console.log('Calculator Using Vanilla JS');

let previousOperation = document.querySelector('.previous-operation');
let currentOperation = document.querySelector('.current-operation');
let buttons = document.querySelectorAll('.btn');
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonTxt = e.target.innerText;
        let value = currentOperation.innerText;
        if (buttonTxt == 'AC') {
            buttonTxt = '';
            currentOperation.innerText = '';
            previousOperation.innerText = '';
        } else if (buttonTxt == '.') {
            //SUPERHUMAN LOGIC
            currentOperation.innerText = value + buttonTxt;

        } else if (buttonTxt == 'DEL') {
            currentOperation.innerText = value.toString().slice(0, -1);
        } else if (buttonTxt == '=') {
            if (value != null) {
                previousOperation.innerText = value;
                value = '';
            }
            currentOperation.innerText = eval(currentOperation.innerText);
        } else {
            value = value + buttonTxt;
            currentOperation.innerText = value;
        }
    })
}
