// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890

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

function solution230719(array, n) {
  return;
}

console.log(solution230719(array, n) === 28);

// 230718: 금방. 2. 답 보고.
// - 1.
// - 이전에 푼 문제에서 힌트를 얻음. 가장 ~를 비교하고 가장 ~한 요소를 반환하는 방법.
//   - 가장 ~에 대해 변수화 후 비교. 비교 결과에 따라 변수의 할당값을 변경.
// - 2.
// - 답지 봤다. 근데 슥 보니까 금방 이해할 수 있었음. 리턴값이 0이 되는 경우를 false로 활용하는 방법을 고려하기.
function solution230718(array, n) {
  // 2.
  return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];

  // 1.
  // let mostNearElement = null;
  // let howNear = 1000;

  // for (item of array) {
  //   if (Math.abs(n - item) < 1000) {
  //     mostNearElement = item;
  //     howNear = Math.abs(n - item);
  //   }

  //   if (Math.abs(n - item) === howNear && item < mostNearElement) {
  //     mostNearElement = item;
  //   }
  // }

  // return mostNearElement;
}

//  230714: 13분 40초
//  - sort의 콜백이 0이 나올 때(같은 길이만큼 떨어져 있을 때) 더 작은 수가 앞으로 오게 하는 방법을 떠올려내는 데 시간을 많이 썼음.
//  - 0이 나오면 false로 활용하는 방식을 항상 고려해보자. ||를 활용할 수 있는 경우가 많음.
function solution230714(array, n) {
  return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];
}
