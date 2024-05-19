const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        const msg = input.value;
        appendSentMessage(msg); // Display sent message
        socket.emit('chat message', msg); // Emit message to server
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    appendReceivedMessage(msg); // Display received message
});

function appendSentMessage(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    item.classList.add('sent'); // Add class to indicate sent message
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Scroll to bottom
}

function appendReceivedMessage(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    item.classList.add('received'); // Add class to indicate received message
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Scroll to bottom
}
