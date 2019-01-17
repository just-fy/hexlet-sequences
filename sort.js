// Реализуйте и экспортируйте по умолчанию функцию sort, которая сортирует переданный массив по возрастанию

// sort(l(3, 3, 0, -1, 0, 4, -5));
// (-5, -1, 0, 0, 3, 3, 4)

// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = list => {
  if (isEmpty(list)) {
    return l();
  }
  const pivot = head(list);
  const rest = tail(list);
  const right = filter(element => element > pivot, rest);
  const left = filter(element => element <= pivot, rest);
  const result = concat(sort(left), cons(pivot, sort(right)));

  return result;
};
export default sort;
// END