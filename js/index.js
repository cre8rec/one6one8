var toggleDarkMode = () => {
    var body = document.getElementById('body');
    var currentClass = body.className;
    body.className = currentClass == 'dark-mode' ? 'light-mode' : 'dark-mode';
}
var fixed = document.getElementById('fixed');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);