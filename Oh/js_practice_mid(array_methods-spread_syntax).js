// //Array methods
// //forEach

// let arr = ["Mike", "Tom", "Jane"];

// arr.forEach((name, index) =>{
//     console.log(`$(index + 1). ${name}`);
// });

// //find  findIndex

// let Num = [1, 2, 3, 4, 5];

// const result = Num.find((item) => {
//     return item % 2 === 0;
// });

// console.log(result);

// //find / findIndex

// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.find((item) => {
//     return item % 2 === 0;
// });

// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.filter((item) => {
//     return item % 2 === 0;
// });

// console.log(result);

// // find / findIndex

// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tom", age: 10},
// ];

// const result = userList.findIndex((user) => {
//     if (user.age < 19) {
//         return true;
//     }
//     return false;
// });

// console.log(result);

// //arr.map()

// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tom", age: 10},
// ];

// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         id: index +1,
//         isAdult: user.age > 19.
//     });
// });

// console.log(newUserList);
// console.log(userList);

// //join, split

// let arr = ["안녕", "나는", "철수야"];

// let result = arr.join("-");

// console.log(result);

// //split

// const users = "Mike,Jane,Tom,Tony";

// const result = users.split(",");

// console.log(result);

// //

// let str = "Hello, My name is Mike.";
// const result = str.split("");

// console.log(result);

// //Array.isArray()

// let user = {
//     name: "Mike",
//     age: 30,
// };

// let userList = ["Mike", "Tom", "Jane"];

// console.log(typeof user);
// console.log(typeof userList);

// console.log(Array.isArray(user));
// console.log(Array.isArray(userList));

/*************************
 arr.sort()
 배열 재정렬
 주의! 배열 자체가 변경됨
 인수로 정렬 로직을 담은 함수를 받음
 * ***************************/

//  let arr = [27, 8, 5, 13];

//  //8, 27, 5, 13
//  //5, 8, 27, 13
//  //5, 8, 13, 27

//  arr.sort((a,b) => {
//     console.log(a,b);
//     return a - b;
//  });

//  console.log(arr);

/*********************
 arr.reduce()
 인수로 함수를 받음
 (누적 계산값, 현재값) => {return 계산값};
 * ********************/

//  //배열의 모든수 합치기

//  let arr = [1, 2, 3, 4, 5];

//  //for, for of, forEach

//  const result = arr.reduce((prev, cur) => {
//     return prev + cur;
//  }, 100);

//  console.log(result);

// //
// let userList = [
//     { name : "Mike", age: 30 },
//     { name : "Tom", age: 10},
//     { name : "Jane", age: 27},
//     { name : "Sue", age: 26},
//     { name : "Harry", age: 43},
//     { name : "Steve", age: 60},
// ];

// let result = userList.reduce((prev, cur) => {
//     return (prev += cur.age);
// }, 0);

// console.log(result);

// //
// let userList = [
//     { name : "Mike", age: 30 },
//     { name : "Tom", age: 10},
//     { name : "Jane", age: 27},
//     { name : "Sue", age: 26},
//     { name : "Harry", age: 43},
//     { name : "Steve", age: 60},
// ];

// let result = userList.reduce((prev, cur) => {
//     if (cur.name.length === 3) {
//         prev.push(cur.name);
//     }
//     return prev;
// }, []);

// console.log(result);

// //arr.reduceRight();

/********************
 나머지 매개변수
 user 객체를 만들어 주는 생성자 함수를 만들겁니다.
 * ********************/

//  function User(name, age, skills, etc) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
//  }

//  const user1 = new User("Mike", 30, "html", "css");
//  const user2 = new User("Tome", 20, "JS", "React");
//  const user3 = new User("Jane", 10, "English");

//  console.log(user1);
//  console.log(user2);
//  console.log(user3);

/*********************
 전개 구문
 arr1을  [4,5,6,1,2,3]으로
 * ********************/

//  let arr1 = [1,2,3];
//  let arr2 = [4,5,6];

//  arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
//  });

//  arr1 = [...arr2, ...arr1];

//  console.log(arr1);

// let user = { name: "Mike"};
// let info = { age: 30};
// let fe = ["JS", "React"];
// let lang = ["Korean", "English"];

// user = Object.assign({}, user, info, {
//     skills: [],
// });

// fe.forEach((item) => {
//     user.skills.push(item);
// });
// lang.forEach((item) => {
//     user.skills.push(item);
// });

// user = {
//     ...user,
//     ...info,
//     skills: [...fe, ...lang],
// };

// console.log(user);

// console.log(user);