function showToast(message, icon) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    const toastIcon = document.getElementById("toast-icon");
    toastText.textContent = message;
    toastIcon.textContent = icon;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

function updateConnectionStatus() {
    const isOnline = navigator.onLine;
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button, input[type="submit"]');
    const mediaElements = document.querySelectorAll('audio, video');
    
    if (isOnline) {
        links.forEach(link => link.classList.remove('disabled'));
        buttons.forEach(button => button.disabled = false);
        mediaElements.forEach(media => media.play());
        showToast("Conexión reestablecida", "✅");
    } else {
        links.forEach(link => link.classList.add('disabled'));
        buttons.forEach(button => button.disabled = true);
        mediaElements.forEach(media => media.pause());
        showToast("Sin conexión", "⚠");
    }
}

window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);