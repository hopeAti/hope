// public/app.js

document.addEventListener("DOMContentLoaded", function () {
  // Particle animation setup
  particlesJS("particles-js", {
    particles: {
      // Customize particle settings if needed
    },
  });

  // You can add other JavaScript functionalities here

  // For example, if you want to perform form validation
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      // Perform login form validation
      // You can prevent the form submission if needed
    });
  }

  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      // Perform register form validation
      // You can prevent the form submission if needed
    });
  }

  // Add other JavaScript functionalities as required
});
