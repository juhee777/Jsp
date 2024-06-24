<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
	  
      
      //ajax호출 url: centerChart.do
      let centerAry = [];
      centerAry.push(['시도명', '센터갯수']) //배열에 ['시도명', '센터갯수'] 추가
      
      fetch('centerChart.do') //서버에서 데이터 가져오기
      .then(result => result.json()) //json형식으로 변환
      .then(result => { //변환된 json데이터 처리
    	  console.log(result);
    	  //for(let prop in result){ //객체일때 
    	  //console.log(prop, result[prop]);
    	  //}
    	 result.forEach(center => { //데이터 순회해서 centerAry배열에 ['시도명', '센터갯수'] 형식으로 데이터를 추가 
    		 centerAry.push([center.sido, center.cnt]);
    	 })
    	  google.charts.setOnLoadCallback(drawChart); //비동기처리의 순서
    	  //데이터 처리후 drawChart함수 실행
      });
     
      function drawChart() { //
	// [{},{},{}] => [[],[],[]]
		console.log(centerAry.length)
        var data = google.visualization.arrayToDataTable(centerAry);
		// centerAry 배열을 google charts API에서 사용할 수 있는 데이터 테이블 형식으로 변환
        var options = { //차트 옵션 설정
          title: '시도별 센터갯수' //차트 제목을 시도별 센터갯수로 설정
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart')); //차트 id지정

        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="piechart" style="width: 900px; height: 500px;"></div>
  </body>
</html>