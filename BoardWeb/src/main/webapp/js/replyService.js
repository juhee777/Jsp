/**
 * replyService.js
 * 목록, 단건, 등록, 삭제
 */

const svc = {
	//목록.
	replyList(bno = 1, successCall) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'replyListJson.do?bno=' + bno);
		xhtp.send();
		xhtp.onload = function() {
			let data = JSON.parse(this.responseText);
			console.log(data);
			data.forEach(reply => {
				let li = cloneRow(reply);
				document.querySelector('div.content>ul').appendChild(li);
			})
		};
	},
	//단건조회
	getReply() {

	},
	//등록.
	addReply(rvo = { replyer, reply, bno }, successCall) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('post', 'addReply.do'); //post요청을 addReply.do로 설정
		xhtp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhtp.send('bno=' + rvo.bno + '&reply=' + rvo.reply + '&replyer=' + rvo.replyer);
		xhtp.onload = successCall; //요청되었을 때 실행되는 콜백함수   
	},
	//삭제.
	removeReply(rno = 1, successCall) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'removeReply.do?rno=' + rno);
		xhtp.send();
		xhtp.onload = successCall;
	}
}
