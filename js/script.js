"use strict";

//* ЧИСЛА


//* Методи Number.parseInt(значення) і Number.parseFloat(значення)
// const photoWidth = '50.12px';
// console.log(Number.parseInt(photoWidth));
// console.log(Number.parseFloat(photoWidth))


//* Перевірка на число
// const string = Number('nnn');
// const number = Number('123');
// const bolean = Number(false);
// const nan = Number(NaN);
// console.log(Number.isNaN(string)); //true
// console.log(Number.isNaN(number)); //false
// console.log(Number.isNaN(bolean)); //false
// console.log(Number.isNaN(nan)); //true



//* Клас Math
// Math.floor(num) - повертає найбільше ціле число, менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найменше ціле число, більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа, округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10
// Примітивний рандомайзер:
// const min = prompt('введіть мінімальне число');
// const max = prompt('введіть максимальне число');
// const randomNumber = Math.round(Math.random() * (max - min) + min);
// alert(`Ваше випадкове число ${randomNumber}`);



//* Рядки


//* Шаблонний рядок (косі лапки):
// const guestName = prompt('Введіть ваше ім\'я');
// const guestLastName = prompt('Введіть ваше прізвище');
// alert(`Ласкаво просимо ${guestName} ${guestLastName} на наш сайт`)

//* Апостроф в слові тексту в js ставиться через /' Наприклад - ім\'я


//* Нормалізація тексту
// const brand = 'suMSunG';
// При введені даних користувач може робити помилки. Потрібно, щоб введений текст нормалізувався: починався з великої букви, далі всі малі - Sumsung
// console.log(`Було - ${brand}`);
// const normalizedBrand = brand.toLocaleLowerCase();
// const firstLetterBrand = brand[0].toUpperCase();
// console.log(`Стало - ${firstLetterBrand}${normalizedBrand.slice(1)}`);


//* Виявлення спаму
// const spamWord1 = 'спам';
// const spamWord2 = 'розпродаж';

// const incomeText1 = 'Привіт, я принц Абдул, це не сПаМ, пропоную тобі мільйон гривень';
// const incomeText2 = 'Тільки сьогодні, тотальний РОЗПРОДАЖ у зв\'язку з закриттям магазину';

// console.log(`Чи є у реченні \"${incomeText1}\" слово \"${spamWord1}\" - ${incomeText1.toLocaleLowerCase().includes(spamWord1)}`);
// console.log(`Чи є у реченні \"${incomeText1}\" слово \"${spamWord2}\" - ${incomeText1.toLocaleLowerCase().includes(spamWord2)}`);
// console.log(`Чи є у реченні \"${incomeText2}\" слово \"${spamWord1}\" - ${incomeText2.toLocaleLowerCase().includes(spamWord1)}`);
// console.log(`Чи є у реченні \"${incomeText2}\" слово \"${spamWord2}\" - ${incomeText2.toLocaleLowerCase().includes(spamWord2)}`);


//* Приведення типів операндів до true або false
 // Кожен тип даних можна привести до значення true або false
 // Потрібно запам\'ятати 6 типів даних, які завжди приводять до значення false:
 // 0 - Nan - null - undefined - '' - false


 //* Логічні оператори і - &&, або - ||, не - !

//* && - запинається на брехні
// Якщо операнд був приведенний до false, то повертається значення цього операнду.
// Якщо всі операнди були приведені до true, то повертається значення останнього операнду.
// Приклади:
// const result1 = 1 && null && 'Hello';
// true && false && true
// console.log(result1); // null
// const result2 = 1 && 2 && 'Hello';
// true && true && true
// console.log(result2); // Hello

//* || - запинається на правді
// Якщо операнд був преведенний до true, то повертається значення цього операнду.
// Якщо всі операнди були приведені до false, то повертається останній.
// Приклади:
// const result1 = 1 || null || 'Hello';
// true || false || true
// console.log(result1); // 1
// const result2 = 0 || 2 ||'Hello';
// false || true || true
// console.log(result2); // 2

//* ! - інвертує правду до брехні, а брехню до правди
// console.log(!false);
// console.log(!'Hello');

//? Задача: розпочати чат. Для цього потрібно, щоб користувач був:
// 1. другом
// 2. онлайн
// 3. без режиму "не турбувати"
// const isFriend = true;
// const isOnline = true;
// const isDND = false;
// const canStart = isFriend && isOnline && !isDND;
// console.log(`Чи можна розпочати чат? - ${canStart}`);


