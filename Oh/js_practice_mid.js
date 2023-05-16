// //생성자 함수 : 상품 객체를 생성해보자. //생성자 함수는 잊지말고 new를 넣기

// function Item(title, price){
//     // this = {};

//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`가격은 ${price}원 입니다.`);
//     }

//     //return this;
// }

// const item1 = new Item("인형", 3000);
// const item2 = new Item("가방", 4000);
// const item3 = new Item("지갑", 9000);

// console.log(item1, item2, item3);

// item3.showPrice();

//객체 메소드

// let n = "name";
// let a = "age";

// const user = {
//     [n] : "Mike",
//     [a] : 30,
//     [1 + 4] : 5,
// };

// console.log(user);

// //
// function makeObj(key, val){
//     return{
//         [key] : val
//     }
// }

// const obj = makeObj("나이", 33)

// console.log(obj);

// //
// const user = {
//     name : "Mike",
//     age : 30,
// };

// const user2 = Object.assign(user);
// user2.name = "Tom";

// console.log(user1);
// console.log(user2);

// //
// const user = {
//     name : "Mike",
//     age : 30,
// };

// const result = Object.keys(user);

// console.log(result);

// //
// const user = {
//     name : "Mike",
//     age : 30,
// };

// const result = Object.values(user);

// console.log(result);

// //
// const user = {
//     name : "Mike",
//     age : 30,
// };

// const result = Object.entries(user);

// console.log(result);

// //
// let arr = [
//     ["mon", "월"],
//     ["tue", "화"],
// ];

// const result = Object.fromEntries(arr);

// console.log(result)

// // symbol
// // 다른 개발자가 만들어 놓은 객체
// const user = {
//     name : "Mike",
//     age : 30,
// };

// // 내가 작업
// const showName = Symbol("show name");
// user[showName] = function () {
//     console.log(this.name);
// };

// user[showName]();

// // 사용자가 접속하면 보는 메세지
// for (let key in user) {
//     console.log(`His ${key} is ${user[key]}.`);
// }

// // 문자열 메소드

// let list = [
//     "01. 들어가며",
//     "02. JS의 역사",
//     "03. 자료형",
//     "04. 함수",
//     "05. 배열",
// ];

// let newList = [];

// for(let i=0;i<list.length;i++){
//     newList.push(list[i].slice(4));
// };

// console.log(newList);

// // 금칙어 : 콜라

// function hasCola(str){
//     if(str.indexOf('콜라') > -1){
//         console.log('금칙어가 있습니다.');
//     } else {
//         console.log('통과')
//     }
// };

// hasCola("와 사이다가 짱이야!"); // -1
// hasCola("무슨소리, 콜라가 최고"); 
// hasCola("콜라"); // 0

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 없으면 false 반환

function hasCola(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과')
    }
};

hasCola("와 사이다가 짱이야!"); // -1
hasCola("무슨소리, 콜라가 최고"); 
hasCola("콜라"); // 0