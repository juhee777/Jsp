/**
 * ary1.js
 * forEach, filter, map, reduce
 */

const numAry = [23, 27, 6, 41, 30, 12];
let result = 0;

let evenSum = function(elem, idx, ary){ //배열요소, 인덱스, 배열자체
	console.log(elem, idx, ary);//각 요소 출력
	if(elem % 2 == 0){ //짝수 합 계산
		result += elem;
	}
};

let oddSum = function(elem, idx, ary){
	console.log(elem, idx, ary);
	if(elem % 2 == 0){ //홀수 합 계산
		result += elem;
	}
};
//35보다 작은 값들의 합을 저장.
let less35 = function(elem, idx, ary){
	if(elem < 35){
		result += elem;
	}	
}

numAry.forEach(evenSum); //매개값으로 함수.
console.log('짝수합은 ', result);

numAry.forEach(oddSum); //매개값으로 함수.
console.log('홀수번째의 값은 ', result);

numAry.forEach(less35); //매개값으로 함수.
console.log('35보다 작은 값의 합 ', result);

const dupAry = [10, 27, 32, 55, 27, 10];
const ary = []; //indexOf(10) => 인덱스값을 반환. -1을 반환.
//push() 배열에 값을 추가할때

//중복된 값을 제거한 배열을 ary에 등록
dupAry.forEach(function(elem){
	if(ary.indexOf(elem) == -1){ //elem이 ary배열에 존재하면 해당 인덱스 번호 반환, elem이 ary배열에 없으면(찾을 수 없으니) -1을 반환
		ary.push(elem);
	}
});
console.log(ary);