// 목록
const xthp = new XMLHttpRequest();
xthp.open('get', 'bookListJson.do');
xthp.send();
xthp.onload = function() {
    let data = JSON.parse(xthp.responseText);
    data.forEach(book => {
        document.getElementById('bookList').appendChild(makeRow(book));
    });
};

const fields = ['bookCode', 'bookTitle', 'author', 'company', 'price'];

function makeRow(book = {}) {
    	let tr = document.createElement('tr')
	fields.forEach(field =>{
			let td = document.createElement('td');
		td.innerHTML = book[field];
		tr.appendChild(td);
		})
		//return tr;

    // 체크박스 생성
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);

    // 삭제 버튼
    td = document.createElement('td');
    let btn = document.createElement('button');
    btn.setAttribute('data-myid', book.bookCode);
    btn.textContent = '삭제';
    btn.addEventListener('click', removeTrElement);
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
}

document.getElementById('addBtn').addEventListener('click', addBookFnc);

function addBookFnc() {
    const code = document.getElementById('cod').value;
    const bname = document.getElementById('bname').value;
    const at = document.getElementById('author').value;
    const pd = document.getElementById('publisher').value;
    const mon = document.getElementById('money').value;

    const addAjax = new XMLHttpRequest();
	let url = 'addBook.do?bookCode=' + code + '&bookTitle=' + bname 
	         + '&author=' + at + '&company=' + pd + '&price=' + mon;
	addAjax.open('get', url); 
	addAjax.send(); 
	addAjax.onload = function() {
			 console.log(xthp.responseText)
		let result = JSON.parse(addAjax.responseText); //json이 가지고 있는 메소드 
		if (result.retCode == 'OK') {
			let newMem = { bookCode: code, bookTitle: bname, author: at, company: pd, price:mon }
			alert(result.retMsg);
			document.getElementById('list').appendChild(makeRow(newMem))
		} else {
			alert('실패');
		}
	}

}

function removeTrElement(e) { //매개변수 e(이벤트)
	console.log(e);
	let did = this.dataset.myid; 
	console.log(did);
	let tr = document.getElementById(did); 
	const delAjax = new XMLHttpRequest(); 
	delAjax.open('get', 'removeBook.do?bookCode=' + did); //URL 요청
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


document.querySelector('thead input[type="checkbox"]').addEventListener('change', allCheckFnc);

// 전체선택
function allCheckFnc() {
	console.log(this.checked);
    document.querySelectorAll('#bookList tr')
        .forEach(checkbox => checkbox.children[0].children[0].checked = this.checked);
}

// 선택삭제
document.getElementById('delBtn').addEventListener('click', removeMemberFnc);

function removeMemberFnc() {
    const targetTr = document.querySelectorAll('#bookList tr');
    for (let tr of targetTr) {
		console.log(tr.children[0].children[0].checked);
        if (tr.children[0].children[0].checked) {
            tr.remove();
        }
    }
}