<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <!-- 조건문 쓸 수 있게 -->
    
<div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="main.do">메인화면</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시글목록</a>
                    <c:choose>
                      <c:when test="${empty logId }">
                      <a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인</a>
                      </c:when>
                      <c:otherwise>
                      <a class="list-group-item list-group-item-action list-group-item-light p-3" href="addForm.do">글등록</a>
                      <a class="list-group-item list-group-item-action list-group-item-light p-3" href="logout.do">로그아웃</a>
                      </c:otherwise>
                    </c:choose>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="signUpForm.do">회원가입</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="script.do">자바스크립트</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="ajax.do">Ajax연습</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="publicData.do">공공데이터포털</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="chartForm.do">차트</a>
                </div>
            </div>