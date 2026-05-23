// const name = "Roman";
// const age = 41;
// const pet = false;

//! Створи змінну price зі значенням 150 і змінну discount зі значенням 20. Порахуй фінальну ціну і виведи результат.

// const price = 150;
// const discount = 20;
// const dicVal = (price * discount) / 100;
// const totalPrice = price - dicVal;

// console.log(totalPrice);

//! Створи змінну з твоїм повним іменем.Виведи кількість символів у ньому.

// const fullName = 'Roman Drok';

// console.log (fullName.length);

//! Є рядок "javascript is awesome". Зроби велику першу літеру кожного слова.

// const fullSting = 'javascript is awesome';
// const firstWord = fullSting.slice(0, 10);
// console.log(firstWord);

//! Створи змінну password = "myPass123". Перевір чи містить вона цифру "1" і чи починається з "my". Виведи обидва результати

// const password = 'myPass123';
// const hasOne = password.includes('1');
// const hasStart = password.startsWith('my');

// console.log(password.endsWith('123'));
// console.log(hasOne);
// console.log(hasStart);

// ! Напиши функцію isLongPassword(password), яка повертає true якщо пароль довший за 8 символів.

// function isLongPassword(password) {
//   return password.length > 8;
// }

// console.log(isLongPassword('fuefyurytr'));

// ! Напиши функцію getInitials(firstName, lastName), яка повертає ініціали. Наприклад: "Іван Франко" → "І.Ф.".

// function getInitials(firstName, lastName) {
//   const fistNameInitial = firstName[0];
//   const lastNameInitial = lastName[0];
//   return `${fistNameInitial}.${lastNameInitial}.`;
// }
// console.log(getInitials('Іван', 'Франко'));

// ! Напиши функцію truncate(str, maxLength), яка обрізає рядок до maxLength символів і додає "..." в кінці якщо рядок був довшим.

// function truncate(str, maxLength) {
//     if (str > maxLength) {
//       retutn str.slice (0, maxLength)
//   }

// ! Напиши функцію trimAndLower(str), яка прибирає пробіли на початку і в кінці рядка та переводить його в нижній регістр.

//! Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
