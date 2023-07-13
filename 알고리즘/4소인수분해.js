// 소인수분해

// 문제 설명
// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ n ≤ 10,000

// 조건 & 반환값
const n = 420;

const answer = [2, 3, 5, 7];

// 정답
function solution(n) {
  // 소인수분해 방법
  let i = 2;

  let arr = [];

  while (i <= n) {
    if (n % i === 0) {
      arr.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(arr)];

  //     function isSosu(num) {
  //         let count = 0;

  //         for(i = 1; i <= num; i++) {
  //             if(num % i === 0) {
  //                 count++

  //                 if(count === 3) {
  //                     break;
  //                 }
  //             }
  //         }

  //         if(count === 2) {
  //             return true
  //         }

  //         return false;
  //     }

  //     let yaksu = [];

  //     for(i = 1; i <= n; i++) {
  //         if(n % i === 0) {
  //             yaksu.push(i);
  //         }
  //     }

  //     return [...new Set(yaksu)].filter(item => isSosu(item))
}

function solution230713(n) {}

console.log(ddd(solution230713(n)) === "2357");
