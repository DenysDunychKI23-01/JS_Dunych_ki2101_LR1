const startBtn = document.getElementById('start-btn');
const studentsList = document.getElementById('students-list');

startBtn.addEventListener('click', () => {
    while (true) {
        const input = prompt("Введіть Прізвище та Ім'я студента (натисніть 'Скасувати' / 'Відміна' для завершення):");

        if (input === null) {
            break; 
        }

        if (input.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.trim();
            studentsList.appendChild(li);
        }
    }
});