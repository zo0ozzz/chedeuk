// 문자열 정렬하기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120911

// 문제 설명
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < my_string 길이 < 100

// 조건 & 결괏값
const my_string = "Bcad";

const answer = "abcd";

// 정답
// - 목적
// 	- .toLowerCase() 메서드는 하나의 문자뿐만 아니라 문자열에도 기능함.
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");

  //     return [...my_string].sort((a, b) => {
  //         if(a.toLowerCase() < b.toLowerCase()) {
  //             return -1;
  //         }
  //         else if(a.toLowerCase() === b.toLowerCase()) {
  //             return 0;
  //         }
  //         else {
  //             return 1;
  //         }
  //     }).reduce((acc, cur) => acc + (cur.toLowerCase() === cur ? cur : cur.toLowerCase()), '');

  //     return my_string.replace(/[A-Z]/g, item => item.toLowerCase()).split('').sort().join('');
}

230720;
function solution230720(my_string) {}

console.log("문자열정렬하기(2): ", solution230720(my_string) === answer);

// 230719: 한 번에 해결~
// - 문자열 전체에 .toLowerCase() 가능
function solution230719(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}
