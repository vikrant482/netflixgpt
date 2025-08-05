// validate.js

export const validate = (email, password) => {
    const errors = {};

    // Email validation
    if (!email) {
        errors.email = "Email is required.";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email address.";
        }
    }

    // Password validation
    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 4 || password.length > 60) {
        errors.password = "Password must be between 4 and 60 characters.";
    }

    return errors;
};
