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

// 정답
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

// 230705:
function solution230705(numer1, denom1, numer2, denom2) {
  return;
}

console.log(
  "분수의덧셈: ",
  solution230705(numer1, denom1, numer2, denom2)[0] === 5 &&
    solution230705(numer1, denom1, numer2, denom2)[1] === 4
);

// 230704: 29분 32초
// - 약수 배열 구하는 법.
// - 배열 간 공통 요소 구하는 법.
// - 최대공약수, 최소공배수 구하는 법.
// - 주의) 분자에 곱할 수는 최소공배수 / 분모
function solution230704(numer1, denom1, numer2, denom2) {
  // - 최대공약수, 최소공배수
  // - 최대공약수 구하는 법을 알고 있나?
  //  - 약수 배열 만들기. 공통된 요소로 다시 배열 만들기. sorting.
  // - 최소공배수 구하는 법을 알고 있나?
  //  - 최대공약수 * 대상1 / 최대공약수 * 대상2 / 최대공약수
  // - 이런 건 외워야 하나? 그때그때 논리적으로 떠올려낼 수 있기만 하면 될까?

  const 분모1약수 = [];
  const 분모2약수 = [];

  for (i = 1; i <= denom1; i++) {
    if (denom1 % i === 0) {
      분모1약수.push(i);
    }
  }

  for (i = 1; i <= denom2; i++) {
    if (denom2 % i === 0) {
      분모2약수.push(i);
    }
  }

  // 두 배열 간 공통 요소 구하기
  const 분모1분모2공약수 = [];

  분모1약수.forEach((item1) => {
    분모2약수.forEach((item2) => {
      if (item1 === item2) {
        분모1분모2공약수.push(item1);
      }
    });
  });

  // 내림차순 정렬.
  분모1분모2공약수.sort((a, b) => b - a);

  const 분모최대공약수 = 분모1분모2공약수[0];
  const 분모최소공배수 =
    (((분모최대공약수 * denom1) / 분모최대공약수) * denom2) / 분모최대공약수;

  const 분자1에곱할수 = 분모최소공배수 / denom1;
  const 분자2에곱할수 = 분모최소공배수 / denom2;

  const 분자1 = numer1 * 분자1에곱할수;
  const 분자2 = numer2 * 분자2에곱할수;
  const 분자합 = 분자1 + 분자2;
  const 분모 = 분모최소공배수;

  // 기약분수화. 즉, 공약수 구하기. 아까 해봤지?
  // 분자 분모 간의 공약수를 구해 가장 큰 수로 약분.
  const 분자약수 = [];

  for (i = 1; i <= 분자합; i++) {
    if (분자합 % i === 0) {
      분자약수.push(i);
    }
  }

  분자약수.sort((a, b) => b - a);

  let 분자분모최대공약수 = 0;

  for (item1 of 분모1분모2공약수) {
    for (item2 of 분자약수) {
      if (item1 === item2) {
        분자분모최대공약수 = item1;

        break;
      }
    }
  }

  const 기약분자 = 분자합 / 분자분모최대공약수;
  const 기약분모 = 분모 / 분자분모최대공약수;

  return [기약분자, 기약분모];
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
