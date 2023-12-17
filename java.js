
document.querySelector('form').addEventListener('submit', function(event) {
    var isValid = true;
    this.querySelectorAll('input[type="text"], textarea').forEach(function(input) {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });
    if (!isValid) {
        event.preventDefault();
    }
});


document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        this.querySelectorAll('a').forEach(function(link) {
            link.classList.remove('selected');
        });
        event.target.classList.add('selected');
    }
});


window.addEventListener('load', function() {
    document.querySelector('main').style.transition = 'opacity 2s';
    document.querySelector('main').style.opacity = '1';
});


document.querySelector('#dark-mode-switch').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    document.querySelector('nav').classList.toggle('dark-mode', this.checked);
    document.querySelector('form').classList.toggle('dark-mode', this.checked);
});
