<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 화면(book) -->
<div id="book">
	<table class="table">
		<tr>
			<th>도서코드</th>
			<td><input type="text" id="cod"></td>
		</tr>
		<tr>
			<th>도서명</th>
			<td><input type="text" id="bname"></td>
		</tr>
		<tr>
			<th>저자</th>
			<td><input type="text" id="author"></td>
		</tr>
		<tr>
			<th>출판사</th>
			<td><input type="text" id="publisher"></td>
		</tr>
		<tr>
			<th>금액</th>
			<td><input type="text" id="money"></td>
		</tr>
		<tr>
		<td>
			<button id="addBtn">추가</button>
			<button id="delBtn">선택삭제</button>
		</td>
		</tr>
	</table>
</div>

<div id="list">
  <table class="table">
  <thead>
   <tr>
   	 <th><input type="checkbox"></th>
     <th>도서코드</th>
     <th>도서명</th>
     <th>저자</th>
     <th>출판사</th>
     <th>가격</th>
     <th>삭제</th>
   </tr>
   </thead>
   <tbody id="bookList"></tbody>
  </table>
</div>
<script src="js/book.js"></script>