/**
 * func1.js
 * 함수정의문.
 */

 function sum(a = 0, b = 0){
	//if(b == nundefined){
		//return a;
	//}
	return a + b;
 }
 //함수표현식
sum = function sum (a = 0, b = 0){
	return a + b;
 }
 console.log(sum(30, 40));
 
 let result = sum(10, 20);
 result = sum(10);
 console.log('결과: ', result);
 
 let name = "홍길동";
 let age = 20;
 
 const obj = {
	name,
	age
 }
 
 function showObj(obj = {name: '홍길순', age: 25}){ //함수에서 사용하기 위한 매개변수, 위의 obj와는 다름
	return obj.name + ' - ' + obj.age;
 }
 console.log(showObj);
 
 
 function showItem(item){
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
	
	days.forEach(function(val){//배열의 요소, 인덱스 , 배열의 그 자체
		let span = document.createElement('span');
		span.innerHTML = val + " ";
		item.appendChild(span);
	});
	result = sumAry([1, 2, 3, 4, 5]);
 	console.log('결과: ', result);
	
	
	function sumAry(ary = []){
	let sum = 0;
	for(let i=0; i<ary.length; i++){
		sum += ary[i];
	}
	return sum;
 }
 }//end of showItem.
 
 showItem(document.getElementById('show'));
 
 console.log(window);