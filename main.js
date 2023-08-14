const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i'); // Corrected selector
const mobileVersion = document.querySelector('.mobile-version');

toggleBtn.onclick = function () {
    mobileVersion.classList.toggle('active');

    const isActive = mobileVersion.classList.contains('active');
    toggleBtnIcon.classList = isActive
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
}
