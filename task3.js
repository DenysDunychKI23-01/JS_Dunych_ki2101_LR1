const lastName = "Дунич";

const showBlocksBtn = document.getElementById('show-blocks-btn');
const lettersContainer = document.getElementById('letters');

showBlocksBtn.addEventListener('click', () => {
    if (lettersContainer.children.length > 0) {
        lettersContainer.innerHTML = '';
        showBlocksBtn.textContent = 'Показати блоки';
    } else {
        for (const char of lastName) {
            const block = document.createElement('div');
            block.className = 'letter-box';
            block.textContent = char;

            block.addEventListener('mouseenter', () => {
                alert(`Це літера [ ${char} ]`);
            });

            lettersContainer.appendChild(block);
        }
        showBlocksBtn.textContent = 'Очистити блоки';
    }
});