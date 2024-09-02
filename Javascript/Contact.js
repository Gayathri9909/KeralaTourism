
function validateContact(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (firstName === "") {
        alert("First name is required");
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9");
        return false;
    }

    if (message === "") {
        alert("Enter some message");
        return false;
    }
    console.log("First Name:", firstName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Message:", message);
    alert("Response submitted");

    document.getElementById("contactForm").reset();
    return true;

}
function details() {
    document.getElementById("cdetails").setAttribute("style", "color: green");
    setTimeout(function() {
        document.getElementById("cdetails").removeAttribute("style");
    }, 3000);
}
function handleOnBlur(x) {
    x.style.borderColor = "green";
  }

function validateContact(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (firstName === "") {
        alert("First name is required");
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9");
        return false;
    }

    if (message === "") {
        alert("Enter some message");
        return false;
    }
    
    alert("Response submitted");
}

