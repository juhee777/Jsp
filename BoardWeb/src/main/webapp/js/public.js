/**
 * public.js
 */
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=9Pd93xpLRO5JJty9y0xJ%2BeNmxIgQwE37hLi84FGSxycN8oPRNEvpyX40%2FMKD3OLCDmJABiBs3IqK%2F1GaLg109g%3D%3D';
const target = document.querySelector('#centerList'); //하위목록
let centerList = [];
fetch(url)
	.then(result => result.json()) // [{"id":1, "center.."},{},{}] -> [{},{}] js객체로 변환
	.then(result => {
		centerList = result.data;
		result.data.forEach((center, idx) => {
			if (idx < 3) {
				target.appendChild(makeRow(center));
			}
		});
	})

document.getElementById('findBtn').addEventListener('click', function(e) {

	target.innerHTML = '';
	let findWord = document.querySelector('#search').value; //jsp에서 만든 id이름이 serch이니까 그 value를 찾아옴
	centerList.forEach((center, idx) => { //center, idx는 순서 center는 배열값을 보여주고 idx는 인덱스 번호를 알려줌
		if (center.address.indexOf(findWord) != -1) //indexOf는 한문자에 인덱스 번호를 생성하는 거라서 center.address.indexOf가 검색value라고 생각하고 그 해당하는 문자의 번호가 없으면 -1을 반환
			target.appendChild(makeRow(center)); //makeRow(center)의 함수를 불러서 target하위에 검색한 정보를 생성
	})
})

let fields = ['id', 'centerName', 'phoneNumber', 'address'];
function makeRow(center = {}) {
	let tr = document.createElement('tr');
	fields.forEach(field => {
		console.log(center[field], field);
		let td = document.createElement('td');
		td.innerHTML = center[field];
		tr.appendChild(td);
	})
	return tr;
}

//검색기능

