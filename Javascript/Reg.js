<<<<<<< HEAD

document.addEventListener("change", function () {
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");
  
    const stateCityMap = {
      kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
      tamilnadu: ["Chennai", "Coimbatore", "Madurai"],
      karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      maharashtra: ["Mumbai", "Pune", "Nagpur"],
      uttarpradesh: ["Lucknow", "Kanpur", "Varanasi"],
      other: ["Other City"]
    };
  
    stateDropdown.addEventListener("change", function () {
        const selectedState = stateDropdown.value;
        const cities = stateCityMap[selectedState] || [];
      
        let optionselected = '<option value="">Select your City</option>';
        for (const city of cities) {
          optionselected += `<option>${city}</option>`;
        }
        cityDropdown.innerHTML = optionselected;
      });
  
    document.getElementById("dob").addEventListener("change", function () {
      const dob = this.value;
      const age = calculateAge(dob);
      document.getElementById("age").value = age;
    });
  });
  
  function validateForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const state = document.getElementById("state").value.trim();
    const city = document.getElementById("city").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    
    if (firstName === "") {
      alert("Firstname is required");
      return false;
    }
     
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (!gender) {
      alert("Gender is required");
      return false;
    }
  
    if (dob === "") {
      alert("Date of birth is required");
      return false;
    }
     
    const zipPattern = /^\d{6}$/;
    if (!zipPattern.test(zip)) {
    alert("Please enter a valid 6-digit ZIP code");
    return false;
  }

  const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Please enter a valid 10-digit mobile number");
      return false;
    }
  
    if (state === "") {
      alert("Please select a state");
      return false;
    }
  
    if (city === "") {
      alert("Please select a city");
      return false;
    }
    
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.");
        return false;
    }
  
    if (confirmPassword === "") {
      alert("Confirm password is required");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
   
    
    const user = {
      email: email,
      password: password
    };
    localStorage.setItem('registeredUser', JSON.stringify(user));
  
    alert("User registered successfully!");
    console.log("FirstName:",firstName);
    console.log("Email:",email);
    console.log("Password:",password);
    window.location.href = "Login.html";
  }
  
 function calculateAge(dob) {
  const dobYear = new Date(dob).getFullYear();
  const currentYear = new Date().getFullYear();
  let age = currentYear - dobYear;
  return age;
}
function handleOnBlur(x) {
  x.style.borderColor = "green";
}


=======
document.addEventListener("change", function () {
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");
  
    const stateCityMap = {
      kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
      tamilnadu: ["Chennai", "Coimbatore", "Madurai"],
      karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      maharashtra: ["Mumbai", "Pune", "Nagpur"],
      uttarpradesh: ["Lucknow", "Kanpur", "Varanasi"],
      other: ["Other City"]
    };
  
    stateDropdown.addEventListener("change", function () {
        const selectedState = stateDropdown.value;
        const cities = stateCityMap[selectedState] || [];
      
        let optionselected = '<option value="">Select your City</option>';
        for (const city of cities) {
          optionselected += `<option>${city}</option>`;
        }
        cityDropdown.innerHTML = optionselected;
      });
  
    document.getElementById("dob").addEventListener("change", function () {
      const dob = this.value;
      const age = calculateAge(dob);
      document.getElementById("age").value = age;
    });
  });
  
  function validateForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const state = document.getElementById("state").value.trim();
    const city = document.getElementById("city").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    if (firstName === "") {
      alert("First name is required");
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (!gender) {
      alert("Gender is required");
      return false;
    }
  
    if (dob === "") {
      alert("Date of birth is required");
      return false;
    }
     
    const zipPattern = /^\d{6}$/;
    if (!zipPattern.test(zip)) {
    alert("Please enter a valid 6-digit ZIP code");
    return false;
  }

  const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Please enter a valid 10-digit mobile number");
      return false;
    }
  
    if (state === "") {
      alert("Please select a state");
      return false;
    }
  
    if (city === "") {
      alert("Please select a city");
      return false;
    }
    
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.");
        return false;
    }
  
    if (confirmPassword === "") {
      alert("Confirm password is required");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    const user = {
      email: email,
      password: password
    };
    localStorage.setItem('registeredUser', JSON.stringify(user));
  
    alert("User registered successfully!");
    window.location.href = "Login.html";
  }
  
 function calculateAge(dob) {
  const dobYear = new Date(dob).getFullYear();
  const currentYear = new Date().getFullYear();
  let age = currentYear - dobYear;
  return age;
}

>>>>>>> ebb9379fc499aa6a5636fd8a3911299159141bc7
  