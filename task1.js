const firstName = "Денис";
const nameList = document.getElementById('name-list');

for (const char of firstName) {
    const li = document.createElement('li');
    li.textContent = char;
    
    li.addEventListener('mouseenter', () => {
        alert(`Літера імені: ${char}`);
    });

    nameList.appendChild(li);
}