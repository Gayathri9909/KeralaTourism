const form = document.querySelector(".register-form form");
const firstName = document.getElementById("first-name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const lastName = document.getElementById("last-name");
const dateOfBirth = document.getElementById("date-of-birth");
const phonenumber = document.getElementById("phonenumber");
const state = document.getElementById("state");
const district = document.getElementById("district");
const address = document.getElementById("address");


const fields = [firstName, username, email, password, confirmPassword, lastName, dateOfBirth, phonenumber, state, district, address];
fields.forEach(field => {
    field.addEventListener('focusin', (event) => {
        event.target.style.backgroundColor = "aliceblue"; 
        event.target.style.color="black";
        clearError(event.target);
    });

    field.addEventListener('focusout', (event) => {
        event.target.style.backgroundColor=""
        validateField(event.target);
    });
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
        alert("User registered successfully");
        form.reset(); 
        // window.location.href = 'login.html';
    }
});

function validateInputs() {
    const isFirstNameValid = checkBlank(firstName, "First name");
    const isLastNameValid = checkBlank(lastName, "Last name");
    const isUsernameValid = checkBlank(username, "Username");
    const isEmailValid = emailValidation();
    const isPasswordValid = passwordValidation();
    const isConfirmPasswordValid = confirmPasswordValidation();
    const isDateOfBirthValid = checkBlank(dateOfBirth, "Date of Birth");
    const isphonenumberValid = phonenumberValidation();
    const isStateValid = checkBlank(state, "State");
    const isDistrictValid = checkBlank(district, "District");
    const isAddressValid = checkBlank(address, "Address");

    return isFirstNameValid && isLastNameValid && isUsernameValid && isEmailValid && 
           isPasswordValid && isConfirmPasswordValid && isDateOfBirthValid && 
           isphonenumberValid && isStateValid && isDistrictValid && 
           isAddressValid;
}

function passwordValidation() {
    if (checkBlank(password, "Password")) {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const digitPattern = /\d/;
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.value.length < 8) {
            setError(password, "Password must have 8 characters");
            return false;
        }
        else if (!uppercasePattern.test(password.value)) {
            setError(password, "Password must have at least 1 uppercase letter");
            return false;
        }
        else if (!lowercasePattern.test(password.value)) {
            setError(password, "Password must have at least 1 lowercase letter");
            return false;
        }
        else if (!digitPattern.test(password.value)) {
            setError(password, "Password must have at least 1 digit");
            return false;
        }
        else if (!specialCharPattern.test(password.value)) {
            setError(password, "Password must have at least 1 special character");
            return false;
        }
        else {
            setSuccess(password);
            return true;
        }
    }
    return false;
}

function confirmPasswordValidation() {
    if (password.value !== confirmPassword.value){
        setError(confirmPassword, "Confirm password must be same as password");
        return false;
    }
    setSuccess(confirmPassword);
    return true;
}

function emailValidation() {
    if (checkBlank(email, "Email")) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(email.value)) {
            setSuccess(email);
            return true;
        }
        else {
            setError(email, "Invalid email address");
            return false;
        }
    }
    return false;
}

function phonenumberValidation(){
    if (checkBlank(phonenumber,"phonenumber")){
        const phonePattern = /^[6-9]\d{9}$/;
        if(phonePattern.test(phonenumber.value)){
            setSuccess(phonenumber);
            return true;
        }
        else{
            setError(phonenumber,"Invalid phone number");
            return false;
        }
    }
    return false;
}

function checkBlank(field, fieldName) {
    if (field.value === '') {
        setError(field, `${fieldName} cannot be empty`);
        return false;
    }
    else {
        setSuccess(field);
        return true;
    }
}


let Kerala = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"];

let Karnataka = ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Vijayapura", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada"];

let TamilNadu = ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam"];

state.addEventListener('change', (event) => { districtSelector(event); });

function districtSelector(event) {
    const stateSelected = event.target.value;
    let optionList;
    let districtOptions = "";
    switch (stateSelected) {
        case "Kerala": optionList = Kerala;
            break;
        case "Karnataka": optionList = Karnataka;
            break;
        case "Tamil Nadu": optionList = TamilNadu;
            break;
    }

    for (let i = 0; i < optionList.length; i++) {
        districtOptions += `<option value=${optionList[i]}>${optionList[i]}</option>`;
    }
    district.innerHTML = districtOptions;
}

function setError(inputField, msg) {
    const formField = inputField.parentElement;
    const errorField = formField.querySelector(".error-field .error-msg");
    errorField.innerHTML = msg;
    errorField.style = "display:block";
    inputField.style = "border-bottom: 1px solid #ff3232";
}

function setSuccess(inputField) {
    const formField = inputField.parentElement;
    const errorField = formField.querySelector(".error-field .error-msg");
    inputField.style = "border-bottom: 1px solid #62ff32";
    errorField.style = "display:none";
}
