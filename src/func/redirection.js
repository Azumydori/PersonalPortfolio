document.addEventListener("DOMContentLoaded", function () {
  includeHTML();

  // Function to include HTML content
  function includeHTML() {
    var elements = document.querySelectorAll(
      "[include-html], [include-footer]"
    );
    elements.forEach(function (element) {
      var file =
        element.getAttribute("include-html") ||
        element.getAttribute("include-footer");
      if (file) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            element.innerHTML = this.responseText;
            element.removeAttribute("include-html");
            element.removeAttribute("include-footer");
            includeHTML(); // Recursively include any remaining HTML
            setupEventListeners(); // Setup event listeners after including HTML
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
      }
    });
  }

  function setupEventListeners() {
    const aboutMeLink = document.getElementById("aboutLink");
    if (aboutMeLink) {
      aboutMeLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "about.html";
      });
    }
  }
});
