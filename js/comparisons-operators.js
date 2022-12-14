/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */
// console.log('' < 'a');

/*
 * Результатом порівняння буде бульове значення.
 * Рядки порівнюються по unicode.
 * https://unicode-table.com/en/
 * При порівнянні рядків рядки порівнюються посимвольно.
 * При порівнянні різних типів, операнди приводяться до числа.
 * null не дорівнює нічому окрім себе та undefined.
 * undefined не дорівнює нічому окрім себе та null.
 */

/*
 * Приведення різних типів до числа:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'b');
// console.log('apple' < 'bananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);
            //0     //1
//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 5);
// // console.log(5 >= 5);
// console.log(3 >= 4);

//* Рівність (==)
// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строга рівність (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Нерівність (!=)
// console.log('2' != 4);

//* Строга нерівність (!==)
// console.log('4' !== 4);