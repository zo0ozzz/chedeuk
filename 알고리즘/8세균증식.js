// 세균 증식
// https://school.programmers.co.kr/learn/courses/30/lessons/120910

// 문제 설명
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10
// 1 ≤ t ≤ 15

// 조건 & 결괏값
const n = 2;
const t = 10;

const answer = 2048;

// 정답
// - 목적
// 	- Math.pow() 메서드
function solution(n, t) {
  return n * Math.pow(2, t);

  //     let quantity = n;

  //     for(i = 1; i <= t; i++) {
  //         quantity *= 2;
  //     }

  //     return quantity;
}

230720;
function solution230720(n, t) {
  return;
}

console.log("세균증식: ", solution230720(n, t) === answer);

// 230719: 한 번에 해결~
// - Math.pow(곱할 수, 몇 번)
function solution230719(n, t) {
  return n * Math.pow(2, t);
}
