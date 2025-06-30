window.setTheme = function (theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

window.toggleSidebar = function () {
    document.getElementById('sidebar').classList.toggle('show');
};

window.showToast = function () {
    var toast = new bootstrap.Toast(document.getElementById('actionToast'));
    toast.show();
};

// Apply saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
};