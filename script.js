document.querySelectorAll('.inner-div, th').forEach(element => {
    element.addEventListener('mouseover', function(event) {
        const message = this.getAttribute('data-message');
        const messageBox = document.getElementById('message-box');
        messageBox.innerText = message;
        messageBox.style.display = 'block';
        messageBox.style.left = `${event.pageX}px`;
        messageBox.style.top = `${event.pageY}px`;
    });

    element.addEventListener('mouseout', function() {
        const messageBox = document.getElementById('message-box');
        messageBox.style.display = 'none';
    });
});
