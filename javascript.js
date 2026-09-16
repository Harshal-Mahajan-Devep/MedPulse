// Theme Toggle Script
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");

// Check saved theme preference from LocalStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

// Toggle Theme on Button Click
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  let theme = "dark";

  if (document.body.classList.contains("light-mode")) {
    theme = "light";
    themeIcon.classList.replace("fa-sun", "fa-moon"); // Change Icon to Moon
  } else {
    themeIcon.classList.replace("fa-moon", "fa-sun"); // Change Icon to Sun
  }

  // Save Preference
  localStorage.setItem("theme", theme);
});
