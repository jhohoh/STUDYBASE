// // if, else, else, if
// //19살이면 수능 잘치세요. 라는 문구를 보여주기

// const age = 19;

// if(age > 19){
//     console.log('환영합니다.');
// } else if(age === 19){
//     console.log('수능 잘치세요.');
// } else {
//     console.log('안녕히 가세요.');
// }

// console.log('---------------------------')

// //OR
// //이름이 TOM 이거나, 성인이면 통과

// const name = "Mike";
// const age = 30;

// if(name === 'Tom' || age>19){
//     console.log('통과');
// }

// //AND
// //이름이 Mike 이거나, 성인이면 통과

// const name = "Mike";
// const age = 10;

// if(name === 'Mike' && age>19){
//     console.log('통과');
// } else {
//     console.log('돌아가.')
// }

// //우선순위
// //남자이고, 이름이 Mike 이거나 성인이면 통과

// const gender = 'F';
// const name = 'Jane';
// const isAdult = true;

// //if(gender === 'M' && name === 'Mike' || isAdult)
// if(gender === 'M' && (name === 'Mike' || isAdult)){
//     console.log('통과')
// } else{
//     console.log('돌아가.')
// }

// //for문
// //1부터 10까지 로그

// for(let i=1;i <= 10 ; i++){
//     console.log(i)
// } 

// //while문
// //0부터 9까지 로그

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// //break

// while(true){
//     let answer = confirm('계속 할까요?');
//     if(!answer){
//         break;
//     }
// }

// //continue
// //짝수만

// for(let i = 0; i < 10; i++){
//     if(i%2){
//         continue;
//     }
//     console.log(i)
// }

// //사과 : 100원
// //바나나 : 200원
// //키위 : 300원
// //멜론 : 500원
// //수박 : 500원
// //사고 싶은 과일을 물어보고 가격 알려주기

// let fruit = prompt('무슨 과일을 사고 싶나요?');

// switch(fruit){
//     case '사과' :
//         console.log('100원 입니다.');
//         break;
//     case '바나나' :
//         console.log('200원 입니다.');
//         break;
//     case '키위' :
//         console.log('300원 입니다.');
//         break;
//     case '멜론' :
//     case '수박' :
//         console.log('500원 입니다.');
//         break;
//     default:
//         console.log('그런 과일은 없습니다.');
// }

// //함수 작성(유지,보수가 쉬움)

// function showError(){
//     alert('에러가 발생했습니다. 새로고침을 해주세요.');
// }

// showError();

// //매개변수가 있는 함수

// let msg = 'Hello'; //전역 변수(global varable) : 어디서나 접근
// console.log('함수 호출 전')
// console.log(msg)

// function sayHello(name){
//     if(name){
//         msg += `, ${name}`;
//     }
// console.log('함수 내부') //지역 변수(local varable) : 함수 내부에서만 접근
//     console.log(msg);
// }

// sayHello('Mike');
// sayHello('함수 호출 후');
// sayHello(msg);

// //전역 변수와 지역 변수(서로 간섭을 받지 않음)

// let msg = 'welcome';

// function sayHello(name){
//     let msg = "Hello"
//     console.log(msg + ' ' + name);
// }

// sayHello('Mike');
// console.log(msg)

// let name = "Mike";

// function sayHello(name){
//     console.log(name)
// }

// sayHello();
// sayHello('Jane');

// //OR

// function sayHello(name = 'friend'){
//     let msg = `Hello, ${name}`
//     console.log(msg)
// }

// sayHello();
// sayHello('Jane');

// //retrun으로 값 반환

// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(2,3);
// console.log(result)

// function showError(){
//     alert('에러가 발생했습니다.');
//     return; //undefined을 반환함, return 오른쪽 값을 반환하고 종료함
//     alert('이 코드는 절대 실행되지 않습니다.')
// }
// const result = showError();
// console.log(result);

//함수 선언문 : 어디서든 호출 가능
//한번에 한 작업에 집중
//읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

// //함수 선언문

// showError();

// function showError(){
//     console.log('error');
// }

// //화살표 함수(일반 함수와는 달리 자신만의 this를 가지지않음, 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴)

// let showError = () => {
//     console.log("error");
// }

// const sayHello = (name) => {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// };

// const add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// };

// //위에 것을 더 간단하게

// const add = (num1, num2) => num1 + num2;

//함수 표현식보다는 함수 선언문이 더 자유로움
//화살표함수를 자주 쓰기때문에 익숙해질 것

//Object - 접근, 추가 삭제
//접근 = ".","['age']"
//추가 = ".", "['hairColor']"
//삭제 = "delete" ex)delete superman.hairColor;
//프로퍼티 존재 여부 확인 ex)'birthDay'in superman; // false

// //객체

// const superman = {
//     name : 'clark',
//     age : 30,
// }

// delete superman.age;
// console.log(superman)

// function makeObject(name, age){
//     return{
//         name : name,
//         age : age,
//         hobby : 'football'
//     }
// }

// const Mike = makeObject("Mike", 30);
// console.log(Mike);

// console.log('age' in Mike)
// console.log('birthday' in Mike)

// //객체 in

// function isAdult(user){
//     if(!('age' in user) || // user에 age가 없거나
//     user.age < 20){        // 20살 미만이거나
//         return false;
//     }
//     return true;
// }

// const Mike = {
//     name : 'Mike',
//     age : 30,
// };

// const Jane = {
//     name : "Jane"
// };

// console.log(isAdult(Jane))

// //객체 for ... in

// const Mike = {
//     name : "Mike",
//     age : 30,
// };

// for(x in Mike){
//     console.log(Mike[x]) // Mike['age']
// }

// //method : 객체 프로퍼티에 할당 된 함수

// let boy = {
//     name : "Mike",
//     showName : function () {
//         console.log(this.name)
//     }
// };

// let man = boy;
// boy = null;

// man.showName();

// let boy = {
//     name : "Mike",
//     sayThis : () => {
//         console.log(this);
//     }
// };

// boy.sayThis();
//window 번역개체를 가리키기 때문에 객체 사용 시 화살표 함수는 이용하지않는 것이 좋음

//배열(Array) : 순서가 있는 리스트
//문자 뿐만 아니라 숫자, 객체, 함수 등도 포함할 수 있음
//length : 배열의 길이
//push : 배열 끝에 추가
//pop : 배열 끝 요소 제거
//shift, unshift : 배열 앞에 제거/추가
//배열을 쓰는 가장 큰 이유는 반복(for)을 위해서

// array

let days = ["mon", "tue", "wed"]

days[1] = '화요일'
days.push("thu");
days.unshift("sun");

for(let index=0 ; index < days.length; index++){
    console.log(days[index]);    
}

for(let x of days){
    console.log(x);    
}
