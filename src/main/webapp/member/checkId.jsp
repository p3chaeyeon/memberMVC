<%-- memberMVC/src/main/webapp/member/checkId.jsp --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:if test="${exist }">exist</c:if>
<c:if test="${!exist }">non_exist</c:if>