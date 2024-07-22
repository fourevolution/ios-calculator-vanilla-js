let a = ''; // first number
let b = ''; // second number
let sign = ''; //operator
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.']
const action = ['-','+','X','/']

const out = document.querySelector('.calc-screen');

function clearAll () {
    let a = ''; // first number
    let b = ''; // second number
    let sign = ''; //operator
    let finish = false;
    out.textContent = 0;
}

document.querySelector('.ac')
    .addEventListener('click', ()=>{
        clearAll();
    });

document.querySelector('.buttons').addEventListener('click', (event) => {
    // tapped to empty space
    if(!event.target.classList.contains('btn')) return;
    // tapped AC
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // Get tapped key
    const key = event.target.textContent;

    // Check 0-9 or .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a,b,sign);
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a,b,sign);
        return;
    }

    // check action
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a,b,sign);
        return;
    }

    // Tapped equal
    if (key === '=') {
        if (b === '') b = a;
        switch(sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a,b,sign);
    }

})