// Пары неотрицательных целых чисел можно представить числами и арифметическими операциями. Можно считать, что пара чисел a и b – это 2^a * 3^b.
// Функции car и cdr при этом будут просто вычислять значения a и b (кратности двойки и тройки, соответственно), раскладывая аргумент на множители.
// Например, имея пару 5, 8 в виде числа 209952 (2^5 * 3^8), можно получить первый элемент пары, разложив число на множители и вычислив факторизацию для числа 2, а второй элемент пары – разложив число на множители и вычислив факторизацию для числа 3.
// Реализовать функции cons, car, cdr в соответствии с этим алгоритмом

// BEGIN (write your solution here)
const counting = (base, num) => {
  const iter = (value, acc) => {
    if (value % base !== 0) {
      return acc;
    }
    const newValue = value / base;
    return iter(newValue, acc + 1);
  };
  return iter(num, 0);
};

export const cons = (a, b) => (2 ** a) * (3 ** b);
export const car = pair => counting(2, pair);
export const cdr = pair => counting(3, pair);
// END