<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- webapp/WEB-INF/view/priduct.jsp -->
	<h3>Product페이지</h3> <!-- http://localhost/BoardWeb/product.do --> 
	<table border="2">
	  <tr>
	    <th>학생번호</th><td><c:out value="${student.stdNo }"></c:out></td>
	  </tr>
	  <tr>
	    <th>학생이름</th><td><c:out value="${student.stdName }"></c:out></td>
	  </tr>
	   <tr>
	    <th>학생연락처</th><td><c:out value="${student.phone }"></c:out></td>
	  </tr>
	</table>
	
</body>
</html>