/**
 * 
 */
document.querySelectorAll('.container-fluid h3') //NodeList -> forEach사용할수 있게 함
	.forEach(item => item.remove());
	
document.querySelectorAll('.container-fluid table.table') 
	.forEach(item => item.remove());
	
document.getElementById('fruit').remove();

//월을 변경하면 달력을 출력하는 이벤트를 등록(selectMonth)
function makeCal(value){//월을 변경할 때마다 실행
	console.log(value);
	makeCalendar(parseInt(value.target.value))
}
//#selectMonth요소 값을 변경하면 makeCal 함수 실행
document.querySelector('#selectMonth').addEventListener('change', makeCal);

//달력을 첫째날 계산하는 함수, 마지막날 계산하는 함수
function getFirstDay(month = 6){ 
	switch(month){
		case 5: //5월달의 첫째날은 수요일이니 4(일요일이 1)
			return 4;
		case 7: //7월달
			return 2;
	}
	return 7;
}

function getLastDate(month = 6){
	switch(month){
		case 5: //5월, 7월 마지막 날은 31일
		case 7:
			return 31;
	}
	return 30; 
}

//달력생성
makeCalendar(6);
function makeCalendar(month = 6){
	let firstDay = getFirstDay(month); //1일의 위치를 지정하기 위해서 공란의 갯수를 반환
	let lastDate = getLastDate(month); //월의 마지막날을 반환하는 함수
	
	document.getElementById('show').innerHTML = ''; //이전에 출력된 달력 삭제
	
	// table 생성. border="2"
	let tbl = document.createElement('table'); //table요소 생성
	tbl.setAttribute('class', 'table');
	let thd = document.createElement('thead');
	let tbd = document.createElement('tbody');
	
	//thead 하위요소
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']; //요일정보
	let tr = document.createElement('tr');//<tr>생성
	days.forEach(day =>{
		let td = document.createElement('th');//<th>생성
		td.innerHTML = day; //day(요일이름 배열)이 <th>에 하나씩 생성
		tr.appendChild(td); //<tr><th></th></tr>
	})
	thd.appendChild(tr);//<thead><tr></tr></thead>
	
	//tbody 하위요소.
	tr = document.createElement('tr'); //<tbody><tr>
	
	//빈날짜
	for(let i = 1; i < firstDay; i++){//빈칸 6칸을 넣고 첫 시작 1이 7번째 자리
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	//날짜출력
	for(let d = 1; d <= lastDate; d++){ //1부터 해당월의 마지막 날짜까지 출력
		let td = document.createElement('td');
		td.innerHTML = d;
		tr.appendChild(td); 
		if((d+firstDay-1) % 7 == 0){ //7일마다 줄바꿈.
			tbd.appendChild(tr); //<tbody><tr>
			tr = document.createElement('tr'); //줄바꿈
		}
		//토요일 배경색은 파란색
		if((d+firstDay-1) % 7 == 0){
			//td.bgColor = 'blue';
			td.style.backgroundColor = 'blue';
			td.innerHTML = "<font color=#FFEA00>" + d;
			
		}
		//일요일은 배경색을 빨간색
		if((d+firstDay-1) % 7 == 1){
			td.style.backgroundColor = 'red';
			td.innerHTML = "<font color=#FFEA00>" + d;
		}
	}
	tbd.appendChild(tr);
	
	tbl.appendChild(thd);
	tbl.appendChild(tbd);
	
	document.getElementById('show').appendChild(tbl);
	
}
//makeCalendar(6) //호출해야 실행가능