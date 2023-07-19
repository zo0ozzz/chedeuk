// 중복된 문자 제거

// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string ≤ 110
// my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
// 대문자와 소문자를 구분합니다.
// 공백(" ")도 하나의 문자로 구분합니다.
// 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

// 조건 & 결과값
const my_string = "We are the world";

const answer = "We arthwold";

// 정답
function solution(my_string) {
  const toArray = [...my_string];

  return toArray
    .filter((item, index) => index === my_string.indexOf(item))
    .join("");

  //     const toArray = my_string.split('');

  //     const unique = [...new Set(toArray)];

  //     const toString = unique.join('')

  //     return toString;
}

function solution230720(my_string) {
  return;
}

console.log("중복된문자제거: ", solution230720(my_string) === answer);

// 230719: 한 번에 해결~
// - 원본 배열에서 뭔가를 제거할 땐 일단 filter를 적용할 생각을 해보기.
function solution230719(my_string) {
  return [...my_string]
    .filter((item, index) => index === my_string.indexOf(item))
    .join("");
}

// 230718: 오래 걸리진 않음
// - index === my_string.indexOf(item) 이걸 떠올려내는 데 시간이 좀 걸림
// - 기억력으로 쓴 것 같기도 하고.. 다음엔 자연스럽게 원리를 떠올려내보자
function solution230718(my_string) {
  return my_string
    .split("")
    .filter((item, index) => index === my_string.indexOf(item))
    .join("");
}

//  230714: 1. 금방. 2. 해답 봄.
//  1. Set
//  - Set으로 해결하는 건 아주 쉬움.
//    - 좀 불안한 게 Set이 어떻게 중복을 제거하는지를 모름.
//    - 그래서 Set 없이도 문제를 해결할 수 있는 방법이 필요했음.
//
//  2. filter + indexOf
//  - 결국 답지를 보고 말았음..
//  - 이 요소가 같은 값을 가진 배열의 요소 중 가장 먼저 있는 요소인지 확인할 때는 indexOf를 활용하면 됨.
//    - 다음엔 꼭 떠올려내자.
function solution230714(my_string) {
  // 2.
  const toArray = my_string.split("");

  return toArray
    .filter((item, index) => index === toArray.indexOf(item))
    .join("");

  // 1.
  // const unique = [...new Set(my_string.split(""))];

  // return unique.join("");
}
