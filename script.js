const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = `~!@#$%^&*()_+{}[]<>?,./"`;


// Initially
let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();

// Set strength circle color to grey
setIndicator("#ccc");


// Set password length
function handleSlider() {

    // Display the password length on the webpage
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;

    inputSlider.style.backgroundSize =
        ((passwordLength - min) * 100 / (max - min)) + "% 100%";
}


// Set strength indicator
function setIndicator(color) {

    indicator.style.backgroundColor = color;

    indicator.style.boxShadow =
        `0px 0px 12px 1px ${color}`;
}


// Generate random integer
function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}


// Generate random number
function generateRandomNumber() {

    return getRndInteger(0, 10);
}


// Generate lowercase letter
function generateLowerCase() {

    return String.fromCharCode(getRndInteger(97, 123));
}


// Generate uppercase letter
function generateUpperCase() {

    return String.fromCharCode(getRndInteger(65, 91));
}


// Generate random symbol
function generateSymbol() {

    const randNum = getRndInteger(0, symbols.length);

    return symbols.charAt(randNum);
}


// Calculate password strength
function calcStrength() {

    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;


    if (uppercaseCheck.checked)
        hasUpper = true;

    if (lowercaseCheck.checked)
        hasLower = true;

    if (numbersCheck.checked)
        hasNum = true;

    if (symbolsCheck.checked)
        hasSym = true;


    // Strong password
    if (
        hasUpper &&
        hasLower &&
        hasNum &&
        hasSym &&
        passwordLength >= 8
    ) {

        setIndicator("#0f0");

    }

    // Medium password
    else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {

        setIndicator("#ff0");

    }

    // Weak password
    else {

        setIndicator("#f00");
    }
}


// Copy password to clipboard
async function copyContent() {

    try {

        await navigator.clipboard.writeText(passwordDisplay.value);

        copyMsg.innerText = "Copied";

    }

    catch (e) {

        copyMsg.innerText = "Failed";
    }


    copyMsg.classList.add("active");


    setTimeout(() => {

        copyMsg.classList.remove("active");

        copyMsg.innerText = "";

    }, 2000);
}


// Shuffle password
function shufflePassword(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join("");
}


// Handle checkbox changes
function handleCheckBoxChange() {

    checkCount = 0;


    allCheckBox.forEach((checkbox) => {

        if (checkbox.checked) {
            checkCount++;
        }

    });


    // Special condition:
    // Password length cannot be smaller
    // than the number of selected character types.

    if (passwordLength < checkCount) {

        passwordLength = checkCount;

        handleSlider();
    }
}


// Add event listener to all checkboxes
allCheckBox.forEach((checkbox) => {

    checkbox.addEventListener(
        "change",
        handleCheckBoxChange
    );

});


// Handle password length slider
inputSlider.addEventListener("input", (e) => {

    passwordLength = Number(e.target.value);

    handleSlider();

});


// Copy button
copyBtn.addEventListener("click", () => {

    if (passwordDisplay.value) {
        copyContent();
    }

});


// Generate password
generateBtn.addEventListener("click", () => {

    // None of the checkboxes are selected
    if (checkCount <= 0) {
        return;
    }


    // Ensure password length is not
    // smaller than selected categories
    if (passwordLength < checkCount) {

        passwordLength = checkCount;

        handleSlider();
    }


    // Remove old password
    password = "";


    // Array containing selected
    // character generation functions
    let funcArr = [];


    if (uppercaseCheck.checked) {

        funcArr.push(generateUpperCase);
    }


    if (lowercaseCheck.checked) {

        funcArr.push(generateLowerCase);
    }


    if (numbersCheck.checked) {

        funcArr.push(generateRandomNumber);
    }


    if (symbolsCheck.checked) {

        funcArr.push(generateSymbol);
    }


    // Compulsory addition:
    // Add at least one character
    // from every selected category

    for (let i = 0; i < funcArr.length; i++) {

        password += funcArr[i]();
    }


    // Remaining characters
    // are generated randomly

    for (
        let i = 0;
        i < passwordLength - funcArr.length;
        i++
    ) {

        const randIndex =
            getRndInteger(0, funcArr.length);

        password += funcArr[randIndex]();
    }


    // Shuffle the password
    password = shufflePassword(
        Array.from(password)
    );


    // Show password in UI
    passwordDisplay.value = password;


    // Calculate password strength
    calcStrength();

});