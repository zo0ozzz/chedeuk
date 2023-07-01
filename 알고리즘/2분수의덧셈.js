// <분수의 덧셈>

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

// 조건 & 반환값
const numer1 = 1;
const denom1 = 2;
const numer2 = 3;
const denom2 = 4;

const answer = [5, 4];

// function solution(numer1, denom1, numer2, denom2) {
//     let arr1 = [];
//     let arr2 = [];

//     for(i = 1; i <= denom1; i++) {
//         if(denom1 % i === 0) {
//             arr1.push(i)
//         }

//         continue;
//     }

//     for(i = 1; i <= denom2; i++) {
//         if(denom2 % i === 0) {
//             arr2.push(i)
//         }

//         continue;
//     }

//     const arr = arr1.filter(item => {
//         for(i = 0; i < arr2.length; i++) {
//             if(item === arr2[i]) {
//                 return item;
//             }
//         }
//     })

//     console.log(arr1, arr2, arr)

//     const copyArr = [...arr];
//     const 분모최대공약수 = copyArr.sort().pop();

//     const value1 = denom1 / 분모최대공약수;
//     const value2 = denom2 / 분모최대공약수;

//     const 분모최소공배수 = 분모최대공약수 * value1 * value2;

//     const 분자환산 = numer1 * (분모최소공배수 / denom1) + numer2 * (분모최소공배수 / denom2);
//     const 분모환산 = 분모최소공배수;

//     // const reverseArr = [...arr].reverse();

//     let newArr = []

//     for(i = 1; i <= 분모최소공배수; i++) {
//         if(분모최소공배수 % i === 0) {
//             newArr.push(i)
//         }

//         continue;
//     }

//     const reverseNewArr = [...newArr].reverse();

//     let result분자;
//     let result분모;

//     for(i = 0; i < reverseNewArr.length; i++) {
//         const divider = reverseNewArr[i];

//         if(분자환산 % divider === 0) {
//             result분자 = 분자환산 / divider;
//             result분모 = 분모환산 / divider;

//             break;
//         }
//     }

//     return [result분자, result분모]
// }

function solution(numer1, denom1, numer2, denom2) {
  return;
}

console.log(
  "분수의덧셈: ",
  solution(numer1, denom1, numer2, denom2) === [5, 4]
);
