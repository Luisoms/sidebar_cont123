const btnToggle = document.querySelector('#but');

btnToggle.addEventListener('click', function() {
    document.getElementById('bar').classList.toggle('active');
    document.getElementById('arrow').classList.toggle('active');
});