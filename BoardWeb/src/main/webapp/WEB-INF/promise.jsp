<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <p>Promise객체</p>
    <script>
        async function PromiseFunc(){

        new Promise((resolve. reject) => {
            setTimeout(function (){
                reject('Fail');
            }, 1000);
        })
        .then(function(result){ 
            console.log(result);
        }).catch(function(err){
            console.log(err);
        });
        
    </script>
</body>
</html>