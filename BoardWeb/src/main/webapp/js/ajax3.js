/**
 * ajax3.js
 */
//목록가져오기
const xthp = new XMLHttpRequest();
xthp.open('get', 'membersAjax.do');
xthp.send();
xthp.onload = function() {
	console.log(xthp);
	let data = JSON.parse(xthp.responseText);
	data.forEach(user => {
		document.getElementById('list').appendChild(makeRow(user))
	})
}
//json 문자열의 필드이름을 활용
const fields = ['userId', 'userName', 'userPw', 'responsibility']
function makeRow(obj = {}) {
	let tr = document.createElement('tr');
	tr.setAttribute('id', obj.userId); //<tr id='user01' ....>
	tr.addEventListener('dblclick', function(e) {
		document.getElementById('myModal').style.display = 'block';
		//선택된 사용자의 이름, 비번을 모달에 출력
		console.log(e, this);
		document.getElementById('modify_name').value =
			this.children[1].innerHTML;
		document.getElementById('modify_pass').value =
			this.children[2].innerHTML;
		document.getElementById('modify_id').value =
			this.children[0].innerHTML;
	})
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);
	})
	//삭제버튼
	let td = document.createElement('td'); //<td></td>
	let btn = document.createElement('button'); //<button></button>
	btn.setAttribute('data-myid', obj.userId);
	btn.addEventListener('click', removeTrElement)
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	return tr;
} //end of makeRow()

function removeTrElement(e) { //매개변수 e(이벤트)
	console.log(e);
	let did = this.dataset.myid; //data-delId
	console.log(did);
	//did = e.target.parentElement.parentElement.children[0].innerText;
	let tr = document.getElementById(did);
	const delAjax = new XMLHttpRequest();
	delAjax.open('get', 'delAjax.do?id=' + did);
	delAjax.send();
	delAjax.onload = function() {
		let result = JSON.parse(delAjax.responseText);
		console.log(result);
		if (result.retCode == 'OK') {
			alert('정상삭제');
			tr.remove();
		}
	}
}
//수정이벤트
document.getElementById('modBtn').addEventListener('click', function() {
	let id = document.getElementById('modify_id').value; //user99
	let name = document.getElementById('modify_name').value;
	let pass = document.getElementById('modify_pass').value;
	console.log('updAjax.do?nm=' + name + '&id=' + id + '&pw=' + pass);
	
	
	//ajax생성
	//정상적으로 정보가 업데이트되면 화면 수정
	//수정이 안됐으면 화면수정X
	const updAjax = new XMLHttpRequest();
	updAjax.open('get', 'updAjax.do?nm=' + name + '&id=' + id + '&pw=' + pass);
	updAjax.send();
	updAjax.onload = function() {
		let result = JSON.parse(updAjax.responseText);
		console.log(result);
		if (result.retCode == 'OK') {
			console.log(this)
			document.getElementById('modify_name').value =
				this.children[1].innerHTML;
			document.getElementById('modify_pass').value =
				this.children[2].innerHTML;
			alert('정상수정');
		} else {
			alert('수정실패')
		}
	}


	let targetTr = document.getElementById(id);
	targetTr.children[1].innerHTML = name;
	targetTr.children[2].innerHTML = pass;

	//모달창 닫기
	document.getElementById('myModal').style.display = 'none';

})
//등록버튼을 누르면 데이터 전송
//등록이벤트
document.getElementById('addBtn').addEventListener('click', function() {
	let id = document.getElementById('uid').value;
	let pw = document.getElementById('upw').value;
	let nm = document.getElementById('uname').value;
	let auth = document.getElementById('auth').value;

	const addAjax = new XMLHttpRequest();
	let url = 'addAjax.do?id=' + id + '&pw=' + pw + '&nm=' + nm + '&auth=' + auth;
	addAjax.open('get', url); //페이지 지정
	addAjax.send(); //실행
	addAjax.onload = function() {
		let result = JSON.parse(addAjax.responseText); //json이 가지고 있는 메소드 
		if (result.retCode == 'OK') {
			let newMem = { userId: id, userName: nm, userPw: pw, responsibility: auth }
			alert(result.retMsg);
			document.getElementById('list').appendChild(makeRow(newMem))
		} else {
			alert('실패');
		}
	}
})

//id존재하는지 체크하는 이벤트
document.getElementById('uid').addEventListener('change', function() {
	let checkId = this.value;

	const checkAjax = new XMLHttpRequest();
	checkAjax.open('get', 'checkIdAjax.do?id=' + checkId)
	checkAjax.send();
	checkAjax.onload = function() {
		let result = JSON.parse(checkAjax.responseText);
		if (result.retCode == 'Exist') {
			alert('이미 존재하는 아이디입니다.');
			document.querySelector('#addBtn').disabled = true;
		} else {
			alert('등록가능한 아이디입니다.')
			document.querySelector('#addBtn').disabled = false;
		}
	}
})



