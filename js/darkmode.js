const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const lightIcon_gototop = document.getElementById("light-icon-goto");
const darkIcon_gototop = document.getElementById("dark-icon-goto");

const catSun = document.getElementById("sun");
const catCloud = document.getElementById("cloud");
const catMoon = document.getElementById("moon");
const catStars = document.getElementById("star");

// const contact_light = document.getElementById("svg-light");
// const contact_dark = document.getElementById("svg-dark");

// Check if dark mode is preferred
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let darkMode = darkModeMediaQuery.matches;

// Set dark-mode class on body if darkMode is true and pick icon
if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("style","display:none;");
  darkIcon_gototop.setAttribute("style","display:none;");
  catSun.setAttribute("style","display:none;");
  catCloud.setAttribute("style","display:none;");
  // contact_light.setAttribute("style","display:none;");
} else {
  lightIcon.setAttribute("style","display:none;");
  lightIcon_gototop.setAttribute("style","display:none;");
  catMoon.setAttribute("style","display:none;");
  catStars.setAttribute("style","display:none;")
  // contact_dark.setAttribute("style","display:none;");
}

// Toggle dark mode on button click
function toggleDarkMode() {
    // Toggle darkMode variable
    darkMode = !darkMode;
  
    // Toggle dark-mode class on body
    document.body.classList.toggle("dark-mode");
  
    // Toggle light and dark icons
    if (darkMode) {
      // In Dark mode, show sun icon and hide moon icon
      lightIcon.setAttribute("style","display:;");
      darkIcon.setAttribute("style","display:none;");
      lightIcon_gototop.setAttribute("style","display:;");
      darkIcon_gototop.setAttribute("style","display:none;");
      
      // In Dark mode, shows Moon and Stars in the Cat's window
      catMoon.setAttribute("style","display:;");
      catStars.setAttribute("style","display:;")
      catSun.setAttribute("style","display:none;");
      catCloud.setAttribute("style","display:none;");
      
      // Contact Illustration
      // contact_dark.setAttribute("style","display:;");
      // contact_light.setAttribute("style","display:none;");
    } else {
      // In Light mode, show moon icon and hide sun icon
      lightIcon.setAttribute("style","display:none;");
      darkIcon.setAttribute("style","display:;");
      lightIcon_gototop.setAttribute("style","display:none;");
      darkIcon_gototop.setAttribute("style","display:;");
      
      // In Light mode, shows Sun and Cloud in the Cat's window
      catSun.setAttribute("style","display:;");
      catCloud.setAttribute("style","display:;");
      catMoon.setAttribute("style","display:none;");
      catStars.setAttribute("style","display:none;")
      
      // Contact Illustration
      // contact_dark.setAttribute("style","display:none;");
      // contact_light.setAttribute("style","display:;");
    }
  }