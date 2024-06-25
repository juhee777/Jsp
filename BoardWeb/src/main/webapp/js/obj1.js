/**
 * obj1.js
 */
document.getElementById('dom').remove();
//등록이벤트
document.getElementById('addBtn').addEventListener('click', function(e){
	//사용자의 입력값을 employee 객체 생성.
	const employees = {
		id: document.getElementById('id').value,
		first_name: document.getElementById('first_name').value,
		email:  document.getElementById('email').value,
		salary: document.getElementById('salary').value
	}
	//목록에 추가하기
	document.querySelector('#list').appendChild(obj.makeRow(employees))
})
const obj = {
	data: '',
	fields: ['id', 'first_name', 'email', 'salary'],
	showList: function(ary = []){
		ary.forEach((emp,idx) => {
			if(idx < 3){
				document.querySelector('#list').appendChild(this.makeRow(emp));
			}
		});
	},
	makeRow(emp = {id, first_name, email, salary}){
		let tr = document.createElement('tr');
		this.fields.forEach(field => {
			let td = document.createElement('td');
			td.innerHTML = emp[field];
			tr.appendChild(td)
		});
		return tr;
	}
}

obj.showList(employees);
const today = new Date();
today.getFullYear();

//2024-06-19
Date.prototype.format = function(){
	let yy = this.getFullYear();
	let mon = '0'+ (this.getMonth() + 1);
	let dd = this.getDate();
	
	return yy+'-'+mon+'-'+dd;
}
console.log(today.format());
