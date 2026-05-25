// !Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   if (age >= 18) {
//     return `You are an adult`;
//   }
// }

// console.log(checkAge(22));

// !Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

//! available - доступна кількість товарів на складі
//! ordered - кількість одиниць товару в замовленні
//! Використовуючи розгалуження, доповни код функції таким чином, щоб:

//! Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
//! В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));

//! Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//! available - доступна кількість товарів на складі
//! ordered - кількість одиниць товару в замовленні
//! Використовуючи розгалуження, доповни код функції таким чином, щоб:

//! Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
//! Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
//! В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(150, 0));

//! Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

//! Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

//! Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
//! В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return correctPassword === password
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryism'));

//! Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

//! Якщо значення параметра type — це рядок:

//! "starter" — ціна передплати 0 кредитів.
//! "professional" — ціна передплати 20 кредитів.
//! "organization" — ціна передплати 50 кредитів.
//! Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

//! Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//     case `professional`:
//       return 20;
//     case `organization`:
//       return 50;
//     default:
//       return 'Invalid subscription type!';
//   }
// }
// console.log(getSubscriptionPrice('professional'));

//! Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//! number - число, входження якого перевіряється
//! start - початок числового проміжку
//! end - кінець числового проміжку
//! Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }
// console.log(isNumberInRange(0, 100, 57));

//! Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту.Перевірка відбувається за типом передплати.Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ.В іншому випадку повертала false.

// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip';
// }
// console.log(checkAccess('vop'));

//! Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// console.log(toggleModalVisibility(false));

//! Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

//! string - оригінальний рядок
//! length - довжина нового підрядка
//! Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 3));

//! Функція normalizeInput(input, to) оголошує два параметри:

//! input - рядок, який потрібно привести до певного регістру
//! to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
//! Доповни код функції таким чином, щоб:

//! Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
//! В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//   const inputLower = input.toLowerCase();
//   const inputUpper = input.toUpperCase();
//   if (to === 'lower') {
//     return inputLower;
//   } else {
//     return inputUpper;
//   }
// }
// console.log(normalizeInput('Big SALE', 'upper'));

//! Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

//! fullName - рядок, що містить повне ім'я
//! firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
//! Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//   const fullNameRegister = fullName.toLowerCase();
//   const firstNameRegister = firstName.toLowerCase();
//   return fullNameRegister.includes(firstNameRegister);
// }
// console.log(checkForName('Jason Neis', 'Jacob'));

//! Функція checkFileExtension(fileName, ext) приймає два параметри:

//! fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
//! ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
//! Доповни код функції так, щоб:

//! Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
//! В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return `File extension matches`;
//   } else {
//     return `File extension does not match`;
//   }
// }

// console.log(checkFileExtension('app.js', '.js'));

//! Функція getFileName(file) приймає один параметр

//! file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
//! Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

//! Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
//! Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
//! В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//   const dotIndex = file.indexOf('.');

//   if (dotIndex === -1) {
//     return file;
//   } else {
//     return file.slice(0, dotIndex);
//   }
// }

//! Функція createFileName(name, ext) приймає два параметри:

//! name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
//! ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
//! Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   const nameTrim = name.trim();
//   return `${nameTrim}.${ext}`;
// }

// console.log(createFileName(' order ', 'txt'));

//! Напиши функцію season(month), яка приймає номер місяця (1-12) і повертає пору року українською.

// function season(month) {
//   if (month === 12 || month === 1 || month === 2) {
//     return 'зима';
//   } else if (month >= 3 && month <= 5) {
//     return 'весна';
//   } else if (month >= 6 && month <= 8) {
//     return 'літо';
//   } else if (month >= 9 && month <= 11) {
//     return 'осінь';
//   } else {
//     return 'Некоректний номер місяця';
//   }
// }

