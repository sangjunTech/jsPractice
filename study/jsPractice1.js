//forEach 예제 배열을 순환하며 하나하나 요소를 꺼내옴

const marvelHero = [
  "캡틴아메리카",
  "아이언맨",
  "블랙펜서",
  "토르",
  { "최고의 무기": "인피니티 건틀렛" },
];

marvelHero.forEach((hero) => {
  console.log(hero);
});

//배열에서 Object 선택 후 키에 맞는 값 가져오기
console.log(marvelHero[4]["최고의 무기"]);

// map
console.clear();
const array = [1, 2, 3, 4, 5, 6];

const square = (n) => n * n;

const squared = array.map(square);
console.log(squared);

//find api

const car = [
  {
    id: 1,
    modelname: "bmw 3 series",
    grade: "premium",
  },
  {
    id: 2,
    modelname: "benz c class",
    grade: "premium",
  },
  {
    id: 3,
    modelname: "avante",
    grade: "normal",
  },
];

const normalCar = car.find((normalCar) => normalCar.id === 3);
console.log(normalCar);

console.clear();

//filter api 필터에 걸러지는 내용으로 오브젝트 재배열
const premium = car.filter((cars) => cars.grade === "premium");
console.log(premium);

console.log(premium[1].modelname);

//index of , splice
const phones = ["iphone", "galaxy", "shaome", "lg"];
const index = phones.indexOf("galaxy");

phones.splice(index, 1);

console.log(phones);
console.clear();

//slice = splice와 차이점은 slice는 기존 배열에 영향을 주지 않는다.
const phones2 = ["iphone", "galaxy", "shaome", "lg"];
const slice = phones2.slice(0, 2);

console.log(slice);
console.log(phones2);

//unshift 배열의 가장 앞에 요소 삽입

const numberArray = [1, 2, 3, 4, 5];

numberArray.unshift(7);
console.log(numberArray);

//concat 배열 2개를 합쳐 '새로운'배열 생성

const arr1 = ["안녕", "잘가", "수고해"];
const arr2 = ["상준", "유진", "만두"];

const concate = arr1.concat(arr2);

console.log(concate);

//join 구분할 수 있는 것을 추가해 string으로 반환

const joinArr = [1, 2, 3, 4, 5];

console.log(joinArr.join());
console.log(joinArr.join(" and "));

// reduce 누적값에 현재값을 더해 초기값부터 계산

const reduceArr = [1, 2, 3, 4, 5, 6];

const reduce = reduceArr.reduce((acc, curr) => acc * curr, 1);
console.log(reduce);
console.clear();

// forEach를 활용한 countBiggerThenTen
function countBiggerThenTen(numbers) {
  let count = 0;
  numbers.forEach((n) => {
    if (n > 10) {
      count++;
    }
  });
  return count;
}

const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);

// filter를 활용한 countBiggerThenTen
function countBiggerThanTen2(numbers) {
  return numbers.filter(n => n > 10).length;
}

const count2 = countBiggerThanTen2([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count2);

//reduce를 활용한 countBiggerThenTen
function countBiggerThanTen3(numbers) {
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

const count3 = countBiggerThanTen3([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count3);
