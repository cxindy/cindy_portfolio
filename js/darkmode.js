const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// Check if dark mode is preferred
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: light)");
let darkMode = darkModeMediaQuery.matches;

// Set dark-mode class on body if darkMode is true and pick icon
if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("style","display:none;");
} else {
  lightIcon.setAttribute("style","display:none;");
}

// Toggle dark mode on button click
function toggleDarkMode() {
    // Toggle darkMode variable
    darkMode = !darkMode;
  
    // Toggle dark-mode class on body
    document.body.classList.toggle("dark-mode");
  
    // Toggle light and dark icons
    if (darkMode) {
      lightIcon.setAttribute("style","display:;");
      darkIcon.setAttribute("style","display:none;");
    } else {
      lightIcon.setAttribute("style","display:none;");
      darkIcon.setAttribute("style","display:;");
    }
  }