//! Напиши функцію ticketPrice(age), яка повертає ціну квитка: діти до 6 — безкоштовно, від 6 до 18 — 50 грн, від 18 до 60 — 100 грн, від 60 — 70 грн.
// function ticketPrice(age) {
//     if (age < 6) {
//         return "Безкоштовно";
//     } else if (age < 18) {
//         return "50 грн";
//     } else if (age < 60) {
//         return '100 грн';
//     } else {
//         return '70 грн';
//     }
// }

// console.log(ticketPrice (1));

//! Напиши функцію formatGreeting(name, timeOfDay), яка повертає привітання залежно від часу доби: "morning" → "Добрий ранок, [name]!", "afternoon" → "Добрий день, [name]!", "evening" → "Добрий вечір, [name]!", інакше → "Привіт, [name]!".

// function formatGreeting(name, timeOfDay) {
//   if (timeOfDay === 'morning') {
//     return `Добрий ранок, ${name}!`;
//   } else if (timeOfDay === 'afternoon') {
//     return `Добрий день, ${name}!`;
//   } else if (timeOfDay === 'evening') {
//     return `Добрий вечір, ${name}!`;
//   } else {
//     return `Привіт, ${name}!`;
//   }
// }

//! Напиши функцію calculator(a, b, operator), яка виконує операцію +, -, * або / над двома числами. Якщо оператор невідомий — повертає "Невідомий оператор". Якщо ділення на нуль — повертає "Ділення на нуль".

// function calculator(a, b, operator) {
//   if (operator === '+') {
//     return a + b;
//   } else if (operator === '-') {
//     return a - b;
//   } else if (operator === '*') {
//     return a * b;
//   } else if (operator === '/') {
//     if (b === 0) {
//       return 'Ділення на нуль';
//     }
//     return a / b;
//   } else {
//     return 'Невідомий оператор';
//   }
// }

//! Напиши функцію gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked), яка повертає результат гри: "Dead" якщо hp гравця 0 або менше, "Victory" якщо hp ворога 0 або менше І гравець живий, "Locked" якщо двері замкнені І немає ключа І обидва живі, "Low Mana" якщо мана менше 10 І обидва живі І двері не замкнені або є ключ, "Continue" в інших випадках.

// function gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked) {
//   if (playerHP <= 0) {
//     return 'Dead';
//   } else if (enemyHP <= 0) {
//     return 'Victory';
//   } else if (doorLocked && !hasKey) {
//     return 'Locked';
//   } else if (playerMana < 10 && (!doorLocked || hasKey)) {
//     return 'Low Mana';
//   } else {
//     return 'Continue';
//   }
// }

//! Напиши функцію trafficLight(color, isEmergency, isPedestrianCrossing, timeOfDay), яка повертає дію водія: якщо є екстрена служба — "Pull over", якщо зелений І немає пішоходів — "Go", якщо жовтий АБО є пішоходи — "Slow down", якщо червоний — "Stop", якщо нічний час (22:00-06:00) І червоний І немає пішоходів — "Stop and check", інакше — "Unknown".

// function trafficLight(color, isEmergency, isPedestrianCrossing, timeOfDay) {
//   const isNight = timeOfDay >= 22 || timeOfDay < 6;

//   if (isEmergency) {
//     return 'Pull over';
//   } else if (color === 'red' && isNight && !isPedestrianCrossing) {
//     return 'Stop and check';
//   } else if (color === 'green' && !isPedestrianCrossing) {
//     return 'Go';
//   } else if (color === 'yellow' || isPedestrianCrossing) {
//     return 'Slow down';
//   } else if (color === 'red') {
//     return 'Stop';
//   } else {
//     return 'Unknown';
//   }
// }

//! Функція calculateTotal(number) приймає ціле число(параметр number).Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   while (i <= number) {
//     total += i;
//     i += 1;
//   }

//   return total;
// }

// console.log(calculateTotal(24));

//! Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let sum = 0;

//     for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

//! Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

//! Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number); // 10

//! Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

//! Доповни код функції таким чином, щоб вона:

//! повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
//! не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(8, 17, 3));
