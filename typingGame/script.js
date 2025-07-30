//цитаты
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

//слова для игры
let words = [];
let wordIndex = 0;
//время начала игры
let startTime = Date.now();
//элементы страницы
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
typedValueElement.disabled = true; // поле недоступно до старта
typedValueElement.style.display = 'none'; // Скрыть поле ввода изначально

const startBtn = document.getElementById('start');

// Переносим логику старта игры в отдельную функцию
function startGameHandler() {
    //получаем случайную цитату
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;

    //Обновление интерфейса
    const spanWords = words.map(function(word) { return `<span> ${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerHTML = '';

    //настройка текстового поля
    typedValueElement.value = '';
    typedValueElement.disabled = false;
    typedValueElement.style.display = 'inline-block'; // Показать поле ввода
    typedValueElement.focus();
    typedValueElement.removeEventListener('input', onInput);
    typedValueElement.addEventListener('input', onInput);

    // Меняем кнопку на "Завершить"
    startBtn.textContent = 'Завершить';
    startBtn.removeEventListener('click', startGameHandler);
    startBtn.addEventListener('click', stopGameHandler);

    startTime = new Date().getTime();
}

// Функция остановки игры
function stopGameHandler() {
    typedValueElement.disabled = true;
    typedValueElement.style.display = 'none'; // Скрыть поле ввода
    startBtn.textContent = 'Старт'; // Вернуть текст кнопки
    startBtn.removeEventListener('click', stopGameHandler);
    startBtn.addEventListener('click', startGameHandler);
    messageElement.innerHTML = 'Игра остановлена.';
}

// Назначаем обработчик на кнопку при загрузке
startBtn.removeEventListener('click', stopGameHandler);
startBtn.addEventListener('click', startGameHandler);

function saveRecord(seconds) {
    let records = JSON.parse(localStorage.getItem('typingRecords') || '[]');
    records.push(seconds);
    records.sort((a, b) => a - b); // сортировка по возрастанию
    records = records.slice(0, 5); // только топ-5
    localStorage.setItem('typingRecords', JSON.stringify(records));
    showRecords();
}

function showRecords() {
    const recordsList = document.getElementById('records-list');
    let records = JSON.parse(localStorage.getItem('typingRecords') || '[]');
    recordsList.innerHTML = '';
    if (records.length === 0) {
        recordsList.innerHTML = '<li>Нет рекордов</li>';
    } else {
        records.forEach((rec, idx) => {
            recordsList.innerHTML += `<li>${idx+1}) ${rec.toFixed(2)} сек.</li>`;
        });
    }
}

// Показываем рекорды при загрузке страницы
showRecords();

function showSuccessModal(message) {
    const modal = document.getElementById('success-modal');
    const modalMsg = document.getElementById('modal-message');
    modalMsg.textContent = message;
    modal.style.display = 'flex';
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('success-modal').style.display = 'none';
});

// логика ввода
function onInput() {
    // получение текущего слова
    const currentWord = words[wordIndex];
    // получение текущего значения 
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length -1) {
        // конец предложения
        const elapsedTime = new Date().getTime() - startTime;
        const seconds = elapsedTime / 1000;
        const message = `Поздравляем! Вы завершили за ${seconds.toFixed(2)} секунд.`;
        messageElement.innerHTML = message;
        // Сохраняем рекорд
        saveRecord(seconds);
        // Отключить обработчик ввода
        typedValueElement.removeEventListener('input', onInput);
        typedValueElement.disabled = true;
        typedValueElement.style.display = 'none'; // Скрыть поле ввода
        // Показать модальное окно
        showSuccessModal(message);
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        //конец слова
        // очистка typedValueElement для нового слова
        typedValueElement.value = '';
        // перемещение на новое слово
        wordIndex++;
        //сбросить имя класса для всех элементов в цитате
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        //выделить новое слово
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        //в данном времени правильно    
        // выделить следующее слово
        typedValueElement.className = '';
    } else {
        //состояние ошибки
        typedValueElement.className = 'error';
    }
}


