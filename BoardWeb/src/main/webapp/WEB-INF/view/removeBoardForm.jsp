<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../public/header.jsp" %>
<h3>삭제화면</h3>
 <form action="removeBoard.do">
 <input type="hidden" name="bno" value="${board.boardNo }">
<table class="table">
   <tr>
   <th class="col-sm-1">글번호</th>
   <td class="col-sm-3"><c:out value="${board.boardNo }"></c:out></td>
   <th class="col-sm-1">조회수</th>
   <td class="col-sm-2"><c:out value="${board.clickCnt }"></c:out></td>
   </tr>
   <tr>
   <th>제목</th><td colspan="3"><c:out value="${board.title }"></c:out></td>
   </tr>
   <tr>
   <th>내용</th>
   <td colspan="3">
    <textarea class="form-control" readonly ><c:out value="${board.content }"></c:out></textarea>
    </td>
   </tr>
   <tr>
   <th>작성자</th><td colspan="3"><c:out value="${board.writer }"></c:out></td>
   </tr>
   <tr>
   <th>작성일시</th><td colspan="3"><c:out value="${board.creationDate }"></c:out></td>
   </tr>
   <tr>
   <td colspan="4"><input type="submit" class="btn btn-danger" value="삭제"></td>
   </tr>
   </table>
   </form>
<%@include file="../public/footer.jsp" %>
