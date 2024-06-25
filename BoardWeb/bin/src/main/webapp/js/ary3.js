/**
 * ary3.js
 */
let sum =
	[10, 20, 30, 40, 50].reduce(function(acc, elem, idx, ary) {//acc: 누적값 
		console.log(acc, elem, idx, ary);
		if(elem > acc){//elem이 acc보다 크면 acc를 반환, 그렇지 않으면 elem을 반환
			return acc;
		}
		return elem;
	}, 100);
console.log('최소값: ', sum);

['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'].reduce(function(acc,elem){
  let li = document.createElement('li');
  li.innerHTML = elem;
  acc.appendChild(li);
  
  return acc;
},document.getElementById('fruit'));