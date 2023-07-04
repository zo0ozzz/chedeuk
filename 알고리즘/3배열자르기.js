// <배열 자르기>

// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

// 조건 & 반환값
const numbers = [1, 2, 3, 4, 5];
const num1 = 1;
const num2 = 3;

const answer = [2, 3, 4];

// 정답
function solution(numbers, num1, num2) {
  const result = numbers.slice(num1, num2 + 1);

  return result;
}

function solution230705(numbers, num1, num2) {
  return;
}
console.log(
  "배열자르기: ",
  solution230705(numbers, num1, num2)[0] === 2 &&
    solution230705(numbers, num1, num2)[1] === 3 &&
    solution230705(numbers, num1, num2)[2] === 4
);

// 230704
// - slice(num1, num2)
//  - 첫 번째 인자는 자르는 시작 인덱스.
//  - 두 번째 인자는 자르는 끝 인덱스 - 1. 즉, 그 인덱스의 하나 전까지 자른다.
//    - 길이라고 봐도 됨. 끝 인덱스 - 시작 인덱스 + 1이 길이니까.
function solution230704(numbers, num1, num2) {
  const cut = numbers.slice(num1, num2 + 1);

  return cut;
}
