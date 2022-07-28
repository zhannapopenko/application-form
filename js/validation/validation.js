function validatePersonalDetails() {
    const isGenderValid = validateGenderButton();
    const isInputsValid = validateInputs();
    const isSelectedValid = validateDropdowns();
    const isFileValid = validateFile();
    const isSubscriptionValid = validateSubscriptionButton();
    const isEmailValid = validateEmail();

    return isGenderValid && isInputsValid && isSelectedValid && isFileValid && isSubscriptionValid && isEmailValid;
}

function validateAddressDetails() {
    const isInputsValid = validateInputs();
    const isSelectsValid = validateDropdowns();

    return isInputsValid && isSelectsValid;
}

function uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
}

function validateFile() {
    const inputElement = document.querySelector(".input-file");
    const files = inputElement.files;
    if (files.length == 0) {
        document.querySelector(".text-error-length").style.display = "inline-block";
        return false;
    } else if ((files[0].size / (1024 * 1024)).toFixed(2) > 10) {
        document.querySelector(".text-error-length").style.display = "none";
        document.querySelector(".text-error-size").style.display = "inline-block";
        return false;
    } else {
        document.querySelector(".text-error-length").style.display = "none";
        document.querySelector(".text-error-size").style.display = "none";
        return true
    }
}

function validateDropdowns() {
    let isValid = true;
    const items = document.querySelectorAll(".dropdown").forEach(function (dropdown) {
        const input = dropdown.querySelector(".dropdown-input-hidden");
        if (!input.value || input.value == "") {
            dropdown.querySelector(".text-error").style.display = "inline-block";
            isValid = false;
        } else {
            dropdown.querySelector(".text-error").style.display = "none";
        }
    });
    return isValid;
}

function validateInputs() {
    let isValid = true;
    const items = document.querySelectorAll(".validation").forEach(function (item) {
        const input = item.querySelector(".input-value");
        if (!input.value || input.value == "") {
            item.querySelector(".text-error").style.display = "inline-block";
            isValid = false;
        } else {
            item.querySelector(".text-error").style.display = "none";
        }
    });
    return isValid;
}

function validateGenderButton() {
    let isValid = true;
    const getSelectedGender = document.querySelector('input[name="gender"]:checked');
    if (getSelectedGender == null) {
        document.querySelector(".text-gender-error").style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector(".text-gender-error").style.display = "none";
        isValid = true;
    }
    return isValid;
}

function validateSubscriptionButton() {
    let isValid = true;
    const getSelectedSubscription = document.querySelector('input[name="subscription"]:checked');
    if (getSelectedSubscription == null) {
        document.querySelector(".text-subscription-error").style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector(".text-subscription-error").style.display = "none";
        isValid = true;
    }
    return isValid;
}

function validateEmail() {
    let isValid = true;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.querySelector(".email");
    if (email.value && !email.value.match(mailformat)) {
        document.querySelector(".text-format-error").style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector(".text-format-error").style.display = "none";
    }

    return isValid;
}
