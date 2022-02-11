document.getElementById('login-submit').addEventListener('click', function() {
    // geting user email
    const mailInput = document.getElementById('login-mail');
    const mailInputValue = mailInput.value;
    // getting user password
    const mailPassword = document.getElementById('login-password');
    const mailPasswordValue = mailPassword.value;
    // setting user
    let userMail = "poisa@taka.com";
    let userPass = "12345";
    // login user
    if(mailInputValue == userMail && mailPasswordValue == userPass) {
        window.location.href = "bank.html";
    } else {
        alert("wrong email or password");
    }
});
