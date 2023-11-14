// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Include HTML content
  includeHTML();

  // Function to include HTML content
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements with the name attribute */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("include-html");
            includeHTML();
            setupEventListeners(); // Setup event listeners after including HTML
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function */
        return;
      }
    }
  }

  // Function to set up event listeners after including HTML
  function setupEventListeners() {
    // Get the "About me" link by its id
    const aboutMeLink = document.getElementById("aboutLink");

    // Add a click event listener to the link
    aboutMeLink.addEventListener("click", function (event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Redirect to the about.html page
      window.location.href = "about.html";
    });
  }
});
