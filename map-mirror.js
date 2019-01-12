// Реализуйте и экспортируйте функцию map для библиотеки html-tags. Реализация должна быть построена с использованием итеративного процесса (без циклов, на основе рекурсии). Эта функция подобна той что описывалась в теории для списков, только текущая реализация работает с html-списком. Параметры и их порядок у функций аналогичный. Первый - функция-трансформер, второй - коллекция (в нашем случае список html-тегов).

// import { make, append, node, value, is } from 'hexlet-html-tags';

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));

// // Отображение в результате которого в html-списке заменяются теги h1 на теги h2
// const processedDom = map((element) => {
//   if (is('h1', element)) {
//     return node('h2', value(element));
//   }
//   return element;
// }, dom3);
// Реализуйте и экспортируйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

// import { make, append, node, value, is, toString as htmlToString } from 'hexlet-html-tags';

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));

// // <h1>emehcs</h1>
// // <p>psil a si</p>
// htmlToString(mirror(dom3));
// Экспортируйте все созданные функции.

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings';
// BEGIN (write your solution here)
export const map = (func, htmlList) => {
  const iter = (f, elements, acc) => {
    if (isEmpty(elements)) {
      return reverse(acc);
    }
    const element = head(elements);
    const newAcc = cons(f(element), acc);

    return iter(f, tail(elements), newAcc);
  };
  return iter(func, htmlList, l());
};

export const mirror = (htmlList) => {
  const func = element => node(name(element), reverseStr(value(element)));

  return map(func, htmlList);
};
// END
export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};