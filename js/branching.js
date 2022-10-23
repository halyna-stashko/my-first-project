/*
 * Розгалуження if
 */
//true
// if (умова) {
// тіло if
// }else{

// }

// if (умова) {
// тіло if
// }else if (умова){
// тіло else if
// } else{

// }



/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// const userNumber = Number(prompt('Введіть якесь число'));
// console.log(userNumber === 10);
// if(userNumber === 10){
//     alert('Вірно')
// }else {
//     alert('Невірно')
// }



/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const number = Number(prompt('Enter number from 0 to 60'));

// if (number >= 0 && number < 15) {
//     console.log('перша чверть години');
// } else if (number >= 15 && number < 30) {
//     console.log('друга чверть години');
// } else if (number >= 30 && number < 45) {
//     console.log('третя чверть години');
// } else if (number >= 45 && number <= 60) {
//     console.log(' четверта чверть години');
// } else {
//     console.log('НЕ КОРЕКТНЕ ЗНАЧЕННЯ!');
// }





/*
 * Switch case
 */

// switch (10) {
//     case 10:
//         console.log(10);
//         break;

//     case 11:
//         console.log(11);
//         break;

//     default:
//         console.log('END');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));
// if (number === 0) {

// } else if (number === 1) {

// } else if (number === 2) {

// } else if (number === 3) {
//     alert('Ви ввели число 3');
// } else {
//     alert('Ви ввели якесь інше число');
// }
// const number = 3
// switch (number) {
//     case 0:
//         alert('Ви ввели число 0');
//         break;
//     case 1:
//         alert('Ви ввели число 1');
//         break;
//     case 2:
//         alert('Ви ввели число 2');
//         break;
//     case 3:
//         alert('Ви ввели число 3');
//         break;
//     default:
//         alert('Ви ввели якесь інше число');
// }



/*
 * Тернарний оператор
 */
// true                     false
// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
const a = 2;
const b = 1;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

result = a + b < 4 ? 'Мало' : 'Багато';


console.log(result);