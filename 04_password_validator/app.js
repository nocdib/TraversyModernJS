// Define variables for the relevant elements
const   firstPassword = document.getElementById('firstPassword'),
        secondPassword = document.getElementById('secondPassword'),
        continueButton = document.getElementById('continue-btn'),
        lengthRequirement = document.getElementById('length'),
        characterCaseRequirement = document.getElementById('case'),
        symbolRequirement = document.getElementById('symbol'),
        matchingRequirement = document.getElementById('matching'),
        modalMsg = document.getElementById("validationMsg")

/*
On every keypress in the first password field, verify that the text is both upper and lower case
characters, at least one symbol, and that it matches the text of the second password field. If all
requirements are met then enable the continue button.
*/    
firstPassword.addEventListener('keyup', function(e) {
    verifyCharacterCase()
    verifySymbol()
    verifyLength()
    verifyMatching()
    continueButtonState()
})

/*
On every keypress in the second password field it matches the text of the first password field. If
all requirements are met then enable the continue button.
*/  
secondPassword.addEventListener('keyup', function(e) {
    verifyLength()
    verifyMatching()
    continueButtonState()
})

/*
Verify that the length of entered string is between 8 and 20 characters long
*/  
function verifyLength() {
    if(firstPassword.value.length >= 8 && firstPassword.value.length <= 20) {
        lengthRequirement.classList.remove("uk-text-danger")
        lengthRequirement.classList.add("uk-text-success")
        lengthRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: check')
        return true
    } else {
        lengthRequirement.classList.add("uk-text-danger")
        lengthRequirement.classList.remove("uk-text-success")
        lengthRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: ban')
        return false
    }
}

/*
Verify that the entered string contains at least one symbol character
*/  
function verifySymbol() {
    let format = /[!¤@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(firstPassword.value)){
        symbolRequirement.classList.remove("uk-text-danger")
        symbolRequirement.classList.add("uk-text-success")
        symbolRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: check')
        return true
    } else {
        symbolRequirement.classList.add("uk-text-danger")
        symbolRequirement.classList.remove("uk-text-success")
        symbolRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: ban')
        return false
    }
}

/*
Verify that the strings in both password fields are equal
*/  
function verifyMatching() {
    if(firstPassword.value == secondPassword.value) {
        matchingRequirement.classList.remove("uk-text-danger")
        matchingRequirement.classList.add("uk-text-success")
        matchingRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: check')
        return true
    } else {
        matchingRequirement.classList.add("uk-text-danger")
        matchingRequirement.classList.remove("uk-text-success")
        matchingRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: ban')
        return false
    }
}

/*
Verify that the string has both capital and lowercase letters
*/  
function verifyCharacterCase() {
    str = firstPassword.value
    if(str.toUpperCase() != str && str.toLowerCase() != str) {
        characterCaseRequirement.classList.remove("uk-text-danger")
        characterCaseRequirement.classList.add("uk-text-success")
        characterCaseRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: check')
        return true
    } else {
        characterCaseRequirement.classList.add("uk-text-danger")
        characterCaseRequirement.classList.remove("uk-text-success")
        characterCaseRequirement.getElementsByTagName("span")[0].setAttribute('uk-icon', 'icon: ban')
        return false
    }
}

/*
If all password requirements are met then enable the Continue button
*/  
function continueButtonState() {
    if(verifyCharacterCase() && verifySymbol() && verifyMatching()) {
        continueButton.removeAttribute("disabled")
        modalMsg.innerHTML = `Your password <b>${firstPassword.value}</b> is valid.`
    } else {
        continueButton.setAttribute("disabled", "")
        modalMsg.innerHTML = ""
    }
}

