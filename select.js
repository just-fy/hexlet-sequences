// Реализуйте и экспортируйте по умолчанию функцию select, которая принимает на вход имя тега и html список, а возвращает список всех нод, соответствующих имени. Ноды возвращаются в том виде, в котором они представлены в дереве. Порядок, в котором ноды возвращаются — не важен.
// Эту задачу можно решить разными способами, алгоритм самого простого выглядит так:
// Проходимся по списку нод редьюсом, который собирает результирующий список.
// Если текущая нода содержит детей, то запускаем select рекурсивно для детей, а результат вызова добавляем в аккумулятор.
// Если текущая нода соответствует тому, что мы ищем, добавляем её в аккумулятор.

// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
const select = (tagName, htmlList) => {
  const func = (element, acc) => {
    const newAcc = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    return is(tagName, element) ? consList(element, newAcc) : newAcc;
  };
  return reduce(func, l(), htmlList);
};
export default select;
// END
