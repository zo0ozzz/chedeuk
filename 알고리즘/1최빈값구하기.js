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
// function solution(array) {
//   if (array.length === 1) {
//     return array[0];
//   }

//   const unique = [...new Set(array)];
//   if (unique.length === 1) {
//     return unique[0];
//   }

//   const newArray = unique.map((item) => {
//     let count = 0;

//     for (i = 0; i < array.length; i++) {
//       if (item === array[i]) {
//         count++;
//       }
//     }

//     return [item, count];
//   });

//   const copy = [...newArray];

//   copy.sort((first, second) => {
//     return second[1] - first[1];
//   });

//   if (copy[0][1] === copy[1][1]) {
//     return -1;
//   } else {
//     return copy[0][0];
//   }
// }

function solution(array) {
  return;
}

console.log("최빈값 구하기: ", solution(array) === answer);
