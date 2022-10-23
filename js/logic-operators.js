/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.
// const result = 1 && null && 'Hello';
// console.log(result);
// Значення які завжди повернуть 
// 1 0
// 2 NaN
// 3 ''
// 4 null
// 5 undefined
// 6 false

//* || - запинається на правді
//* Якщо операнд був преведенний до true, то повертається значення цього операнду.
// Якщо всі операнди були приведені до false, то повертається останній.
// const response = '' || 3 || 0;
// console.log(response);
// const result = 0 || ' ' || null;

// console.log(result);

//* ! - інвертує правду до брехні, а брехню до правди
// console.log(!false);
// console.log(!'Hello');
