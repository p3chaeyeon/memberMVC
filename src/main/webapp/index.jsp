<%-- memberMVC/src/main/webapp/index.jsp --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="icon" href="data:,">
<title>메인화면</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .container {
        text-align: center;
        background-color: #fff;
        padding: 30px 50px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
        margin-bottom: 20px;
        color: #4CAF50;
    }
    h3 {
        margin: 10px 0;
    }
    a {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        background-color: #4CAF50;
        width: 300px;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    a:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>
<c:if test="${sessionScope.memId == null }">
    <div class="container">
        <h2>메인화면</h2>
        <h3><a href="/memberMVC/member/memberWriteForm.do">회원가입</a></h3>
        <h3><a href="/memberMVC/member/memberLogInForm.do">로그인</a></h3>
        <!-- <h3><a href="/memberMVC/board/boardList.do?pg=1">글목록</a></h3> -->
    </div>
</c:if>

<c:if test="${sessionScope.memId != null }">
    <div class="container">
        <h2>메인화면</h2>
        <h3><a href="/memberMVC/member/memberUpdateForm.do">회원정보수정</a></h3>
        <h3><a href="/memberMVC/member/memberLogOut.do">로그아웃</a></h3>
        <!-- <h3><a href="/memberMVC/board/boardWriteForm.do">글쓰기</a></h3>
        <h3><a href="/memberMVC/board/boardList.jsp?pg=1">글목록</a></h3> -->
        <h3><a href="/memberMVC/member/memberDeleteForm.do">회원탈퇴</a></h3>
    </div>
</c:if>

</body>
</html>
