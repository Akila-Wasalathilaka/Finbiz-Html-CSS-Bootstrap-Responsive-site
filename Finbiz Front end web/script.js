window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var body = document.querySelector('body');
    if (width < 600) {
        body.style.fontSize = '12px';
    } else if (width < 1200) {
        body.style.fontSize = '16px';
    } else {
        body.style.fontSize = '20px';
    }

    var header = document.querySelector('header');
    if (height < 400) {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }
});

window.dispatchEvent(new Event('resize'));