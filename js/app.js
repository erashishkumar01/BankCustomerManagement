function showToast() {
    const toastEl = document.getElementById('actionToast');
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}