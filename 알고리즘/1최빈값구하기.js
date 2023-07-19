// <최빈값 구하기>
// https://school.programmers.co.kr/learn/courses/30/lessons/120812

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

// 조건 & 반환값
const array = [1, 2, 3, 3, 3, 4];
const answer = 3;

// 정답
// - 목적
//   - 최빈값을 구하는 다양한 방법 익히기
//     1. 중복 제거한 후에 기존 배열과 루프
//       - 근데 이 방법에선 반복문이 중첩됨
//     2. 요소에 따른 중복 카운팅을 객체로 반환
//       - 루프가 있긴 하지만 중첩된 형태가 아니라 괜찮음.
function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  const unique = [...new Set(array)];
  if (unique.length === 1) {
    return unique[0];
  }

  const newArray = unique.map((item) => {
    let count = 0;

    for (i = 0; i < array.length; i++) {
      if (item === array[i]) {
        count++;
      }
    }

    return [item, count];
  });

  const copy = [...newArray];

  copy.sort((first, second) => {
    return second[1] - first[1];
  });

  if (copy[0][1] === copy[1][1]) {
    return -1;
  } else {
    return copy[0][0];
  }
}

230720;
function solution230720(array) {
  return;
}

console.log("최빈값 구하기: ", solution230720(array) === answer);

// 230719
// - 객체를 구성하는 중에 필요한 값을 추적하는 방식에 좀 더 익숙해질 필요가 있음.
function solution230719(array) {
  let obj = {};
  let element = null;
  let max = 0;

  for (item of array) {
    obj[item] = (obj[item] || 0) + 1;

    if (max < obj[item]) {
      max = obj[item];
      element = item;
    }
  }

  if (Object.values(obj).filter((item) => item === max).length > 1) {
    return -1;
  }

  return element;
}

//  * 230718:
//  - 배열 요소들 간의 중복 count를 구할 땐 두 개의 배열 간의 관계를 통해 루프를 중첩하여 돌리는 것도 방법.
//  - 하지만 객체를 사용해 요소에 대한 count를 업데이트해주는 방법을 쓰면 루프를 줄일 수 있음.
//    - 다음 번엔 객체를 이용해 업데이트 하는 방법을 먼저 고려해보자.
//      - 참고) 다음 번: 바로 뒷 차례. 다음번: 다음에 언젠가.
function solution230718(array) {
  let countObj = {};
  let mostFrequentElement = null;
  let maxCount = 0;

  for (item of array) {
    countObj[item] = (countObj[item] || 0) + 1;

    if (countObj[item] > maxCount) {
      mostFrequentElement = item;
      maxCount = countObj[item];
    }

    if (countObj[item] === maxCount && item < mostFrequentElement) {
      mostFrequentElement = item;
    }
  }

  if (Object.values(countObj).filter((item) => item === maxCount).length > 1) {
    return -1;
  }

  return mostFrequentElement;

  // function count(element) {
  //   let count = 0;

  //   for (item of array) {
  //     if (item === element) {
  //       count++;
  //     }
  //   }

  //   return count;
  // }

  // const unique = [...new Set(array)];

  // const sorted = unique.sort((a, b) => count(b) - count(a));

  // if (count(sorted[0]) === count(sorted[1])) {
  //   return -1;
  // }

  // return sorted[0];
}

//  * 230714: 5분, ???
//  1.
//  - 배열의 중복된 값을 구하는 기본적인 방법
//    - 1. [...new Set(arr)]로 중복 없는 배열을 만들고
//    - 2. 해당 배열과 원본 배열을 대상으로 반복문을 돌려 디폴트 count를 올리는 식.
//      - 이 방식으로는 중첩 반복문이 필연적.
//      - 중첩을 피해갈 수 있는 방법이 있을까...
//  2.
//  - 반복문 중첩을 피하려고 정규식을 써보긴 했는데.. 정규식도 결국엔 반복 아닌가..?
function solution230714(array) {
  // 2.
  const unique = [...new Set(array)];
  const stringFromArray = array.join("");

  const result = unique
    .map((item, index) => {
      const reg = new RegExp(item, "g");

      return [item, stringFromArray.match(reg).length];
    })
    .sort(([_1, a], [_2, b]) => b - a);

  return result[0][1] === result[1][1] ? -1 : result[0][0];

  // 1.
  // const unique = [...new Set(array)];

  // let pushed = [];

  // for (item1 of unique) {
  //   let count = 0;

  //   for (item2 of array) {
  //     if (item1 === item2) {
  //       count++;
  //     }
  //   }

  //   pushed.push([item1, count]);
  // }

  // pushed.sort(([_1, a], [_2, b]) => b - a);

  // return pushed[0][1] === pushed[1][1] ? -1 : pushed[0][0];
}

// * 230704: 10분 48초
// - reduce 좀 알 것 같음.
// - sort도 좀 알 것 같음.
// - 구조 분해 할당을 [, a] 이런 식으로 사용할 수 있다는 걸 알게 됨.
function solution230704(array) {
  const unique = [...new Set(array)];

  const elementAndCount = unique.reduce((acc, item) => {
    let count = 0;

    for (i = 0; i < array.length; i++) {
      if (item === array[i]) {
        count++;
      }
    }

    acc = [...acc, [item, count]];

    return acc;
  }, []);

  elementAndCount.sort(([, a], [, b]) => b - a);

  if (elementAndCount[0][0] === elementAndCount[1][0]) return -1;

  return elementAndCount[0][0];
}

// * 230701: 13분
// - 기존엔 map을 사용했음.
// - 이번엔 reduce로 시도.
//  - reduce가 익숙치 않아서 시간이 좀 걸림.
// - 알고리즘 문제는 답이 중요하니까 원본 배열이 바뀌어도 신경 쓰지 말자. 일단은 답이다.
// - 배열 순회 메서드 안에서 또 배열을 순회하는 게 좀 깔끔하지 않아 보임. 다른 방법이 있을까?
function solution230701(array) {
  const unique = [...new Set(array)];

  const elementAndCountArray = unique.reduce((acc, item) => {
    let count = 0;

    for (i = 0; i < array.length; i++) {
      if (item === array[i]) {
        count++;
      }
    }

    acc = [...acc, [item, count]];

    return acc;
  }, []);

  const sortedArray = elementAndCountArray.sort((a, b) => b[1] - a[1]);

  if (sortedArray[0][1] === sortedArray[1][1]) {
    return -1;
  }

  return sortedArray[0][0];
}
