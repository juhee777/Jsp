/**
 * dom1.js
 */
document.getElementById('fruit').style.display = 'none';

document.querySelector('table.table tr:nth-of-type(5)').setAttribute('align', 'center');//가운데 정렬

//페이지 로딩하면서 회원3명 출력.
console.log(myMembers);//배열들고옴
for (let mem of myMembers) {
	document.getElementById('memberList').appendChild(addRow(mem));
}

//추가버튼 클릭이벤트 등록.
document.getElementById('addBtn').addEventListener('click', addMemberFnc); //추가
document.getElementById('modBtn').addEventListener('click', modMemberFnc); //수정
document.getElementById('delBtn').addEventListener('click', removeMemberFnc); //선택삭제

//체크박스 전체선택/해제 힌트
document.querySelector('thead input[type="checkbox"]').addEventListener('change',allCheckFnc);
//this => 1.이벤트(이벤트대상), 2.함수(function인 경우 this는 window), 3.객체(객체자신)
const obj = {
	name: '홍길동',
	age: 20,
	showInfo(){
		return '이름은 ' + this.name + ', 나이는 ' + this.age;
	}
}
obj.showInfo();

//전체선택
function allCheckFnc(){
	//tbody의 하위에 있는 모든 input[type="checkbox"]의 속성을 변경
	console.log(this.checked); //this는 input태크 , 활용하면 편하게 작업 가능	//let checkVal = this.checked;
	document.querySelectorAll('#memberList tr') //this => whindows객체
	    .forEach(item => item.children[5].children[0].checked = this.checked); //forEach안에 있는 함수를 실행
			//item이라는 매개값을 받아서 블럭을 실행 
}
//선택삭제.
function removeMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr');
	for(let tr of targetTr){
		console.log(tr.children[5].children[0].checked);
		if(tr.children[5].children[0].checked){
			tr.remove();
		}
	}
}

function addMemberFnc() {
	const id = document.getElementById('mid').value;
	const name = document.getElementById('mname').value;
	const phone = document.getElementById('mphone').value;
	const point = document.getElementById('mpoint').value;

	if (!id || !name || !phone || !point) {
		alert("필수값을 입력.");
		return;
	}

	document.getElementById('memberList')
		.appendChild(addRow({ id, name, phone, point }));

	document.getElementById('mid').value;
	document.getElementById('mname').value;
	document.getElementById('mphone').value;
	document.getElementById('mpoint').value;
}//end of addMemberFnc()

function addRow(member = { id, name, phone, point }) { //member 오브젝트타입 -> 4가지 속성(id, name, phone, point)
	// tr > td * 4
	const tr = document.createElement('tr'); //<tr>생성
	tr.addEventListener('click', showDetailFnc); //'click'이벤트가 발생할때 showDetailFnc함수가 호출
	
	// for(Student std : stuList)
	for (let prop in member) {
		const td = document.createElement('td'); //<td>생성
		td.innerHTML = member[prop];// member.id, member.name, member.phone
		tr.appendChild(td);//()안에 있는게 하위요소로 지정하겠다. <td>요소를 <tr>에 추가 => <tr><td></td></tr>
	}
	//삭제버튼 생성
	//<tr><td><button>삭제<button></td></tr>
	let td = document.createElement('td'); //<td></td>
	let btn = document.createElement('button'); //<button></button>
	btn.addEventListener('click',removeTrElement)
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	//체크박스 생성
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type','checkbox');
	btn.addEventListener('click',allchecking);
	td.appendChild(btn);
	tr.appendChild(td)
	
	return tr;
}//end of addRow()

//이벤트 핸들러 함수
function removeTrElement(e){ //매개변수 e(이벤트)
	console.log('btn',e);
	e.stopPropagation(); //상위요소로 이벤트전파 차단
	//console.log(this.parentElement.parentElement.remove()); //this가 버튼
	this.parentElement.parentElement.remove(); //parentElement가 상위 this의 상위의 상위 tr을 삭제
}

function showDetailFnc(e){
	console.log('btn',e);
	//tr의 자식요소의 값을 입력 input에 반환
	console.dir(this.children[1].innerText);
	document.getElementById('mid').value = this.children[0].innerText;
	document.getElementById('mname').value = this.children[1].innerText;
	document.getElementById('mphone').value = this.children[2].innerText;
	document.getElementById('mpoint').value = this.children[3].innerText;
}

function modMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr')
	// 입력화면의 회원아이디 값을 가져와서 mid변수 저장
	let mid = document.getElementById('mid').value; //입력값이 mid
	let mname = document.getElementById('mname').value; 
	let mphone = document.getElementById('mphone').value; 
	//let mpoint = document.getElementById('mpoint').value; 
	for(let tr of targetTr){
		//sonsole.log(tr.children); //tr.children-> tr의 자식요소 -> [td,td,
		console.log(tr.children[0].innerText, mid); 
		if(tr.children[0].innerText == mid){ //두개의 값이 같을 떄
		   tr.children[1].innerText = mname; //값을 넣어줌
		   tr.children[2].innerText = mphone;
		   tr.children[3].innerText = document.getElementById('mpoint').value; 
		}
	}
}//end of modMemberFnc()

function allchecking(){
	let allCheck = document.querySelector('thead input[type="checkbox"]');
	if(!this.checked){
		allCheck.checked = false;
	}
}
