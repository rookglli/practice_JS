//! Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// const { forwardRef } = require("react");

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];

//   return [lastIndex, lastElement];
// }

//! Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];
//   const firstElement = array[0];
//   return [firstElement, lastElement];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

//! Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const transformArray = array.join('');
//   return transformArray.length;
// }

//! Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

//! Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

//! Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     const calculateWords = words.length;
//     return calculateWords * pricePerWord;
// }

//  console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

//! Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

//! firstTwoEls - масив із перших двох елементів
//! nonExtremeEls - масив з усіх елементів, крім першого та останнього
//! lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);

//! Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

//! Функція getSlice(array, value) приймає два параметра:

//! array - масив довільних елементів
//! value - значення елемента масиву для пошуку
//! Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

//! порожній масив, якщо в array немає елемента зі значенням value
//! підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const searchValue = array.indexOf(value);
//   if (searchValue === -1) {
//     return [];
//   }
//   return array.slice(0, searchValue + 1);
// }

//! Функція createArrayOfNumbers(min, max) приймає два параметра:

//! min - ціле число, з якого починаються обчислення
//! max - ціле число, до якого включно триватимуть обчислення
//! Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

//! Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order [i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//! Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(getEvenNumbers(2, 5));

//! Функція checkStorage(storage, item) приймає два параметри:

//! storage - масив рядків, що описує доступні товари на складі
//! item - рядок з назвою товара, наявність якого потрібно перевірити
//! Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

//! рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
//! рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
//! Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   const lowerItem = item.toLowerCase();
//   if (storage.includes(lowerItem)) {
//     return `${lowerItem} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));

//! Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

//! Доповни код функції:

//! Створи порожній масив для зберігання нового масиву.
//! Використай цикл for для ітерації кожного елемента у array1.
//! У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
//! Якщо він існує, то додай елемент до нового масиву.
//! Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let arrayNew = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     let element = array1[i];

//     if (array2.includes(element)) {
//       arrayNew.push(element);
//     }
//   }

//   return arrayNew;
// }

//! Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const item of order) {
//     sum += item;
//   };
//   return sum;
// }

//! Дано речення, порахувати кількість слів

// function countWords(sentence) {
//   return sentence.split(/\s+/).length;
// }

// console.log(countWords('Дано речення, порахувати кількість слів'));

//! Напиши функцію unique(arr), яка повертає новий масив без дублікатів. Наприклад: [1, 2, 2, 3, 3, 3] → [1, 2, 3].

// function unique(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

//! // Напишіть функцію checkLogin(array), яка:
//! Приймає масив логінів як аргумент.
//! Запитує ім'я користувача через prompt.
//! Перевіряє, чи є введене ім'я у переданому масиві.
//! Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
//! Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const userName = prompt("Введіть ім'я");

//   if (array.includes(userName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert('User not found');
//   }
// }
// checkLogin(logins);

//! Напишіть функцію, яка сумуватиме сусідні числа
//! і пушитиме їх в новий масив.

//! const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//! уточнення: складати необхідно перше число з другим, потім друге - з третім,
//! третє - з четвертим і так до кінця.
//! В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumNeighbors(array) {
//   const newArray = [];

//   for (let i = 0; i < array.length - 1; i += 1) {
//     newArray.push(array[i] + array[i + 1]);
//   }

//   return newArray;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//! Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//     const args = Array.from(arguments).toReversed();
//     return args;
// }

// console.log(createReversedArray(12, 85, 37, 4));

//! Напишіть функцію caclculateAverage(),
//! яка приймає довільну кількість
//! аргументів і повертає їхнє середнє значення.
//! Додайте перевірку, що аргументи - це числа.

// function calculateAverage() {
//   let total = 0;
//   let count = 0;

//   for (const arg of arguments) {
//     if (typeof arg === 'number') {
//       total += arg;
//       count += 1;
//     }
//   }

//   if (count === 0) {
//     return 'Немає чисел';
//   }

//   return total / count;
// }

//! Функція calculateTax(amount, taxRate) оголошує два параметри:

//! amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
//! taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
//! Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(200, 0.3));

