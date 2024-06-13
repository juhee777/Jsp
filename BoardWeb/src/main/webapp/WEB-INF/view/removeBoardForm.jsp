<%@page import="co.yedam.vo.BoardVO"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<h3>삭제화면</h3>
<%
  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
  BoardVO board = (BoardVO) request.getAttribute("board");
  String pageing = (String) request.getAttribute("page");
  String yymm = sdf.format(board.getCreationDate());
%>
 <form action="removeBoard.do">
 <input type="hidden" name="bno" value="<%=board.getBoardNo() %>">
<table class="table">
   <tr>
   <th class="col-sm-1">글번호</th>
   <td class="col-sm-3"><%=board.getBoardNo() %></td>
   <th class="col-sm-1">조회수</th>
   <td class="col-sm-2"><%=board.getClickCnt() %></td>
   </tr>
   <tr>
   <th>제목</th><td colspan="3"><%=board.getTitle() %></td>
   </tr>
   <tr>
   <th>내용</th>
   <td colspan="3">
    <textarea class="form-control" readonly ><%=board.getContent() %></textarea>
    </td>
   </tr>
   <tr>
   <th>작성자</th><td colspan="3"><%=board.getWriter() %></td>
   </tr>
   <tr>
   <th>작성일시</th><td colspan="3"><%=yymm %></td>
   </tr>
   <tr>
   <td colspan="4"><input type="submit" class="btn btn-danger" value="삭제"></td>
   </tr>
   </table>
   </form>
<%@include file="../public/footer.jsp" %>
