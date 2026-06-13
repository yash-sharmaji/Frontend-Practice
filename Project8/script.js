const submitbtn = document.getElementById("submit-btn");
const resetbtn = document.getElementById("reset-btn");
const passwordDisplay = document.getElementById("Password");
const passwordLength = document.getElementById("Length");

submitbtn.addEventListener("click", () => {

    const length = Number(passwordLength.value);

    let includeUppercase = false;
    let includeLowercase = false;

    if (document.getElementById("Letters1").checked) {
        includeUppercase = true;
    }
    else if (document.getElementById("Letters2").checked) {
        includeLowercase = true;
    }
    else if (document.getElementById("Letters3").checked) {
        includeUppercase = true;
        includeLowercase = true;
    }
    const includeNumbers =
        document.getElementById("Numbers1").checked;

    const includeSymbols =
        document.getElementById("Special1").checked;

    if (isNaN(length) || length <= 0) {
        passwordDisplay.textContent =
            "Please enter a valid password length.";
        return;
    }

    const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    passwordDisplay.textContent = password;
});


resetbtn.onclick = () => {

    document.querySelectorAll('input[type="radio"]')
        .forEach(radio => {
            radio.checked = false;
        });

    passwordLength.value = "";

    passwordDisplay.textContent =
        "Fill the above options please";
};

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    let allowedChars = "";
    let password = "";

    if (includeLowercase) {
        allowedChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
        allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        allowedChars += "0123456789";
    }
    if (includeSymbols) {
        allowedChars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    if (allowedChars === "") {
        return "Please select at least one option.";
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
            Math.random() * allowedChars.length
        );
        password += allowedChars[randomIndex];
    }
    return password;
}
