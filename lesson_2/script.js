/* task_1 */

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 => Переменной "c" присваивается значение ПОСЛЕ инкремента переменной "а"
// d = b++; alert(d);           // 1 => Переменной "d" присваивается значение ДО инкремента переменной "b"
// c = (2+ ++a); alert(c);      // 5 => Та же история с инкрементом, что и выше, только при этом сложение с числом 2
// d = (2+ b++); alert(d);      // 4 => Та же история с инкрементом, что и выше, только при этом сложение с числом 2
// alert(a);                    // 3 => Переменная "а" объявлена в стр 3 и равна 1, в 4 и 6 строках мы ее инкрементим потому и 3
// alert(b);                    // 3 => Переменная "b" объявлена в стр 3 и равна 1, в 4 и 6 строках мы ее инкрементим потому и 3

/* task_2 */

// var a = 2;
// var x = 1 + (a *= 2);        // x = 5 = 1 + (2 * 2)

/* task_3 */

let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
let comment;
let result;
try {
  a = parseInt(a);
  b = parseInt(b);

  switch (true) {
    case (Math.sign(a) == 1 || Math.sign(a) == 0) && (Math.sign(b) == 1 || Math.sign(b) == 0):
      result = a - b;
      comment = "Вы ввели два положительных числа, их разность равна: " + result
      break;
    case Math.sign(a) == -1 && Math.sign(b) == -1:
      result = a * b;
      comment = "Вы ввели два отрицательных числа, их произведение равно: " + result
      break;
    case ((Math.sign(a) == 1 || Math.sign(a) == 0) && Math.sign(b) == -1) || (Math.sign(a) == -1 && (Math.sign(b) == 1 || Math.sign(b) == 0)):
      result = a + b;
      comment = "Вы ввели два числа c разными знаками, их сумму равно: " + result
      break;
    default:
      throw new Error("вы ввели не чило, попробуйте в другой раз");
  }
  alert(comment);
} catch (e) {
  alert(e.message);
}

/* task_4 */

let random = Math.round(Math.random() * 15);
alert("рандомное число: " + random);

/* task_5 */
// Не совсем понятно условие задачи, организовать вывод от 0 до 15?
// тогда вот

let int_1 = 15;
while (int_1 >= 0) {
  switch (int_1) {
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      alert(int_1);
      break;
  }
  int_1--;
}

/* task_6 */

function mathOperation(arg1, arg2, operation) {
  let result;
  switch (String(operation)) {
    case 'разность':
      result = arg1 - arg2;
      break;
    case 'произведение':
      result = arg1 * arg2;
      break;
    case 'сумма':
      result = arg1 + arg2;
      break;
  }
  return result;
}

/* task_7 */

let int_2 = null;
let int_3 = 0;

if (int_2 == int_3) {
  alert("Этот алерт никогда не будет выведен, тк  null - это отсутствие какого-либо значение, хоть и по условия отдает false, в то время как 0 - это число, но так же отдает false, но так же как оказывается, они разные по типу. Полее подробно и хорошо описано в статье.");
}
