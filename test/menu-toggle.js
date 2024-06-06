
function toggleMenu() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
  document.addEventListener('click', function(event) {
    var isClickInside = dropdownContent.contains(event.target) || event.target.classList.contains('menu-toggle');

    if (!isClickInside) {
      dropdownContent.classList.remove("show");
    }
  });
}