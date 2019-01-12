// Реализуйте и экспортируйте функцию filter для библиотеки html-tags, используя итеративный процесс:

// import { node, append, make, filter, toString as htmlToString } from 'hexlet-html-tags';

// const html1 = append(make(), node('h1', 'header1'));
// const html2 = append(html1, node('h1', 'header2'));
// const html3 = append(html2, node('p', 'content'));

// const processedHtml = filter((element) =>
//   !is('h1', element), html3);

// //<p>content</p>
// htmlToString(processedHtml);
// Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

// import { toString as pairToString } from 'hexlet-pairs-data';
// import { make, append, node } from 'hexlet-html-tags';

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));
// const dom4 = append(dom3, node('blockquote', 'live is life'));
// const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

// listToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is life');

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, htmlList) => {
  const iter = (elements, acc) => {
    if (isEmpty(elements)) {
      return reverse(acc);
    }
    const element = head(elements);
    const newAcc = func(element) ? cons(element, acc) : acc;

    return iter(tail(elements), newAcc);
  };

  return iter(htmlList, l());
};

export const quotes = (htmlList) => {
  const func = element => is('blockquote', element);
  const filteredBlockquotes = filter(func, htmlList);

  return map(value, filteredBlockquotes);
};
// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};