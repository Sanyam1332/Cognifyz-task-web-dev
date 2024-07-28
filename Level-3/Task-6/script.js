const submit = document
  .querySelector(".formSubmit")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const container = document.querySelector(".container");
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const contactNo = document.getElementById("contact").value;
    const password = document.getElementById("password").value;
    const c_password = document.getElementById("c_password").value;
    const checkRadio = document.querySelector('input[name="gender"]:checked');

    const nameRegex = /^[A-Za-z ]{3,20}$/;
    const dobRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    const emailRegex =
      /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const addressRegex = /^[A-Za-z ]{3,20}$/;
    const pincodeRegex = /^[0-9]{6,6}$/;
    const contactRegex = /^[6-9][\d]{9}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}$/;
    const c_passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}$/;

    document
      .querySelectorAll(".error")
      .forEach((currElem) => (currElem.textContent = ""));
    let isValid = true;

    if (!nameRegex.test(name)) {
      document.getElementById("nameError").textContent = "Name is invalid!";
      isValid = false;
    }

    if (dob == null || dob == "" || !dobRegex.test(dob)) {
      document.getElementById("dobError").textContent =
        "Date of birth is invalid";
    }

    if (checkRadio == null) {
      document.getElementById("genderError").textContent =
        "Please select one of the above!";
    }

    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address!";
      isValid = false;
    }

    if (!addressRegex.test(address)) {
      document.getElementById("addressError").textContent =
        "Please enter a valid address!";
      isValid = false;
    }

    if (!pincodeRegex.test(pincode)) {
      document.getElementById("pincodeError").textContent =
        "Please enter a valid pincode (6 digits)!";
      isValid = false;
    }

    if (!contactRegex.test(contactNo)) {
      document.getElementById("contactError").textContent =
        "Please enter a valid contact no. (10 digits)!";
      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "Your password must be at least 8 characters long, contain at least one special character, one number and have a mixture of uppercase and lowercase letters!";
      isValid = false;
    }

    if (!c_passwordRegex.test(c_password)) {
      document.getElementById("c_passwordError").textContent =
        "Invalid password!";
      isValid = false;
    }
    if (password !== c_password) {
      document.getElementById("c_passwordError").textContent =
        "Password mismatched!";
    }

    if (isValid) {
      container.innerHTML = "<h1>You sign up successfully</h1>";
    }
  });
