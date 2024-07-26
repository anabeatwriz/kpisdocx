document.addEventListener('DOMContentLoaded', () => {
    const innerDivs = document.querySelectorAll('.inner-div');
    const messageBox = document.getElementById('message-box');

    innerDivs.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            const message = div.getAttribute('data-message');
            messageBox.style.display = 'block';
            messageBox.textContent = message;
            messageBox.style.top = `${event.clientY + 10}px`;
            messageBox.style.left = `${event.clientX + 10}px`;
        });

        div.addEventListener('mouseout', () => {
            messageBox.style.display = 'none';
            messageBox.textContent = '';
        });
    });
});
