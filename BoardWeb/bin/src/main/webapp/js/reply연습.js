/**
 * reply.js
 */
//댓글 -> li 생성
function makeRow(reply = {}) {
	let fields = ['replyNO', 'reply', 'replyer', 'replyDate'];
	let li = document.createElement('li');
	fields.forEach(field => {
		let span = document.createElement('span');
		span.innerHTML = reply[field];

		if (field == 'reply') {
			width = '4';
		} else if (field == 'replyDate') {
			width = '3';
		} else {
			width = '2';
		}
		span.setAttribute('class', 'col-sm-' + width);
		li.appendChild(span);
	})
	return li;


}

function cloneRow(reply = {}) {
	console.log(reply);
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);
	console.dir(template);
	template.style.display = 'block';
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNO;
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	return template;
}
//cloneRow();

//한건삭제
function deleteRow(e) {
	e.target.remove();
	const revAjax = new XMLHttpRequest();
	revAjax.open('get', 'removeReply.do?rno=' + rno);
	revAjax.send();
	revAjax.onload = function() {
		let data = JSON.parse(revAjax.responseText);
		data.forEach(mov => {
			document.querySelector()
		})
	}
}

const listAjax = new XMLHttpRequest();
listAjax.open('get', 'replyListJson.do?bno=' + bno);
listAjax.send();
listAjax.onload = function() {
	let data = JSON.parse(listAjax.responseText);
	console.log(data);
	data.forEach(reply => {
		//document.querySelector('div.content>ul').appendChild(makeRow(reply));
		document.querySelector('div.content>ul').appendChild(cloneRow(reply));
	})
}

