// Function to set the theme (adds data-theme attribute to <html> and saves to localStorage)
const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme); // Set theme attribute
    localStorage.setItem("theme", theme); // Store selected theme
};

// Function to toggle between light and dark themes
const toggleTheme = ()  => {
    const current = document.documentElement.getAttribute("data-theme"); // Get current theme
    setTheme(current === "dark" ? "light" : "dark"); // Toggle and set new theme
};

// Run after the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme"); // Try getting user's saved theme
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Check system preference

    // Use saved theme if available, else fallback to system preference
    setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
});

  // Immediately apply saved theme (or system default) before page renders
  const theme = localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  // Set the data-theme attribute early to prevent FOUC (Flash Of Unstyled Content)
  document.documentElement.setAttribute("data-theme", theme);


/* ZOOM SLIDER */
  const slider = document.getElementById("zoomSlider");
  const zoomWrapper = document.getElementById("zoomWrapper");

  slider.addEventListener("input", (e) => {
    const zoom = e.target.value / 100;
    zoomWrapper.style.transform = `scale(${zoom})`;
    zoomWrapper.style.transformOrigin = "top center";
  });


