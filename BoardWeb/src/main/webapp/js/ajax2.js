/**
 * ajax2.js
 * XMLHttpRequest 객체
 */
const xhtp = new XMLHttpRequest(); 
xhtp.open('get', 'data/MOCK_DATA.json');
xhtp.send();//실행
xhtp.onload = function(){
	let data = JSON.parse(xhtp.responseText); //json문자열 -> 자바스크립트 객체타입으로 반환
	//console.log(data);
	//DOM메소드 활용해서 페이지 작성
	data.forEach(function(emp){
		console.log(emp);
		document.getElementById('list').appendChild(makeRow(emp));
		
	});
}


let fields = ['id', 'first_name', 'email', 'salary'];
function makeRow(obj = {}){
	let tr = document.createElement('tr'); //tr생성
	fields.forEach(field => {
		let td = document.createElement('td'); //td생성
		td.innerHTML = obj[field]; //생성한 td에 obj[field]값을 할당
		tr.appendChild(td); //생성한 td를 tr의 요소로 추가 <tr><td>
	})
	return tr; //완성된 tr을 반환
} //end of makeRow()


const xhtm = new XMLHttpRequest();
xhtm.open('get', 'loginForm.do');
xhtm.send();
xhtm.onload = function(){
	console.log(xhtm);
	//document.getElementById('show').innerHTML = xhtm.responseText;
}

console.log('end');