<%@page import="co.yedam.vo.Student"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- webapp/WEB-INF/view/priduct.jsp -->
	<h3>Product페이지</h3> <!-- http://localhost/BoardWeb/product.do --> 
	<%
	  Student student =  (Student) request.getAttribute("student");	
	%>
	<table border="2">
	  <tr>
	    <th>학생번호</th><td><%=student.getStdNo() %></td>
	  </tr>
	  <tr>
	    <th>학생이름</th><td><%=student.getStdName() %></td>
	  </tr>
	   <tr>
	    <th>학생연락처</th><td><%=student.getPhone() %></td>
	  </tr>
	</table>
	
</body>
</html>