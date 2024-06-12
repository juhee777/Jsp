<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<form action="addBoard.do">
<table class="table">
<tr>
<th>제목</th><td><input type="text" name="tit"></td>
</tr>
<tr>
<th>작성자</th><td><input type="text" name="writer"></td>
</tr>
<tr>
<th>내용</th><td><input type="text" name="content"></td>
</tr>
<tr>
    <td colspan="2" align="center">
    <input type="submit" value="등록"></td>
 </tr>
</table>
</form>


<%@include file="../public/footer.jsp" %>
