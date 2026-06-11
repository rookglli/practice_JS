//! Лічильник кліків для кнопки Like
//! Контекст: На сторінці товару є кнопка лайку. Замовник хоче, щоб користувач одразу бачив, скільки разів на неї натиснули в межах поточного відкриття сторінки.
//! Базовий HTML:
//! <section class="task like-task">
//!   <h2>Лічильник лайків</h2>
//!   <button class="btn" type="button">Like</button>
//!   <p class="result">Likes: <span class="count">0</span></p>
//! </section>
//! Розширене ТЗ:
//!     • Після кожного кліку на кнопку значення всередині <span class="count"> має збільшуватись на 1.
//!     • Початково на сторінці повинно відображатись число 0.
//!     • Число змінюється лише в межах цього відкриття сторінки; після перезавантаження можна починати з нуля.
//!     • Жодних додаткових повідомлень виводити не потрібно — змінюється тільки число.

// const likeBtn = document.querySelector('.like-task .btn');
// const countEl = document.querySelector('.like-task .count');

// let likes = 0;

// likeBtn.addEventListener('click', () => {
//   likes += 1;
//   countEl.textContent = likes;
// });

//! 1 - отримай body елемент і виведи його в консоль;

const bodyEl = document.querySelector('body');
console.log(bodyEl);

//! 2 - отримай елемент id="title" і виведи його в консоль;

const titleEl = document.querySelector('#title');
console.log(titleEl);

//! 3 - отримай елемент class="list" і виведи його в консоль;

const listEl = document.querySelector(".list")
console.log(listEl)

//! 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll('[data-topic]');
console.log(topics);

//! 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstTopic = topics[0];
console.log(firstTopic);

//! 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastTopic = topics[topics.length - 1];
console.log(lastTopic);

//! 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const h1Neighbor = title.nextElementSibling;
console.log(h1Neighbor);

//! 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const h3Titles = document.querySelectorAll('h3');
console.log(h3Titles);

//! 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

h3Titles.forEach(title => {
  title.classList.add('active');
});

//! 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigationTopic = document.querySelector('[data-topic="navigation"]');
console.log(navigationTopic);

//! 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigationTopic.style.backgroundColor = 'yellow';

//! 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const navigationText = navigationTopic.querySelector('p');
navigationText.textContent = 'Я змінив тут текст!';

//! 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = 'manipulation';
const currentTopicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentTopicEl);

//! 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

currentTopicEl.style.backgroundColor = 'lightblue';

//! 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedTitle = document.querySelector('.completed');
console.log(completedTitle);

//! 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completedTitle.closest('li').remove();

//! 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const newText = document.createElement('p');
newText.textContent = "Об'єктна модель документа (Document Object Model)";
title.after(newText);

//! 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newListItem = document.createElement('li');

const newListTitle = document.createElement('h3');
newListTitle.textContent = 'Властивість innerHTML';

const newListText = document.createElement('p');
newListText.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

newListItem.append(newListTitle, newListText);
list.append(newListItem);

//! 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const markup = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
`;

list.insertAdjacentHTML('beforeend', markup);


//! 20 - очисти список

list.innerHTML = '';
