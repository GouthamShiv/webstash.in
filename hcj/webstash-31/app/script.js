const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardBtn = document.getElementById('clipboard');

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

const minLength = 4;
const maxLength = 20;

clipboardBtn.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    } else {
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();
        // deprecated
        // document.execCommand('copy');
        navigator.clipboard.writeText(textArea.value);
        textArea.remove();
        alert('Password copied to clipboard');
    }
});

generateBtn.addEventListener('click', () => {
    const length = +lengthEl.value > 20 ? 20 : +lengthEl.value < 4 ? 4 : +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
})

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        })
    }
    const randomPassword = generatedPassword.slice(0, length);
    return randomPassword;
}