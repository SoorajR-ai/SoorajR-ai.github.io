document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('mouseover', function() {
        const details = document.getElementById('details');
        details.innerText = this.getAttribute('data-details');
        details.style.opacity = '1';
    });

    bubble.addEventListener('mouseout', function() {
        const details = document.getElementById('details');
        details.style.opacity = '0';
    });
});
