
// Assignment code here
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function () {

    let length = prompt("Enter the length of the password (8-128 characters):");
    while (length < 8 || length > 128) {
        length = prompt("Password length must be between 8 and 128 characters. Enter the length:");
    }


    let includesLowercase = confirm("Include lowercase letters?");
    let includesUppercase = confirm("Include uppercase letters?");
    let includesNumeric = confirm("Include numeric characters?");
    let includesSpecial = confirm("Include special characters?");
    while (!includesLowercase && !includesUppercase && !includesNumeric && !includesSpecial) {
        alert("You must select at least one character type to include in the password.");
        includesLowercase = confirm("Include lowercase letters?");
        includesUppercase = confirm("Include uppercase letters?");
        includesNumeric = confirm("Include numeric characters?");
        includesSpecial = confirm("Include special characters?");
    }
    // Generate password
    let password = "";
    let characterTypes = [];
    let possibleCharacters = "";
    if (includesLowercase) {
        characterTypes.push("lowercase");
        possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includesUppercase) {
        characterTypes.push("uppercase");
        possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includesNumeric) {
        characterTypes.push("numeric");
        possibleCharacters += "0123456789";
    }
    if (includesSpecial) {
        characterTypes.push("special");
        possibleCharacters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        password += possibleCharacters.charAt(randomIndex);
    }

    passwordText.value = password;
});
