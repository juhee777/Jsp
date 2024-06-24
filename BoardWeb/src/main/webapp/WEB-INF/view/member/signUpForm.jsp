<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<h3>회원가입</h3>
<form action="memberList.do" method="post" enctype="multipart/form-data">
<table class="table">
  <tr>
    <th>아이디</th><td><input type="text" name="id"></td>
  </tr>
   <tr>
    <th>비밀번호</th><td><input type="password" name="pw"></td>
  </tr>
   <tr>
    <th>이름</th><td><input type="text" name="name"></td>
  </tr>
  <tr>
    <th>이미지</th><td><input type="file" name="myImage"></td>
  </tr>
  <tr>
    <td colspan="2" align="center">
    <input type="submit" class="btn btn-danger" value="회원가입"></td>
  </tr>
</table>

</form>
