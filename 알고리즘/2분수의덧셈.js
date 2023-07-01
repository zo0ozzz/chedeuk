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

function solution(numer1, denom1, numer2, denom2) {
  let arr1 = [];
  let arr2 = [];

  for (i = 1; i <= denom1; i++) {
    if (denom1 % i === 0) {
      arr1.push(i);
    }

    continue;
  }

  for (i = 1; i <= denom2; i++) {
    if (denom2 % i === 0) {
      arr2.push(i);
    }

    continue;
  }

  const arr = arr1.filter((item) => {
    for (i = 0; i < arr2.length; i++) {
      if (item === arr2[i]) {
        return item;
      }
    }
  });

  console.log(arr1, arr2, arr);

  const copyArr = [...arr];
  const 분모최대공약수 = copyArr.sort().pop();

  const value1 = denom1 / 분모최대공약수;
  const value2 = denom2 / 분모최대공약수;

  const 분모최소공배수 = 분모최대공약수 * value1 * value2;

  const 분자환산 =
    numer1 * (분모최소공배수 / denom1) + numer2 * (분모최소공배수 / denom2);
  const 분모환산 = 분모최소공배수;

  // const reverseArr = [...arr].reverse();

  let newArr = [];

  for (i = 1; i <= 분모최소공배수; i++) {
    if (분모최소공배수 % i === 0) {
      newArr.push(i);
    }

    continue;
  }

  const reverseNewArr = [...newArr].reverse();

  let result분자;
  let result분모;

  for (i = 0; i < reverseNewArr.length; i++) {
    const divider = reverseNewArr[i];

    if (분자환산 % divider === 0) {
      result분자 = 분자환산 / divider;
      result분모 = 분모환산 / divider;

      break;
    }
  }

  return [result분자, result분모];
}

// 230701: 35분
// - 이번에도
//   const parsedNumer1 = numer1 * divided2;
//   const parsedNumer2 = numer2 * divided1;
//   여기서 2, 1을 바꿔 썼다. 이게 왤케 헷갈릴까.
// - 코드가 너무 긴 것 같다. 좀 더 간단하게 하는 방법이 있을까.
// - 최대공약수, 최소공배수를 구하는 방식을 확실히 익혀보자.

function solution230701(numer1, denom1, numer2, denom2) {
  const 약수1 = [];
  const 약수2 = [];

  for (i = 1; i <= denom1; i++) {
    if (denom1 % i === 0) {
      약수1.push(i);
    }
  }

  for (i = 1; i <= denom2; i++) {
    if (denom2 % i === 0) {
      약수2.push(i);
    }
  }

  const common = 약수1.filter((item) => {
    for (i = 0; i < 약수2.length; i++) {
      if (item === 약수2[i]) {
        return item;
      }
    }
  });

  const commonMax = common.sort((a, b) => b - a)[0];
  const divided1 = denom1 / commonMax;
  const divided2 = denom2 / commonMax;

  // 분모
  const denomMin = commonMax * divided1 * divided2;

  const parsedNumer1 = numer1 * divided2;
  const parsedNumer2 = numer2 * divided1;

  // 분자
  const sumNumer = parsedNumer1 + parsedNumer2;

  const commonDenomMin = [];
  const commonSumNuber = [];

  for (i = 1; i <= denomMin; i++) {
    if (denomMin % i === 0) {
      commonDenomMin.unshift(i);
    }
  }

  for (i = 1; i <= sumNumer; i++) {
    if (sumNumer % i === 0) {
      commonSumNuber.unshift(i);
    }
  }

  let newCommonMax;

  for (i = 0; i < commonDenomMin.length; i++) {
    for (j = 0; j < commonSumNuber.length; j++) {
      if (commonDenomMin[i] === commonSumNuber[j]) {
        newCommonMax = commonDenomMin[i];
      }
    }
  }

  const resultNumer = sumNumer / newCommonMax;
  const resultDenom = denomMin / newCommonMax;

  return [resultNumer, resultDenom];
}

console.log(
  "분수의덧셈: ",
  solution230701(numer1, denom1, numer2, denom2)[0] === 5 &&
    solution230701(numer1, denom1, numer2, denom2)[1] === 4
);
