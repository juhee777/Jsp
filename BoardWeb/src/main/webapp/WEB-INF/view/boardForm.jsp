<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<%if(logId != null){ %> <!-- 로그인 안되있으면 등록화면들어가지 않고 로그인 화면으로 들어가게 만듦  -->
<h3>게시글등록</h3>
<form action="addBoard.do">
<table class="table">
<tr>
<th>제목</th><td><input type="text" name="tit"></td>
</tr>
<tr>
<th>작성자</th><td><%=logId %></td>
</tr>
<tr>
<th>내용</th><td><input type="text" name="content"></td>
</tr>
<tr>
<% if(logId != null) {%> 
    <td colspan="2" align="center">
    <input type="submit" value="등록"></td>
 <%}else{ %>
    <td colspan="2" align="center">
    <input type="submit" disabled value="등록"></td>
 <%} %> 
 </tr>
</table>
</form>
<%}else{ %>
<h3>로그인화면(loginForm.jsp)</h3>
<form action="login.do">
<table class="table">
  <tr>
    <th>아이디</th><td><input type="text" name="id"></td>
  </tr>
  <tr>
    <th>비밀번호</th><td><input type="password" name="pw"></td>
  </tr>
  <tr>
    <td colspan="2"><input type="submit" value="로그인"></td>
  </tr>
</table>
</form>


<%} %>

<%@include file="../public/footer.jsp" %>
