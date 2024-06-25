<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- memberList -->
<h3>회원목록(관리자용)</h3>

<table>
<!-- 회원아이디/ 이름/ 비밀번호/ 이미지 -->
	<c:forEach var="member" items="${memberList }">
		
		    <tr>
		    <td>id: ${member.userId }</td>
		    <td>name: ${member.userName }</td>
		    <td>pw: ${member.userPw }</td>
		    </tr>
			<c:choose>
			<c:when test="${empty member.image }">
				<img src="">
			</c:when>
			<c:otherwise>
				<img width='200px' src="images/${member.image }">
			</c:otherwise>
		</c:choose>
			<img width='200px' src="${empty member.image ? '' : 'images/'.concat(member.image)}">
		
	</c:forEach>
</table>

