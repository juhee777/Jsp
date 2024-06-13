<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page="../public/header.jsp" />



<h3>상세화면(board.jsp)</h3>
<form name="mayFrm" action="removeForm.do"> 
<input type="hidden" value="${board.boardNo}" name="bno">
<table class="table">
   <tr>
   <th class="col-sm-1">글번호</th>
   <td class="col-sm-3"><c:out value="${board.boardNo }"></c:out></td>
   <th class="col-sm-1">조회수</th>
   <td class="col-sm-2"><c:out value="${board.clickCnt }"><</c:out></td>
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
   <th>작성자</th><td colspan="3"><c:out value="${board.writer }"></c:out> </td>
   </tr>
   <tr>
   <th>작성일시</th><td colspan="3"><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${board.creationDate }"/></td>
   </tr>
   <tr align ="center">
   <td colspan="3">
   	  <c:choose>
   	    <c:when test="${!empty logId && logId == board.writer}"><!-- logId가 null이 아니고 logId가 작성자(writer)가 같으면 삭제이동, 수정이동 활성 -->
   	     <button type="submit" class="btn btn-danger">삭제이동</button>
         <button type="button" class="btn btn-warning">수정이동</button>
   	    </c:when>
   	    <c:otherwise>
   	     <button type="submit" disabled class="btn btn-danger">삭제이동</button>
         <button type="button" disabled class="btn btn-warning">수정이동</button>
   	    </c:otherwise>
   	  </c:choose>
   </td>
   </tr>
</table>
</form>
<script>
 document.querySelector('button.btn-warning').addEventListener('click',function(e){
	 //삭제화면이동일 경우에는 removeForm.do
	 //수정화면이동으로 처리할 경우에는 action="modifyForm.do"
	 document.forms.mayFrm.action = "modifyForm.do";
	 document.forms.mayFrm.submit();//form name을 mayFrm으로 했으니 여기서도 이름 같게 mayFrm
	 document.forms.mayFrm.action = "removeForm.do";
 });
 
</script>

<a href="boardList.do?page=${page }" class="btn btn-success">목록으로 이동</a>
<jsp:include page="../public/footer.jsp" />
