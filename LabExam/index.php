<!DOCTYPE html>

<head>
    <title>Clinic Registration</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="signup-container">
        <h2>Clinic Patient Registration</h2>
        <form class="signup-form" onsubmit="return handleFormValidation()">
            <label for="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter Your name">
            <span class="error" id="nameError"></span>

            <label for="age">Age</label>
            <input type="text" id="age" placeholder="Enter Your age">
            <span class="error" id="ageError"></span>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter Your Phone Number">
            <span class="error" id="phoneError"></span>

            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter Your email">
            <span class="error" id="emailError"></span>

            <label for="insurance">Insurance Provider</label>
            <select id="insurance">
                <option value="select">Select Provider</option>
                <option value="commercial">Commercial</option>
                <option value="life">Life</option>
                <option value="group">Group</option>
                <option value="mutual">Mutual</option>
            </select>
            <span class="error" id="insuranceError"></span>

            <label for="policy">Insurance Policy No</label>
            <input type="text" id="policy" placeholder="Enter Your policy number">
            <span class="error" id="policyError"></span>

            <h3 class="section-heading">Additional Information</h3>

            <label for="uname">User Name</label>
            <input type="text" id="uname" placeholder="Enter Your Username">
            <span class="error" id="usernameError"></span>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter Your password">
            <span class="error" id="passwordError"></span>

            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Enter Your Confirmed password">
            <span class="error" id="confirmpasswordError"></span>

            <button type="submit">Register</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>

</html>