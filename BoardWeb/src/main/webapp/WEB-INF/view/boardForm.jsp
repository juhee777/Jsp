<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../public/header.jsp" %>

<h3>게시글등록(boardForm.jsp)</h3>
<form action="addBoard.do">
<table class="table">
<tr>
<th>제목</th><td><textarea type="text" name="tit" cols="100" rows="1"></textarea></td>
</tr>
<tr>
<!-- <th>작성자</th><td><%=logId %></td> -->
<th>작성자</th><td><c:out value="${logId }"></c:out></td>
</tr>
<tr>
<th>내용</th><td><textarea type="text" name="content" cols="100" rows="10"></textarea></td>
</tr>
<tr>
<!-- <% if(logId != null) {%> 
    <td colspan="2" align="center">
    <input type="submit" value="등록"></td>
 <%}else{ %>
    <td colspan="2" align="center">
    <input type="submit" disabled value="등록"></td>
 <%} %>  -->
 
 
 <c:choose>
   <c:when test="${logId != null }">
     <td colspan="2" align="center">
     <input type="submit" value="등록"></td>
    </c:when>
     
   <c:otherwise>
     <td colspan="2" align="center">
     <input type="submit" disabled value="등록">
     </td>
   </c:otherwise>
 </c:choose>
 </tr>
</table>
</form>


<%@include file="../public/footer.jsp" %>
