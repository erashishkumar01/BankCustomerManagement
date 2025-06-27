function showToast() {
    var toastEl = document.getElementById('actionToast');
    var toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}

// Trigger animations on scroll
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
            }
        });
    });

    document.querySelectorAll('.animate-item').forEach(item => {
        observer.observe(item);
    });
});