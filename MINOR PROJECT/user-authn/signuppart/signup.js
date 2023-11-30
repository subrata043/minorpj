

function validateForm() {
    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one symbol, one number, one uppercase letter, one lowercase letter, and be at least 8 characters long.");
        return false;
    }

    return true;
}
