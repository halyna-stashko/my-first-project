/*
 * Цикл (for)
 */

/*
 * For
 */
// for (initialization; condition; post-expression) {
//   statements
// }


// for (let i = 0; i <= 10; i += 3) {
//     console.log(i);
// }


/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/
// for (let i = 2; i <= 10; i += 1) {
//     // if (i % 2 === 0) {
//     //     console.log(i);
//     // }
//     if(!(i % 2)){ //0 => false + !  => true 
//         console.log(i);
//     }
// }


/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i}`, 'FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log(`${i}`, "Fizz");
//     } else if (i % 5 === 0) {
//         console.log(`${i}`, 'Buzz');
//     }else{
//         console.log(i);
//     }
// }