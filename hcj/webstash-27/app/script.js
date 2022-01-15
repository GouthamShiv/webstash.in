const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Alert One',
    'Alert Two',
    'Alert Three',
    'Alert Four',
];

const types = [
    'success',
    'error',
    'info',
    'warning',
];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(type ? type : getType());
    notification.innerText = message ? message : getMessage();
    toasts.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function getMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getType() {
    return types[Math.floor(Math.random() * types.length)];
}