/**
 * 
 */

 //목록
 const xthp = new XMLHttpRequest();
 xthp.open('get', 'bookListJson.do');
 xthp.send();
 xthp.onload = function(){
	let data = JSON.parse(xthp.responseText)
	data.forEach(list => {
		document.getElementById('list').appendChild(makeRow(list))
	})
 }

 document.getElementById('addBtn').addEventListener('click', addMemberFnc);
 function addMemberFnc() {
	const code = document.getElementById('cod').value;
	const bname = document.getElementById('bame').value;
	const at = document.getElementById('author').value;
	const pd = document.getElementById('publisher').value;
	const mon = document.getElementById('money').value;

	document.getElementById('bookList').appendChild(addRow({
		code, bname, at, pd, mon
	}))

	document.getElementById('cod').value;
	document.getElementById('bame').value;
	document.getElementById('author').value;
	document.getElementById('publisher').value;
	document.getElementById('money').value;
 }

 function addRow(list ={code, bname, at, pd, mon}){
	const tr = document.createElement('tr');
	tr.addEventListener('click', showDetailFnc);
 }


 const fields = ['bookCode', 'bookTitle', 'author', 'company', 'price']

 function makeRow(book){
	let tr = document.createElement('tr')
	fields.forEach(field =>{
			let td = document.createElement('td');
		td.innerHTML = book[field];
		tr.appendChild(td);
		})
		return tr;
	}
	let td = document.createElement('td'); //<td></td>
	let btn = document.createElement('button'); //<button></button>
	btn.setAttribute('data-myid', book.cod);
	btn.addEventListener('click', removeTrElement)
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
		//체크박스 생성
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type','checkbox');

	td.appendChild(btn);
	tr.appendChild(td)

	function removeTrElement(e){
		console.log(e)
	}

	document.getElementById('addBtn').addEventListener('click', function(){

	})






	document.querySelector('thead input[type="checkbox"]').addEventListener('change',allCheckFnc);

	//전체선택
function allCheckFnc(){
	console.log(this.checked); 
	document.querySelectorAll('bookList tr')
	    .forEach(item => item.children[5].children[0].checked = this.checked); //forEach안에 있는 함수를 실행
}
//선택삭제.
function removeMemberFnc(){
	let targetTr = document.querySelectorAll('#bookList tr');
	for(let tr of targetTr){
		console.log(tr.children[5].children[0].checked);
		if(tr.children[5].children[0].checked){
			tr.remove();
		}
	}
}