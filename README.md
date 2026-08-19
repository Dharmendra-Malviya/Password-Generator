# Password Generator

A simple, interactive and responsive **Password Generator Web Application** built using **HTML, CSS and JavaScript**.

This application allows users to generate strong and customizable passwords by selecting the desired password length and character types such as **uppercase letters, lowercase letters, numbers and symbols**.

The generated password can also be copied directly to the clipboard, and the application provides a visual indication of password strength.

## Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [How the Application Works](#-how-the-application-works)
- [Application Flow](#-application-flow)
- [Password Generation Logic](#-password-generation-logic)
- [Password Strength Calculation](#-password-strength-calculation)
- [Copy Password Feature](#-copy-password-feature)
- [User Interface](#-user-interface)
- [How to Run the Project](#-how-to-run-the-project)
- [Example](#-example)
- [Important JavaScript Concepts Used](#-important-javascript-concepts-used)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Author](#-author)
- [License](#-license)


# About the Project

The **Password Generator** is a client-side web application designed to generate random passwords according to the user's requirements.

The user can:

1. Select the required password length.
2. Choose whether to include uppercase letters.
3. Choose whether to include lowercase letters.
4. Choose whether to include numbers.
5. Choose whether to include symbols.
6. Generate a random password.
7. View the generated password.
8. Check the estimated password strength.
9. Copy the generated password to the clipboard.

The entire application works directly in the browser and does not require a backend server or database.

# Features

## Custom Password Length

The user can select the password length using a slider.

- Minimum length: **1 character**
- Maximum length: **40 characters**
- Default length: **10 characters**

The selected length is displayed dynamically on the screen.

## Uppercase Letters

Users can enable uppercase characters:

A B C D E F ... Z

Example:
G
R
T
M


## Lowercase Letters

Users can enable lowercase characters:

a b c d e f ... z

Example:
a
k
p
x


## Numbers

Users can include numbers from:

0 - 9

Example:
4
7
1
9

## Symbols

The application supports symbols such as:

~ ! @ # $ % ^ & * ( ) _ + { } [ ] < > ? , . / "


## Password Strength Indicator

The application displays a colored circular indicator representing the estimated strength of the generated password.

### 🔴 Weak

A red indicator represents a weak password.

### 🟡 Medium

A yellow indicator represents a moderately strong password.

### 🟢 Strong

A green indicator represents a strong password.

The strength depends on:

- Password length
- Uppercase characters
- Lowercase characters
- Numbers
- Symbol

## Copy Password

The generated password can be copied to the clipboard using the copy button.

After clicking the button, the application displays:

Copied

If the clipboard operation fails:

Failed

The message automatically disappears after 2 seconds.


# Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive UI |
| JavaScript | Password generation and application logic |
| Font Awesome | Icons |
| Google Fonts | League Spartan font |
| Clipboard API | Copying generated passwords |


# Project Structure

Password-Generator/
│
├── index.html
├── styles.css
├── script.js
└── README.md

### `index.html`

Contains the structure of the webpage.

It includes:

- Password display
- Copy button
- Password length slider
- Character-type checkboxes
- Strength indicator
- Generate Password button


### `styles.css`

Contains the complete visual design of the application.

It controls:

- Colors
- Layout
- Typography
- Slider design
- Checkbox design
- Password display
- Buttons
- Strength indicator
- Background gradient
- Hover effects

---

### `script.js`

Contains the main application logic.

It handles:

- Password generation
- Random character generation
- Password length
- Checkbox selection
- Password strength
- Clipboard functionality
- Password shuffling
- UI updates

---

# How the Application Works

The application follows the following general process:

              ┌───────────────────────┐
              │       User Opens      │
              │      Application      │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Select Password Length│
              │      1 - 40           │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Select Character Types│
              │                       │
              │ Uppercase             │
              │ Lowercase             │
              │ Numbers               │
              │ Symbols               │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Click Generate Button │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Check Selected        │
              │ Character Types       │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Generate At Least One │
              │ Character From Each   │
              │ Selected Category     │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Generate Remaining    │
              │ Characters Randomly   │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Shuffle Generated     │
              │ Password              │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Display Password      │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ Calculate Password    │
              │ Strength              │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │ User Can Copy Password│
              └───────────────────────┘
```


# Application Flow

The application can be understood in five major stages.

## 1. Initialization

When the webpage loads, JavaScript initializes:

```javascript
let password = "";
let passwordLength = 10;
let checkCount = 0;
```

The default password length is set to:

10
```

The slider is initialized and the strength indicator is initially set to gray.

---

# 2. Selecting Password Length

The password length is controlled using:

```html
<input type="range" min="1" max="40">
```

Whenever the slider changes, JavaScript updates:

```javascript
passwordLength = e.target.value;
```

The displayed password length is also updated.

The slider's filled portion is dynamically calculated using:

```javascript
(passwordLength - min) * 100 / (max - min)
```

This allows the slider background to visually represent the selected value.

---

# 3. Selecting Character Types

The user can select four different character categories:

┌────────────────────┐
│ Uppercase Letters  │
├────────────────────┤
│ Lowercase Letters  │
├────────────────────┤
│ Numbers            │
├────────────────────┤
│ Symbols            │
└────────────────────┘
```

JavaScript checks which options are selected.

For example:

```javascript
if(uppercaseCheck.checked){
    funcArr.push(generateUpperCase);
}
```

If uppercase letters are selected, the uppercase character generator is added to an array.

The same process occurs for:

- Lowercase
- Numbers
- Symbols

---

# Password Generation Logic

The password generation process is designed so that **every selected character category is represented at least once**.

Suppose the user selects:

Length = 12

✓ Uppercase
✓ Lowercase
✓ Numbers
✓ Symbols
```

The application first generates:

```text
1 Uppercase
1 Lowercase
1 Number
1 Symbol
```

Therefore, 4 characters are guaranteed.

The remaining:

12 - 4 = 8

characters are generated randomly from the selected categories.

---

## Character Generator Functions

### Uppercase Generator

```javascript
function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65 , 91));
}
```

ASCII values from:

65 → A
66 → B
...
90 → z

are used.

---

### Lowercase Generator

```javascript
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97 , 123));
}
```

ASCII values from:

```text
97 → a
98 → b
...
122 → z
```

are used.

---

### Number Generator

```javascript
function generateRandomNumber(){
    return getRndInteger(0 , 9);
}
```

This generates random numeric values.

---

### Symbol Generator

The application maintains a predefined symbol set:

```javascript
const symbols = `~!@#$%^&*()_+{}[]<>?,./"`;
```

A random symbol is selected from this string.

---

# Random Number Generation

The main random number function is:

```javascript
function getRndInteger(min , max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
```

It generates a random integer in the range:

```text
min ≤ number < max
```

For example:

```javascript
getRndInteger(1, 10)
```

can generate:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9
```

---

# Password Shuffling

After generating the password, the characters are shuffled.

This is important because the initially generated password always starts with one character from each selected category.

For example, without shuffling:

Ab3@
```

would always have the same category order:

Uppercase → Lowercase → Number → Symbol
```

The application uses a **Fisher-Yates style shuffle**:

```javascript
function shufflePassword(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join("");
}
```

This randomizes the position of the generated characters.

For example:

Ab3@
```

could become:

@3bA
```

or:

b@A3
```

or:

3Ab@
```

---

# Password Strength Calculation

The strength calculation is performed by:

```javascript
function calcStrength()
```

The program checks four conditions:

Uppercase
Lowercase
Number
Symbol

---

## 🟢 Strong Password

A password is considered strong when:

Uppercase ✓
Lowercase ✓
Number    ✓
Symbol    ✓
Length >= 8

The indicator becomes green:

```javascript
setIndicator("#0f0");
```

---

## 🟡 Medium Password

A password is considered medium when:

Uppercase OR Lowercase
        AND
Number OR Symbol
        AND
Length >= 6

The indicator becomes yellow:

```javascript
setIndicator("#ff0");
```

---

## 🔴 Weak Password

If the above conditions are not satisfied, the indicator becomes red:

```javascript
setIndicator("#f00");
```

---

# Copy Password Feature

The application uses the browser's **Clipboard API**.

The important code is:

```javascript
await navigator.clipboard.writeText(passwordDisplay.value);
```

This copies the generated password to the user's clipboard.

If successful:
Copied
is displayed.

If an error occurs:
Failed
is displayed.

The message automatically disappears after 2 seconds:

```javascript
setTimeout(() => {
    copyMsg.classList.remove("active");
    copyMsg.innerText = "";
}, 2000);
```

---

#  User Interface

The interface contains the following major components:

                 PASSWORD GENERATOR
                         │
                         ▼
              ┌─────────────────────┐
              │     Password        │
              │  [ Generated ... ]  │     │
              └─────────────────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │ Password Length  10 │
              │                     │
              │ ━━━━━━━●━━━━━━━━━━  │
              │                     │
              │ ☑ Uppercase         │
              │ ☑ Lowercase         │
              │ ☑ Numbers           │
              │ ☑ Symbols           │
              │                     │
              │ Strength       🟢   │
              │                     │
              │ [ GENERATE PASSWORD]│
              └─────────────────────┘
```

The UI uses:

- Dark violet containers
- Gradient background
- Yellow password text
- Cyan checkboxes
- Custom range slider
- Circular strength indicator
- Responsive layout

---

# How to Run the Project

## Method 1 — Open Directly

Clone or download the repository.

Then open:
index.html
in your web browser.


## Method 2 — Using VS Code

### Step 1

Clone the repository:
git clone <your-repository-url>

### Step 2

Open the project folder in VS Code.

### Step 3

Open:
index.html

### Step 4

Run it using the **Live Server** extension or open the HTML file directly in your browser.


# Example

Suppose the user selects:
Password Length: 12

✓ Uppercase
✓ Lowercase
✓ Numbers
✓ Symbols

The generated password might be:
G7@kP2!xQ9#m

Another generation could produce:
8@Lm2#QxP7!z

Each generated password is randomized.


# Important JavaScript Concepts Used

This project demonstrates several important JavaScript concepts.

### DOM Selection
document.querySelector()

and:
document.querySelectorAll()
are used to access HTML elements.


### Event Listeners

The application uses:

```javascript
addEventListener()
```

to respond to:

- Slider movement
- Checkbox changes
- Generate button clicks
- Copy button clicks

---

### Arrays

An array is used to store the selected character-generation functions:

```javascript
let funcArr = [];
```

---

### Functions

The project is divided into multiple reusable functions:

```text
handleSlider()
setIndicator()
generateUpperCase()
generateLowerCase()
generateRandomNumber()
generateSymbol()
calcStrength()
copyContent()
shufflePassword()
handleCheckBoxChange()
```

---

### Conditional Statements

The application uses:

```javascript
if
else if
else
```

to make decisions based on user selections and password strength.

---

### Async/Await

The Clipboard API uses:

```javascript
async
await
```

for asynchronous clipboard operations.

---

### Template Literals

The project uses JavaScript template literals for strings such as the symbol collection.

---

### Destructuring Assignment

The shuffle algorithm uses:

```javascript
[array[i], array[j]] = [array[j], array[i]];
```

to swap two array elements.

---

# Security Note

This project generates passwords **locally in the user's browser**.

No password is intentionally sent to a server, database, or external API.

However, this project is primarily an educational/demo password generator. For applications requiring high-security password generation, consider using the browser's cryptographically secure random API such as:

```javascript
crypto.getRandomValues()
```

rather than relying solely on:

```javascript
Math.random()
```

---

# Current Limitations

The current version has a few limitations:

- Password generation uses `Math.random()`, which is not intended for cryptographic security.
- Password strength is an estimate based on selected character categories and length.
- There is no backend.
- Generated passwords are not stored.
- The application does not check passwords against known compromised-password databases.
- Clipboard access can depend on browser security policies and context.

---

# Future Improvements

Possible improvements for future versions include:

### 1. Cryptographically Secure Random Generation

Replace `Math.random()` with:

```javascript
crypto.getRandomValues()
```

for stronger random generation.

---

### 2. Password Strength Meter

A more advanced strength calculation could consider:

- Character diversity
- Repeated characters
- Sequential characters
- Common patterns
- Entropy

---

### 3. Responsive Design Improvements

The interface can be further optimized for:

- Mobile phones
- Tablets
- Desktop screens

---

### 4. Password History

Add an option to temporarily display previously generated passwords.

---

### 5. Dark/Light Theme

Allow users to switch between:
Dark Mode
Light Mode

---

### 6. Exclude Similar Characters

Provide an option to exclude confusing characters such as:
0 O
1 l I

---

### 7. Additional Password Options

Possible options:
Exclude Symbols
Exclude Numbers
No Repeated Characters
No Similar Characters

---

# Learning Outcomes

By developing this project, the following concepts can be practiced:

- HTML DOM structure
- CSS styling
- CSS variables
- Flexbox
- CSS pseudo-elements
- Custom range sliders
- Custom checkboxes
- JavaScript DOM manipulation
- JavaScript events
- Arrays
- Functions
- Random number generation
- ASCII character generation
- Fisher-Yates style shuffling
- Clipboard API
- Async/Await
- Conditional logic
- Dynamic UI updates

---

# Project Highlights
✔ Custom password length
✔ Uppercase character support
✔ Lowercase character support
✔ Number support
✔ Symbol support
✔ Random password generation
✔ Password shuffling
✔ Password strength indicator
✔ Copy-to-clipboard functionality
✔ Interactive UI
✔ Responsive layout
✔ No backend required

---

# External Resources

This project uses the following external resources:

- **Font Awesome** — for icons
- **Google Fonts** — League Spartan font

The application otherwise performs password generation completely on the client side.

---

## 🔥 Final Project Flow
                     ┌───────────────┐
                     │  Open Website │
                     └───────┬───────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Set Password Length │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Select Character     │
                  │ Categories          │
                  │                     │
                  │ Uppercase            │
                  │ Lowercase            │
                  │ Numbers              │
                  │ Symbols              │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Generate Password   │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Add One Character   │
                  │ From Each Selected  │
                  │ Category            │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Generate Remaining  │
                  │ Characters Randomly │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Shuffle Characters  │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Display Password    │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Calculate Strength  │
                  └──────────┬──────────┘
                             │
                  ┌──────────┴──────────┐
                  │                     │
                  ▼                     ▼
            ┌───────────┐         ┌─────────────┐
            │ Copy      │         │ Generate    │
            │ Password  │         │ Again       │
            └───────────┘         └─────────────┘
```

---
