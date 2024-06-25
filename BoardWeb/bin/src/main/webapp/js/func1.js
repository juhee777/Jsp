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
 console.log(sum(30, 40)); //결과 70
 
 let result = sum(10, 20); //result 변수에 sum(10, 20)의 결과를 저장
 result = sum(10); //sum(10)을 호출하면 10과 기본값 0을 더해서 10을 돌려줌
 console.log('결과: ', result); //결과: 10
 
 let name = "홍길동";
 let age = 20;
 
 const obj = { //obj 객체
	name,
	age
 }
 
 function showObj(obj = {name: '홍길순', age: 25}){ //함수에서 사용하기 위한 매개변수(기본값), 위의 obj와는 다름
	return obj.name + ' - ' + obj.age;
 }
 console.log(showObj);
 
 
 function showItem(item){//
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
	
	days.forEach(function(val){//배열의 요소, 인덱스 , 배열의 그 자체
		let span = document.createElement('span'); 
		span.innerHTML = val + " ";
		item.appendChild(span); //span을 item의 자식요소로 추가
	});
	result = sumAry([1, 2, 3, 4, 5]);
 	console.log('결과: ', result); //결과: 15 ->배열요소를 모두 더함
	
	function sumAry(ary = []){
	let sum = 0; //초기화
	for(let i=0; i<ary.length; i++){ //ary배열을 순회하면서 sum에 누적
		sum += ary[i];
	}
	return sum; //sum값 반환
 }
 }//end of showItem.
 
 showItem(document.getElementById('show')); 
 
 console.log(window);