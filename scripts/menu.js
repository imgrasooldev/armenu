document.querySelectorAll('a-marker').forEach(marker => {
    marker.addEventListener('click', function() {
        alert("You selected a dish!");
    });
});
