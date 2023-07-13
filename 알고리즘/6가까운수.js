// 가까운 수

// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

// 조건 & 반환값
const array = [3, 10, 28];
const n = 20;

const answer = 28;

// 정답
function solution(array, n) {
  return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];

  //     function howNear(element) {
  //         return Math.abs(n - element)
  //     }

  //     return array.reduce((acc, cur) => {
  //         if(howNear(cur) <= howNear(acc)) {
  //             if(howNear(cur) === howNear(acc)) {
  //                 acc = [acc, cur].sort((a, b) => a - b)[0];
  //             }
  //             else {
  //                 acc = cur;
  //             }
  //         }

  //         return acc;
  //     }, 1000)

  //     function howNear(n, element) {
  //         return Math.abs(n - element)
  //     }

  //     const newArray = array.sort((a, b) => howNear(n, a) - howNear(n, b))

  //     if(howNear(n, newArray[0]) === howNear(n, newArray[1])) {
  //         let arr = [];

  //         for(i = 0; i < newArray.length; i++) {
  //             if(howNear(n, newArray[i]) === howNear(n, newArray[0])) {
  //                 arr.push(newArray[i]);
  //             }
  //         }

  //         return Math.min(...arr);
  //     } else {
  //         return newArray[0]
  //     }
}

function solution230713(array, n) {
  return;
}

console.log(solution230713(array, n) === 28);
