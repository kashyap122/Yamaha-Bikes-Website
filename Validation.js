const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let userData = [];

function validation() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (email == "" || !email.match(validRegex)) {

        document.getElementById("labelforVal").innerHTML = "Invalid email address!";
        console.log("Invalid email address!");
    }
    else if (password == "") {
        document.getElementById("labelforVal").innerHTML = "Enter Password";
        console.log("Enter Password");
    }
    else {

        let dummyArray = JSON.parse(sessionStorage.getItem("userData"));
        console.log(dummyArray);

        let userData = dummyArray.filter(function (e) {

            return e.EmailAddress == email && e.Password == password;
        
        });
        
        console.log(userData);

        document.getElementById("labelforVal").innerHTML = "login succesfully";
        console.log("login Succesfully");


    }
}

function registration() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (firstName == "") {
        document.getElementById("labelforVal").innerHTML = "Enter Fist Name";
        console.log("Enter First Name");
    }
    else if (lastName == "") {
        document.getElementById("labelforVal").innerHTML = "Enter Last Name";
        document.getElementById("labelforVal").focus();
        console.log("Enter Last Name");
    }

    else if (email == "" || !email.match(validRegex)) {
        document.getElementById("labelforVal").innerHTML = "Enter valid Email";
        console.log("Email is Invalid");
    }

    else if (password == "") {
        document.getElementById("labelforVal").innerHTML = "Enter password";
        console.log("Password is Invalid");
    }

    else if (confirmPassword != password) {
        document.getElementById("labelforVal").innerHTML = "Confirm password is not same as password";
        console.log("Confirm Password is not same as Password");
    }
    else {
        let dummyArray = JSON.parse(sessionStorage.getItem("userData"));
        if (dummyArray === null) {
            dummyArray = [];
        }
        dummyArray.push(
            { FirstName: firstName, LastName: lastName, EmailAddress: email, Password: password, ConfirmPassword: confirmPassword }
        );
        console.log(dummyArray);
        sessionStorage.setItem("userData", JSON.stringify(dummyArray));
        document.getElementById("labelforVal").innerHTML = "Registered Succesfully";
    }
}