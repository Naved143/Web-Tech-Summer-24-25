function handleFormValidation() {
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const insurance = document.getElementById("insurance");
  const policy = document.getElementById("policy");
  const uname = document.getElementById("uname");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const nameError = document.getElementById("nameError");
  const ageError = document.getElementById("ageError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const insuranceError = document.getElementById("insuranceError");
  const policyError = document.getElementById("policyError");

  const usernameError = document.getElementById("usernameError");

  const passwordError = document.getElementById("password");

  const confirmpasswordError = document.getElementById("confirmpasswordError");

  [
    name,
    age,
    phone,
    email,
    insurance,
    policy,
    uname,
    password,
    confirmPassword,
  ].forEach((el) => el.classList.remove("error-border"));

  [
    nameError,
    ageError,
    phoneError,
    emailError,
    insuranceError,
    policyError,
    usernameError,
    passwordError,
    confirmpasswordError,
  ].forEach((error) => (error.textContent = ""));

  let isValid = true;

  const nameRegex = /^[A-Za-z\s\-]+$/;
  if (!name.value.trim()) {
    nameError.textContent = "Full name is required.";
    name.classList.add("error-Border");
    isValid = false;
  } else if (!nameRegex.test(name.value.trim())) {
    nameError.textContent = "Only letters, spaces, and hyphens allowed.";
    name.classList.add("error-Border");
    isValid = false;
  }

  if (!age.value.trim()) {
    ageError.textContent = "Age is required.";
    age.classList.add("error-Border");
    isValid = false;
  } else if (isNaN(age.value) || parseInt(age.value) < 18) {
    ageError.textContent = "You must be at least 18 years old.";
    age.classList.add("error-Border");
    isValid = false;
  }

  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (!phone.value.trim()) {
    phoneError.textContent = "Phone number is required.";
    phone.classList.add("error-Border");
    isValid = false;
  } else if (!phoneRegex.test(phone.value.trim())) {
    phoneError.textContent = "Format: (123) 456-7890.";
    phone.classList.add("error-Border");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    email.classList.add("error-Border");
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Invalid email format.";
    email.classList.add("error-Border");
    isValid = false;
  }

  if (insurance.value === "select") {
    insuranceError.textContent = "Please select a provider.";
    insurance.classList.add("error-Border");
    isValid = false;
  }

  const policyRegex = /^[A-Za-z0-9]{10}$/;
  if (!policy.value.trim()) {
    policyError.textContent = "Policy number is required.";
    policy.classList.add("error-Border");
    isValid = false;
  } else if (!policyRegex.test(policy.value.trim())) {
    policyError.textContent = "Must be exactly 10 alphanumeric characters.";
    policy.classList.add("error-Border");
    isValid = false;
  }

  if (!uname.value.trim()) {
    usernameError.textContent = "Username is required.";
    uname.classList.add("error-Border");
    isValid = false;
  } else if (uname.value.trim().length <= 5) {
    usernameError.textContent = "Must be more than 5 characters.";
    uname.classList.add("error-Border");
    isValid = false;
  }

  if (!password.value) {
    passwordError.textContent = "Password is required.";
    password.classList.add("error-Border");
    isValid = false;
  } else if (password.value.length < 8) {
    passwordError.textContent = "Must be at least 8 characters.";
    password.classList.add("error-Border");
    isValid = false;
  }

  if (!confirmPassword.value) {
    confirmpasswordError.textContent = "Please confirm your password.";
    confirmPassword.classList.add("error-Border");
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmpasswordError.textContent = "Passwords do not match.";
    confirmPassword.classList.add("error-Border");
    isValid = false;
  }

  if (isValid) {
    alert("Successfully Registered!!")
  }

  return isValid;
}
