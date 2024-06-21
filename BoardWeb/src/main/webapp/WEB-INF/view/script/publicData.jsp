<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- publicData.jsp -->

<h3>공공데이터연습</h3>
<!-- 검색조건 입력하고 목록에서 출력 -->

<div>
	<input id="search" type="text" placeholder="ex)'동구'를 입력하고 검색을 하면 동구를 포함한 목록이 출력"
		class="form-control">
	<button id="findBtn" type="button" class="btn btn-primary">건색</button>
</div>

<table class="table">
	<thead>
		<tr>
			<th>센터id</th>
			<th>센터명</th>
			<th>연락처</th>
			<th>주소</th>
		</tr>
	</thead>
	<tbody id="centerList"></tbody>
</table>
<script src="js/public.js"></script>