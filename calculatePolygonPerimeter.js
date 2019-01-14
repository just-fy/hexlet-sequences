// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход упорядоченный список точек, являющихся вершинами многоугольника, вычисляет и возвращает периметр многоугольника.

import { getX, getY } from 'hexlet-points';
import { isEmpty, head, tail } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const calculatePolygonPerimeter = (listPoints) => {
  if (isEmpty(listPoints)) {
    return null;
  } 
  if (isEmpty(tail(listPoints))) {
    return null;
  }
  if (isEmpty(tail(tail(listPoints)))) {
    return null;
  }
  const lastPoint = head(listPoints);
  const calcPerimetr = (list, current, acc) => {
    if (isEmpty(tail(list))) {
      const x1 = getX(current);
      const y1 = getY(current);
      const next = lastPoint;
      const x2 = getX(next);
      const y2 = getY(next);
      const newAcc = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) + acc;
      return newAcc;
    } else {
      const x1 = getX(current);
      const y1 = getY(current);
      const next = head(tail(list));
      const x2 = getX(next);
      const y2 = getY(next);
      const newAcc = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) + acc;
      return calcPerimetr(tail(list), next, newAcc);
    } 
  };
  
  return calcPerimetr(listPoints, head(listPoints), 0);
};

export default calculatePolygonPerimeter;
// END

// Решение учителя
// BEGIN
const areThereLessThenThreePoints = (points) => {
  const iter = (list, acc) => {
    if (acc > 2) {
      return false;
    }

    if (isEmpty(list)) {
      return true;
    }

    return iter(tail(list), acc + 1);
  };

  return iter(points, 0);
};

const segmentLength = (point1, point2) => {
  const x1 = getX(point1);
  const x2 = getX(point2);
  const y1 = getY(point1);
  const y2 = getY(point2);

  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

export default (points) => {
  if (areThereLessThenThreePoints(points)) {
    return null;
  }

  const startPoint = head(points);
  const iter = (list) => {
    const currentPoint = head(list);
    const rest = tail(list);
    if (isEmpty(rest)) {
      return segmentLength(currentPoint, startPoint);
    }

    const nextPoint = head(rest);
    return segmentLength(currentPoint, nextPoint) + iter(rest);
  };

  return iter(points);
};
// END
