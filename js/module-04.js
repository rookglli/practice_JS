//! Напишіть скрипт, який для об'єкту user, послідовно:
//! 1 - додасть поле mood зі значенням 'happy',
//! 2 - замінить hobby на 'skydiving',
//! 3 - замінить значення premium на false,
//! 4 - виведе зміст об'єкта user у форматі
//! '<ключ>:<значення>' використовуючи Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// // 1. Додаємо нове поле mood
// user.mood = 'happy';

// // 2. Замінюємо значення hobby
// user.hobby = 'skydiving';

// // 3. Замінюємо значення premium
// user.premium = false;

// // 4. Отримуємо масив ключів об'єкта
// const keys = Object.keys(user);

//! Є об'єкт, в якому зберігаються зарплати команди
//! Напишіть код для додавання усіх зарплат та
//! збережіть його результат в змінній sum.
//! Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// const values = Object.values(salaries);

// for (const salary of values) {
//   sum += salary;
// }

// console.log(sum); // 1730

//! Створіть об'єкт calculator з наступними методами:
//! read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
//! sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
//! mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
//! винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

//! Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
//! методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },

//   sum() {
//     if (!this.exist()) {
//       return 'No such propeties';
//     }

//     return this.a + this.b;
//   },

//   mult() {
//     if (!this.exist()) {
//       return 'No such propeties';
//     }

//     return this.a * this.b;
//   },
// };

//! Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

//! Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

//! Властивість best має містити найбільше число з масиву scores
//! Властивість worst має містити найменше число з масиву scores.
//! Використовуй оператор (...spread) і методи Math.max() і Math.min().

// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }

//! У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розпилення, доповни код таким чином, щоб:

//! У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
//! У змінній bestScore був найвищий загальний бал.
//! У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//! Створи масив, у який потраплять тільки ті товари, в назві яких є слово "iPhone".
// const products = [
//   { name: 'Samsung J5 2017', screen: 5.2, price: 5400, weight: 160 },
//   { name: 'iPhone X', screen: 5.8, price: 25000, weight: 170 },
//   { name: 'Xiaomi Mi 4', screen: 5.5, price: 4999, weight: 150 },
//   { name: 'Nokia 3310 2018', screen: 2.4, price: 999, weight: 60 },
//   { name: 'iPhone 7', screen: 4.7, price: 9999, weight: 140 },
// ];

// function filterProductsByName(products, productName) {
//   const filterProduct = [];
//   for (const product of products) {
//     if (product.name.includes(productName)) {
//       filterProduct.push(product);
//     }
//   }
//   return filterProduct;
// }

// console.log(filterProductsByName(products, 'iPhone'));

//! Кошик: додати товар, порахувати суму, знайти товар
//! Дано
// const cart = {
//   owner: 'Anna',
//   items: [
//     { name: 'phone', price: 12000, quantity: 1 },
//     { name: 'case', price: 500, quantity: 2 },
//   ],
// };
// Потрібно

// Додати в об’єкт cart методи:

// getItems()
// має повертати масив товарів

// addItem(product)
// має додавати новий товар у items

// getTotalPrice()
// має повертати загальну суму з урахуванням price * quantity

// findItem(productName)
//! має повертати об’єкт товару з таким ім’ям або null, якщо товар не знайдено

// const cart = {
//   owner: 'Anna',

//   items: [
//     { name: 'phone', price: 12000, quantity: 1 },
//     { name: 'case', price: 500, quantity: 2 },
//   ],

//   // повертає масив товарів
//   getItems() {
//     return this.items;
//   },

//   // додає новий товар
//   addItem(product) {
//     this.items.push(product);
//   },

//   // рахує загальну вартість
//   getTotalPrice() {
//     let total = 0;

//     for (const item of this.items) {
//       total += item.price * item.quantity;
//     }

//     return total;
//   },

//   // шукає товар за назвою
//   findItem(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         return item;
//       }
//     }

//     return null;
//   },
// };

//! Команда розробників: сума зарплат і додавання нового учасника
//! Допиши методи:

//! getTotalSalary() має повертати суму зарплат усіх учасників
//! addMember(newMember) має додавати нового учасника в масив members
//! const team = {
//!   members: [
//!     { name: 'Anna', role: 'designer', salary: 1500 },
//!     { name: 'John', role: 'developer', salary: 2500 },
//!     { name: 'Kate', role: 'manager', salary: 2000 },
//!   ],}


// const team = {
//   members: [
//     { name: 'Anna', role: 'designer', salary: 1500 },
//     { name: 'John', role: 'developer', salary: 2500 },
//     { name: 'Kate', role: 'manager', salary: 2000 },
//   ],

//   getTotalSalary() {
//     let total = 0;

//     for (const member of this.members) {
//       total += member.salary;
//     }

//     return total;
//   },

//   addMember(newMember) {
//     this.members.push(newMember);
//   },
// };

// console.log(team.getTotalSalary()); // 6000

// team.addMember({
//   name: 'Mike',
//   role: 'tester',
//   salary: 1800,
// });