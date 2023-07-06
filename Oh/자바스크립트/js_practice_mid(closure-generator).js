// //클로저(Closure)

// function makeCounter(){
//     let num = 0; //은닉화

//     return function(){
//         return num++;
//     };
// };

// let counter = makeCounter();

// console.log(counter()); //0
// console.log(counter()); //1
// console.log(counter()); //2


// setInterval, clearInterval

let num = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    };
};

const tId = setInterval(showTime, 1000);


// // call, apply

// const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

// const minNum = Math.min.apply(null, nums);
// // = Math.min.apply(null, [3, 10, 1, 6, 4])

// const maxNum = Math.max.apply(null, ...nums);
// // = Math.min.apply(null, 3, 10, 1, 6, 4)

//
// const mike = {
//     name : "Mike",
// };

// const tom = {
//     name : "Tom",
// };

// function showThisName(){
//     console.log(this.name);
// };

// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// };

// update.call(mike, [1999, "singer"]);
// console.log(mike);

// update.call(tom, [2002, "teacher"]);
// console.log(tom);

// // update.apply(mike, [1999, "singer"]);
// // console.log(mike);

// // update.apply(tom, [2002, "teacher"]);
// // console.log(tom);


// // bind

// const mike = {
//     name : "Mike",
// };

// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1980, "police");
// console.log(mike);


// const user = {
//     name: "Mike",
//     showName: function () {
//         console.log(`hello, ${this.name}`);
//     },
// };

// user.showName();

// let fn = user.showName;

// fn.call(user);
// fn.apply(user);


// // 상속, 프로토타입(Prototype)

// const car = {
//     wheels: 4,
//     drive(){
//         console.log("drive..");
//     },
// };

// const bmw = {
//     color : "red",
//     navigation: 1,
// };

// bmw.__proto__ = car;

// const x5 = {
//     color : "white",
//     name : "x5",
// };

// x5.__proto__ = bmw;


// const Bmw = function (color) {
//     this.color = color;
// };

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//     console.log("drive..");
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function () {
//     console.log("STOP!");
// };

// const x5 = new Bmw("red");
// const z4 = new Bmw("blue");


//// 클래스(Class)

// const User = function (name, age) {
//     this.name = name;
//     this.age = age;
//     // this.showName = function(){
//     //     console.log(this.name);
//     // };
// };

// User.prototype.showName = function () {
//     console.log(this.name);
// };

// const mike = new User("Mike", 30);

// class User2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName() {
//         console.log(this.name);
//     }
// }

// const tom = new User2("Tom", 19);

// // 상속(extens)

// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("drive..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }

// class Bmw extends Car {
//     park() {
//         console.log("PARK");
//     }
// }

// const z4 = new Bmw("blue");

// //메소드 오버라이딩(method overriding)

// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("drive..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }

// class Bmw extends Car {
//     park() {
//         console.log("PARK");
//     }
//     stop() {
//         super.stop();
//         console.log("OFF");
//     }
// }

// const z4 = new Bmw("blue");

// // 오버라이딩(overriding)

// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("drive..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }

// class Bmw extends Car {
//     constructor() {
//         super();
//     }
//     park() {
//         console.log("PARK");
//     }
// }

// const z4 = new Bmw("blue");

// //프로미스(Promise)

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("OK");
//         reject(new Error("err...."));
//     }, 1000);
// });

// console.log("시작");
// pr.then((result) => {
//     console.log(result);
// })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("끝");
//     });


// const f1 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("1번 주문 완료");
//             //rej(new Error("xx"));
//         }, 1000)
//     });
// };

// const f2 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("2번 주문 완료");
//         }, 3000);
//     });
// };

// const f3 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("3번 주문 완료");
//         }, 2000);
//     });
// };

// //Promise.race
// console.time("x");
// Promise.race([f1(), f2(), f3()])
//   .then((res) => {
//     console.log(res);
//     console.timeEnd("x");
//   });

// // console.time("시작");
// // f1()
// //   .then((res) => f2(res))
// //   .then((res) => f3(res))
// //   .then((res) => console.log(res))
// //   .catch(console.log)
// //   .finally(() => {
// //     console.timeEnd("시작");
// //   });


// //async, await

// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     });
// }

// async function showName() {
//     const result = await getName("Mike");
//     console.log(result);
// }

// console.log("시작");
// showName();


// // Generator

// function* fn() {
//     try {
//         console.log(1);
//         yield 1;
//         console.log(2);
//         yield 2;
//         console.log(3);
//         console.log(4);
//         yield 3;
//         return "finish";
//     }   catch (e) {
//         console.log(e);
//     }
// }

// const a = fn();
