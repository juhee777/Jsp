/**
 * public.js
 */
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qCwQYxNXeK%2FaB1Ngf9oNZDttjmjQ6ku1OdR6%2Fd0Jj5EIdqOxMXolplih%2BYjTqB4uxCuK636co3tf9T5%2Fr9OLvw%3D%3D';

//센터정보생성
document.getElementById('centerDB').addEventListener('click', createCenterInfo);

function createCenterInfo(){
	//1. open API호출
	//2. 컨트롤 호출 DB입력
	fetch(url)
	.then(result => result.json()) 
	.then(result => {
		let centers = result.data //[{}, {}, {}] => [{"id":"hong"}]
		return fetch('CenterInfo.do', { //옵션{}을 담은 객체를 가지고 전달
			method: 'post', //전달되는 값이 body영역에 저장
			headers: {'Content-type':"application/json"}, //키=값&키=값
			body: JSON.stringify(centers) //객체 -> json문자열
		}) 
	})
	.then(result => result.json()) //{"txnCnt": 3} //리턴한 값을 then으로 또 받음
	.then(result => {
		if(result.txnCnt > 0){
			alert(result.txnCnt + '건 처리 성공')
		}else{
			alert('실패')
		}
	})
	.catch(err => console.log(err))
}
let centerList = []; // 검색된 센터의 전체정보를 담아놓는 용도.
let sidoList = []; // 시도목록을 담아놓는 용도.
const target = document.querySelector('#centerList'); // 하위목록.
const selectSido = document.querySelector('#searchList'); // select태그.

fetch(url)
	.then(result => result.json()) // [{"id":1, "center.."},{},{}] -> [{},{}] 
	.then(result => {
		console.log(result);
		centerList = result.data; // 전역변수를 centerList에 저장.
		result.data.forEach((center, idx) => {
			//console.log(center);
			target.appendChild(makeRow(center)); // target 요소의 자식으로 추가
		});
		// 시도리스트 만들기.
		result.data.forEach(center => {
			if (sidoList.indexOf(center.sido) == -1) { // 중복되지 않는 시도만 sidoList 배열에 추가
				sidoList.push(center.sido);
			}
		})
		sidoList.forEach(sido => {  // sidoList 배열의 각 시도 정보를 option 태그로 변환하여 selectSido 요소의 자식으로 추가
			//console.log(sidoList);
			let opt = document.createElement('option');
			opt.value = sido; //방금 생성한 option 요소의 value 속성에 현재 sido 값을 할당. 이 value는 사용자가 선택했을 때 전달되는 값이 됨
			opt.innerHTML = sido;
			selectSido.appendChild(opt);
		})

	})
	.catch(err => console.log(err)); //실패했을 때

// 2) 주소검색 기능.
//document.querySelector('#findBtn').addEventListener('click', searchByAddress);
document.querySelector('#search').addEventListener('change', searchByAddress);
selectSido.addEventListener('change', searchBysido);

// 시도로 검색해서 목록.
function searchBysido() {
	target.innerHTML = '';
	centerList.filter(center => center.sido == this.value) //"centerList"라는 데이터 배열에서 사용자가 선택한 시도와 일치하는 센터 정보를 필터링합니다.
		//필터링된 센터 정보를 반복하면서 "makeRow" 함수를 호출하여 각 센터 정보를 HTML 테이블 행으로 만들고 이걸 "target" 요소에 추가
		.forEach(center => target.appendChild(makeRow(center)));
}

// 주소검색해서 목록.
function searchByAddress() {
	// 목록지우고 다시 그리기.
	target.innerHTML = ''; //target(하위목록) 비우기
	let searchWord = document.querySelector('#search').value;
	if (!searchWord) {
		alert('검색조건을 입력하세요.');
		return;
	}
	// 검색결과출력.
	// centerList.filter(center => center.address.indexOf(searchWord) != -1) //
	// 	.forEach(center => target.appendChild(makeRow(center)));

	// 검색키워드 굵게 표시하기.
	centerList.reduce((acc, center) => {
		if (center.address.indexOf(searchWord) != -1) { //center의 address에 searchWord가 포함되어 있다면
			let tr = makeRow(center); // makeRow 함수를 호출하여 센터 정보를 <tr>요소로 만듦
			// 검색조건결과를 <b>태그로 감싸기/ 센터의 주소에서 "searchWord"을 찾아서 <b>태그로 감싸는 걸로 대체해서  tr_trans 변수에 저장
			let tr_trans = center.address.replace(searchWord, '<b>' + searchWord + '</b>');
			tr.querySelector('td:nth-of-type(4)').innerHTML = tr_trans; // <tr>의 4번째 <td> 요소(주소 부분)의 innerHTML을 tr_trans로 설정
			acc.appendChild(tr);
		}
		return acc;
	}, target); // reduce 메서드의 초기 누적 결과로 target 요소를 사용
	// 검색조건 초기화.
	document.querySelector('#search').value = '';
}

// 1) 목록을 출력하기.
const fields = ['id', 'centerName', 'phoneNumber', 'address'];

function makeRow(center = {}) {
	let tr = document.createElement('tr');
	tr.addEventListener('click', function() { //이벤트
		//location.href = "map.do?x="+center.lat+"&y="+center.lng; //센터의 위도, 경도 map으로
		window.open("map.do?x=" + center.lat + "&y=" + center.lng +"&centerName=" + center.centerName);
	});
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = center[field];
		tr.appendChild(td);
	});
	return tr;
} // end of makeRow().
// end of program.