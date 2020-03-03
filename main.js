const btnToggle = document.querySelector('#but');

btnToggle.addEventListener('click', function() {
    document.getElementById('bar').classList.toggle('active');
    document.getElementById('but').classList.toggle('active');
    document.getElementById('footer').classList.toggle('active');
    document.getElementById('cont').classList.toggle('active');
});