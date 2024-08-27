/* The design was taken from https://uidesigndaily.com/posts/sketch-modal-discount-day-1061 */

const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const close = document.getElementById('close');


// Event listeners
btn.addEventListener('click', () => {
    modal.style.display = 'inline-block';
    modal.className = 'modal animate__animated animate__bounceIn';
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }

})

