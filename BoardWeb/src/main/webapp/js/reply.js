/**
 * reply.js
 */
//댓글목록 출력하기
let page = 1; //기본 댓글페이지가 1페이지
svc.replyList({bno, page}, replyListFnc);

//댓글목록 이벤트
document.getElementById('addReply').addEventListener('click', addReplyFnc);

//페이징 a 테그를 클릭하면 목록보여주기.
document.querySelectorAll('div.pagination a').forEach(item => { //item은 a 태그
	item.addEventListener('click', function(e){
		e.preventDefault(); //페이지이동하는 기본기능 차단
		page = item.innerHTML;
		svc.replyList({bno, page}, replyListFnc);
	})
});
//댓글건수를 활용해서 페이징계산하고 목록출력;

function makePagingFnc(){
	svc.replyTotalCnt(bno, createPageList);
}
let pagination = document.querySelector('div.pagination');
function createPageList(){
	let totalCnt = this.responseText //total건수
	console.log(totalCnt); // 632건/한페이지당 5개 => 127page
	
	let startPage, endPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 5); //127page 실제페이지를 계산할때 한페이지당 5개
	
	endPage = Math.ceil(page / 10) * 10; //130page. 현재페이지에서 보이는 끝페이지를 계산하려고 하는데 현재page가 12면  
	startPage = endPage - 9; //121페이지
	endPage = endPage > realEnd ? realEnd : endPage;
	
	prev = startPage > 1; 
	next = endPage < realEnd;
	
	//startPage, endPage, prev, next => a태그생성.
	pagination.innerHTML = '';
	if(prev){
		let aTag = document.createElement('a'); // a태그를 aTag라는 변수로 지정
		aTag.setAttribute('data-page', startPage - 1); //이전이라는 속성으로 data-page에 넣음
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&laquo"; //꺽세모양 삽입
		pagination.appendChild(aTag); //꺽세를 a태그에 삽입 <a href="#"> >> </a>
	}
	for(let p = startPage; p <= endPage; p++){
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', p); //현재페이지만 보여주는게 
		aTag.setAttribute('href', '#');
		aTag.innerHTML = p; 
		if(page == p){ //현재페이지와 같다면
			aTag.className = 'active'; //초록색 변동
		}
		pagination.appendChild(aTag);
	}
	if(next){
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage + 1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&raquo;";
		pagination.appendChild(aTag);
	}
	//실제로 실행되는 것
	document.querySelectorAll('div.pagination a').forEach(item => { //item은 a 태그 
	item.addEventListener('click', function(e){
		e.preventDefault(); //페이지이동하는 기본기능 차단
		page = item.dataset.page;
		svc.replyList({bno, page}, replyListFnc);
	})
});
	
}//end if createPageList();



//버튼이 눌러지면 실행할 함수 bno
function addReplyFnc() {
	if(!replyer){
		alert('로그인하세요!!');
		return;
	}
	
	let reply = document.getElementById('reply').value;
	if(!reply){
		alert('댓글을 등록하세요!!');
		return;
	}
	
	svc.addReply({replyer, reply, bno}, addReplyCallback); //등록
} //end of addReplyFnc()

function addReplyCallback(){
	console.log(this.responseText);
	//화면에 댓글정보목록에 추가.
	let result = JSON.parse(this.responseText);
	if(result.retCode == 'OK'){
		alert('등록성공!!');
		let li = cloneRow(result.retVal); //cloneRow함수에서 댓글정보를 받아서 화면에 추가할 정보 생성
		document.querySelector('div.content>ul').appendChild(li); //댓글목록에 li(정보) 추가
	}else{
		alert('실패=> ' + result.retVal);
	}
}//end of addReplyCallback();

//replyList의 매개값으로 사용될 함수
function replyListFnc() {
	//5개 댓글을 지워주고 새롭게 목록출력.
	document.querySelectorAll('div.content>ul>li').forEach((item, idx) =>{
		if(idx > 2){
			item.remove();
		}
	});
	let data = JSON.parse(this.responseText);
	console.log(data);
	data.forEach(reply => {
		let li = cloneRow(reply);
		document.querySelector('div.content>ul').appendChild(li);
		document.getElementById('reply').value = '';//댓글 입력 부분에 공백하면 지울수 있음
	})
	makePagingFnc(); //여기서 호출해야 색이 바뀜 ??

}//end of replyListFnc()

//댓글정보 -> li생성
function cloneRow(reply = {}) {
	console.log(reply);
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);
	console.dir(template);
	template.style.display = 'block';
	template.setAttribute('id', reply.replyNo);
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	return template;
}

//한건삭제
function deleteRow(e) {
	let li = e.target.parentElement.parentElement;
	let rno = li.getAttribute('id');

	svc.removeReply(rno, deleteReplyFnc);
	//removeReply메소드의 매개값으로 전달될 함수, 화면에서 한건 지우기
	function deleteReplyFnc() {
		let result = JSON.parse(this.responseText);
		if (result.retCode == "OK") {
			alert(result.retMsg);
			document.getElementById(rno).remove();
		} else {
			alert('Error=>' + result.retMsg);

		}
	}
}