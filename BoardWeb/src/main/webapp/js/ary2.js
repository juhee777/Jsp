/**
 * ary2.js
 */
console.log(employees);

let result = [23, 45, 22, 39, 10, 56].filter(function(item, idx, ary){
	if(item % 2 == 0){
		return true; //true가 return인 경우에 한하여 item을 배열에 담아줌
	}
});
console.log(result); //결과 [22, 10, 56]

//employees.forEach(console.log);

//급여가 5000이 넘는 여자만 필터링.
let over5000 = [];
let over5000Sum = 0;
let filterFnc = emp => emp.gender == 'Female' && emp.salary > 5000;
filterFnc = function(emp){
	return emp.gender == 'Female' && emp.salary > 5000;
}
//over5000 = employees.filter(emp => emp.gender == 'Female' && emp.salary > 5000);
//over5000 = employees.filter(filterFnc);

//[A,A,A] -> [A,A]
employees.filter(filterFnc).forEach(function(emp){
	console.log(emp);
	over5000Sum += emp.salary;
});
console.log("조건만족사람급여합: ",over5000Sum);

//[A,A,A] -> [A', A', A']
employees
 .map(function(elem, idx, ary){
	const obj = {}
	obj.name = elem.first_name + '-' + elem.last_name;
	obj.no = elem.id;
	obj.salary = elem.salary;
	return obj;
 })
 .forEach(console.log);
