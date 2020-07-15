//Class와 객체생성자 활용 및 prototype
function Cars(brand, modelName, grade) {
  this.brand = brand;
  this.modelName = modelName;
  this.grade = grade;
}

Cars.prototype.discription = function () {
  console.log(`${this.brand}는 최고의 승차감을 선사합니다.`);
};

const benz = new Cars("Mercedes benz", "benz c class", "entry");
console.log(`This car is ${benz.modelName}!`);
benz.discription();

const bmw = new Cars("BMW", "bmw 3 seires", "entry");
console.log(`This car is ${bmw.modelName} and grade is ${bmw.grade}`);
bmw.discription();

//es6 이상부터는 'class'사용이 가능해졌다. 객체생성자를 더욱 간단히 만들 수 있고 상속을 간단하게 할 수 있다.

class MiddleCars {
  constructor(brand, modelname, grade) {
    this.brand = brand;
    this.modelname = modelname;
    this.grade = grade;
  }

  discription() {
    console.log(`${this.modelname}는 최고의 승차감을 선사합니다.`);
  }
}

class Benz extends MiddleCars {
  constructor(modelname, grade) {
    super('mercedes benz', modelname, grade);
  }
}

class Bmw extends MiddleCars {
  constructor(modelname, grade) {
    super('bmw', modelname, grade);
  }
}

const benzEclass = new Benz('benz e class','middle');
console.log(benzEclass);

benzEclass.discription();

const bmw5series = new Bmw('bmw 5 seires', 'middle');
console.log(bmw5series);
bmw5series.discription();