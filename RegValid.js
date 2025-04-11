document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".registration-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission if validation fails
        if (validation()) {
            alert("Registration successful!"); // Can be replaced with a custom success message
        }
    });

    // Add event listeners for real-time validation
    document.querySelectorAll(".registration-form input").forEach(input => {
        input.addEventListener("input", function () {
            let regex = getRegex(input.id);
            let errorMessage = getErrorMessage(input.id);
            validateField(input.id, regex, errorMessage);
        });
    });

    // Add event listener to clear validation messages on reset
    document.querySelector(".registration-form").addEventListener("reset", function () {
        document.querySelectorAll(".error-message").forEach(errorDiv => {
            errorDiv.innerHTML = "";
            errorDiv.style.opacity = "0";
        });
    });
});

function validation() {
    let isValid = true;

    isValid &= validateField("firstname", /^[A-Za-z]{2,}$/, "Enter a valid first name (at least 2 letters)", true);
    isValid &= validateField("lastname", /^[A-Za-z]{2,}$/, "Enter a valid last name (at least 2 letters)", true);
    isValid &= validateField("username", /^[A-Za-z0-9_]{4,}$/, "Username must be at least 4 characters long", true);
    isValid &= validateField("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address", true);
    isValid &= validateField("password", /^.{6,}$/, "Password must be at least 6 characters long", true);
    isValid &= validateConfirmPassword("password", "cpassword");
    isValid &= validateField("age", /^(1[8-9]|[2-9][0-9]|100)$/, "Age must be between 18 and 100", true);

    return !!isValid;
}

function validateField(id, regex, errorMessage, required = false) {
    let field = document.getElementById(id);
    let errorDiv = document.getElementById(id + "-error");
    let value = field.value.trim();
    
    if (!errorDiv) return false;
    errorDiv.style.position = "relative";
    errorDiv.style.left = "10px";
    errorDiv.style.top = "0";
    errorDiv.style.display = "inline-block";
    errorDiv.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    errorDiv.style.fontWeight = "bold";
    errorDiv.style.opacity = "0";
    
    if (required && !value) {
        errorDiv.innerHTML = "❌ This field is required";
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return false;
    }

    if (regex.test(value)) {
        errorDiv.innerHTML = "✔️";
        errorDiv.style.color = "green";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
    } else {
        errorDiv.innerHTML = `❌ ${errorMessage}`;
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
    }
    return regex.test(value);
}

function validateConfirmPassword(passwordId, confirmPasswordId) {
    let password = document.getElementById(passwordId).value;
    let confirmPassword = document.getElementById(confirmPasswordId).value;
    let errorDiv = document.getElementById(confirmPasswordId + "-error");
    
    if (!errorDiv) return false;
    errorDiv.style.position = "relative";
    errorDiv.style.left = "10px";
    errorDiv.style.top = "0";
    errorDiv.style.display = "inline-block";
    errorDiv.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    errorDiv.style.fontWeight = "bold";
    errorDiv.style.opacity = "0";
    
    if (!confirmPassword) {
        errorDiv.innerHTML = "❌ This field is required";
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return false;
    }

    if (password === confirmPassword && confirmPassword.length >= 6) {
        errorDiv.innerHTML = "✔️";
        errorDiv.style.color = "green";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return true;
    } else {
        errorDiv.innerHTML = "❌ Passwords do not match";
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".registration-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission if validation fails
        if (validation()) {
            alert("Registration successful!"); // Can be replaced with a custom success message
        }
    });

    // Add event listeners for real-time validation
    document.querySelectorAll(".registration-form input").forEach(input => {
        input.addEventListener("input", function () {
            let regex = getRegex(input.id);
            let errorMessage = getErrorMessage(input.id);
            validateField(input.id, regex, errorMessage);
        });
    });

    // Add event listener to clear validation messages on reset
    document.querySelector(".registration-form").addEventListener("reset", function () {
        document.querySelectorAll(".error-message").forEach(errorDiv => {
            errorDiv.innerHTML = "";
            errorDiv.style.opacity = "0";
        });
    });
});

function validation() {
    let isValid = true;

    isValid &= validateField("firstname", /^[A-Za-z]{2,}$/, "Enter a valid first name (at least 2 letters)", true);
    isValid &= validateField("lastname", /^[A-Za-z]{2,}$/, "Enter a valid last name (at least 2 letters)", true);
    isValid &= validateField("username", /^[A-Za-z0-9_]{4,}$/, "Username must be at least 4 characters long", true);
    isValid &= validateField("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address", true);
    isValid &= validateField("password", /^.{6,}$/, "Password must be at least 6 characters long", true);
    isValid &= validateConfirmPassword("password", "cpassword");
    isValid &= validateField("age", /^(1[8-9]|[2-9][0-9]|100)$/, "Age must be between 18 and 100", true);

    return !!isValid;
}

function validateField(id, regex, errorMessage, required = false) {
    let field = document.getElementById(id);
    let errorDiv = document.getElementById(id + "-error");
    let value = field.value.trim();
    
    if (!errorDiv) return false;
    errorDiv.style.position = "relative";
    errorDiv.style.left = "10px";
    errorDiv.style.top = "0";
    errorDiv.style.display = "inline-block";
    errorDiv.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    errorDiv.style.fontWeight = "bold";
    errorDiv.style.opacity = "0";
    
    if (required && !value) {
        errorDiv.innerHTML = "❌ This field is required";
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return false;
    }

    if (regex.test(value)) {
        errorDiv.innerHTML = "✔️";
        errorDiv.style.color = "green";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
    } else {
        errorDiv.innerHTML = `❌ ${errorMessage}`;
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
    }
    return regex.test(value);
}

function validateConfirmPassword(passwordId, confirmPasswordId) {
    let password = document.getElementById(passwordId).value;
    let confirmPassword = document.getElementById(confirmPasswordId).value;
    let errorDiv = document.getElementById(confirmPasswordId + "-error");
    
    if (!errorDiv) return false;
    errorDiv.style.position = "relative";
    errorDiv.style.left = "10px";
    errorDiv.style.top = "0";
    errorDiv.style.display = "inline-block";
    errorDiv.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    errorDiv.style.fontWeight = "bold";
    errorDiv.style.opacity = "0";
    
    if (!confirmPassword) {
        errorDiv.innerHTML = "❌ This field is required";
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return false;
    }

    if (password === confirmPassword && confirmPassword.length >= 6) {
        errorDiv.innerHTML = "✔️";
        errorDiv.style.color = "green";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return true;
    } else {
        errorDiv.innerHTML = "❌ Passwords do not match";
        errorDiv.style.color = "red";
        errorDiv.style.opacity = "1";
        errorDiv.style.transform = "scale(1)";
        return false;
    }
}

function getRegex(id) {
    const regexMap = {
        "firstname": /^[A-Za-z]{2,}$/,
        "lastname": /^[A-Za-z]{2,}$/,
        "username": /^[A-Za-z0-9_]{4,}$/,
        "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "password": /^.{6,}$/,
        "age": /^(1[8-9]|[2-9][0-9]|100)$/
    };
    return regexMap[id] || /.*/;
}

function getErrorMessage(id) {
    const errorMap = {
        "firstname": "Enter a valid first name (at least 2 letters)",
        "lastname": "Enter a valid last name (at least 2 letters)",
        "username": "Username must be at least 4 characters long",
        "email": "Enter a valid email address",
        "password": "Password must be at least 6 characters long",
        "age": "Age must be between 18 and 100"
    };
    return errorMap[id] || "Invalid input";
}
