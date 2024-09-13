<%-- memberMVC/src/main/webapp/member/memberWrite.jsp --%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="member.dao.MemberDAO" %>
<%@ page import="member.bean.MemberDTO" %>
<%@ page import="java.util.Date" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 결과</title>
</head>
<body>
<script type="text/javascript">
    window.onload = function(){
        var status = '${status}';

        if (status === 'success') {
            alert("회원가입에 성공하였습니다.");
            window.location.href = '/memberMVC/index.do';
        } else if (status === 'fail' || status === 'error') {
            alert("회원가입 처리 중 문제가 발생했습니다.");
            window.location.href = '/member/memberWriteForm.do';
        }
    };
</script>
</body>
</html>