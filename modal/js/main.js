window.addEventListener('DOMContentLoaded', () => {
    
    let modalBtn = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.popup__close');

    modal(modalBtn, overlay, closeBtn);

    function modal(moreBtn, overlay, closeBtn) {

        modalBtn.addEventListener('click', (event) => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
});