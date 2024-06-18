/**
 * data.js
 */
const myMembers = [
	{id: 'user01', name: '홍길동', phone: '010-1111-2222', point: 90}, // new Object();
	{id: 'user02', name: '박석민', phone: '010-2341-5142', point: 95},
	{id: 'user03', name: '김시후', phone: '010-4271-7411', point: 120}
]; // new array();

const json = `[{"id":1,"first_name":"Betteann","last_name":"Matteo","email":"bmatteo0@thetimes.co.uk","gender":"Female","salary":4757},
{"id":2,"first_name":"Collin","last_name":"Seeley","email":"cseeley1@usda.gov","gender":"Male","salary":5072},
{"id":3,"first_name":"Vasili","last_name":"McKinna","email":"vmckinna2@tripadvisor.com","gender":"Male","salary":4085},
{"id":4,"first_name":"Dorice","last_name":"Currell","email":"dcurrell3@weibo.com","gender":"Female","salary":3553},
{"id":5,"first_name":"Gerrie","last_name":"Semeniuk","email":"gsemeniuk4@vimeo.com","gender":"Male","salary":4460},
{"id":6,"first_name":"Britteny","last_name":"Zammitt","email":"bzammitt5@ted.com","gender":"Female","salary":3370},
{"id":7,"first_name":"Karlotta","last_name":"Bridewell","email":"kbridewell6@loc.gov","gender":"Female","salary":3662},
{"id":8,"first_name":"Jemmie","last_name":"O' Culligan","email":"joculligan7@slate.com","gender":"Female","salary":4858},
{"id":9,"first_name":"Tann","last_name":"Kubczak","email":"tkubczak8@washington.edu","gender":"Male","salary":5034},
{"id":10,"first_name":"Benedetto","last_name":"Kelmere","email":"bkelmere9@nature.com","gender":"Male","salary":3465},
{"id":11,"first_name":"Jaime","last_name":"Blyden","email":"jblydena@statcounter.com","gender":"Female","salary":6733},
{"id":12,"first_name":"Theresita","last_name":"Foux","email":"tfouxb@cnet.com","gender":"Female","salary":7382},
{"id":13,"first_name":"Allene","last_name":"Marke","email":"amarkec@mysql.com","gender":"Female","salary":4859},
{"id":14,"first_name":"Myrtle","last_name":"Gerhold","email":"mgerholdd@samsung.com","gender":"Female","salary":6170},
{"id":15,"first_name":"Sandra","last_name":"Balasini","email":"sbalasinie@1688.com","gender":"Female","salary":6141}]`;

const employees = JSON.parse(json); //알아서 js로 만들어줌