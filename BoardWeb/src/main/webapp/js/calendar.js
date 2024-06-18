/**
 * 
 */
document.querySelectorAll('.container-fluid h3') //NodeList -> forEach사용할수 있게 함
	.forEach(item => item.remove());
	
document.querySelectorAll('.container-fluid table.table') 
	.forEach(item => item.remove());
	
document.getElementById('fruit').remove();

//월을 변경하면 달력을 출력하는 이벤트를 등록(selectMonth)
function makeCal(value){
	makeCalendar(parseInt(value.target.value))
}

document.getElementById('#selectMonth').addEventListener('change', makeCal);

//달력을 첫째날 계산하는 함수, 마지막날 계산하는 함수
function getFirstDay(month = 6){
	switch(month){
		case 5: //5월달
			return 4;
		case 7: //7월달
			return 2;
	}
}

function getLastDate(month = 6){
	switch(month){
		case 5:
		case 7:
			return 31;
	}
	return 30;
}
makeCalendar(6);
function makeCalendar(month = 6){
	let firstDay = getFirstDay(month); //1일의 위치를 지정하기 위해서 공란의 갯수를 반환
	let lastDate = getLastDate(month); //월의 마지막날을 반환하는 함수
	// table 생성. border="2"
	let tbl = document.createElement('table');
	tbl.setAttribute('class', 'table');
	let thd = document.createElement('thead');
	let tbd = document.createElement('tbody');
	
	//thead 하위요소
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
	let tr = document.createElement('tr');
	days.forEach(day =>{
		let td = document.createElement('th');
		td.innerHTML = day;
		tr.appendChild(td);
	})
	thd.appendChild(tr);
	
	//tbody 하위요소.
	tr = document.createElement('tr');
	//빈날짜
	for(let i = 1; i < firstDay; i++){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	//날짜출력
	for(let d = 1; d <= lastDate; d++){
		let td = document.createElement('td');
		td.innerHTML = d;
		tr.appendChild(td);
		
		if((d+firstDay-1) % 7 == 0){ //7일마다 줄바꿈.
			tbd.appendChild(tr); 
			tr = document.createElement('tr');
		}
		//토요일 배경색은 파란색
		if((d+firstDay-1) % 7 == 0){
			//document.td.style.bebackgroundColor = "red" + d;
			td.innerHTML = "<font color=#7ED5E4>" + d;
		}
		//일요일은 배경색을 빨간색
		if((d+firstDay-1) % 7 == 1){
			td.innerHTML = "<font color=#FF9090>" + d;
		}
	}
	thd.appendChild(tr);
	
	tbl.appendChild(thd);
	tbl.appendChild(tbd);
	
	document.getElementById('show').appendChild(tbl);
	
}
makeCalendar(6) //호출해야 실행가능