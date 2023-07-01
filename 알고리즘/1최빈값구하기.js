// <최빈값 구하기>

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

// 조건 & 반환값
const array = [1, 2, 3, 3, 3, 4];
const answer = 3;

// 정답

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

console.log("최빈값 구하기: ", solution230701(array) === answer);
