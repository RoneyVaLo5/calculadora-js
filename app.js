const btns = document.querySelectorAll('.btn');
let value1 = 0;
let value2 = 0;
let operator = '';
let isStar = false;
const result = document.querySelector('#result');

// TODO: Falta hacer que resuelva raíz cuadrada, potencia, residuo de división

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        console.log(e.target.id);
        if ((e.target.id !== '=') && (e.target.id !== 'ac')) showNumbers(e.target.id);
        else {
            if (e.target.id === 'ac') {
                reset();
                result.textContent = '0';
            }
            else createResult();
        }
    });
});

const showNumbers = (num) => {
    if ((result.textContent === '0') && (num !== '.')) {
        if (!isNaN(num)) {
            result.textContent = num;
            isStar = true;
        }
    } else {
        result.textContent += num;
    }

    if ((isStar) && (isNaN(num)) && (num !== '.')) {
        if (operator === '') operator = num;
    }
};

const createResult = () => {
    let operation = result.textContent.split(operator);
    value1 = operation[0];
    value2 = operation[1];

    console.log(`${value1} ${operator} ${value2}`);
    console.log(`Resultado final: ${resolveOperation()}`);
    result.textContent = resolveOperation();
    reset();
};

const reset = () => {
    value1 = 0;
    value2 = 0;
    operator = '';
}

const resolveOperation = () => {
    let resultOperation = 0;
    switch (operator) {
        case '+':
            resultOperation = parseFloat(value1) + parseFloat(value2);
            break;
        case '−':
            resultOperation = parseFloat(value1) - parseFloat(value2);
            break;
        case '÷':
            resultOperation = parseFloat(value1) / parseFloat(value2);
            break;
        case '×':
            resultOperation = parseFloat(value1) * parseFloat(value2);
            break;
    }

    return resultOperation;
};

