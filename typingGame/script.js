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

document.getElementById('start').addEventListener('click', () => {
    //получаем случайную цитату
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    //перевод цитаты в массив слов
    words = quote.split(' ');
    //сбрасываем индекс слова
    wordIndex = 0;

    //Обновление интерфейса
    //Создание массива элементов span чтобы создать класс
    const spanWords = words.map(function(word) { return `<span> ${word} </span>`});
    // конвертивуем массив в строку и задаем innerHTML при отображении ковычек
    quoteElement.innerHTML = spanWords.join('');
    //выделяем первое слово
    quoteElement.childNodes[0].className = 'highlight';
    //удаляем все предыдущие сообщения 
    messageElement.innerHTML = '';

    //настройка текстового поля
    // очистка текстового поля
    typedValueElement.value = '';
    //установка курсора в начало
    typedValueElement.focus();
    // установить обработчик событий 

    //запустить таймер
    startTime = new Date().getTime();
});

//логика ввода

typedValueElement.addEventListener('input', () => {
    // получение текущего слова
    const currentWord = words[wordIndex];
    // получение текущего значения 
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length -1) {
        // конец предложения
        // Вывод успеха
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Congratulations! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerHTML = message;
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
});


