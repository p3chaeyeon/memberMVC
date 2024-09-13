// memberMVC/src/main/java/member/service/LogInService.java
package member.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.control.CommandProcess;

import member.dao.MemberDAO;

public class LogInService implements CommandProcess {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		// 1. Data 받기
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");

		// 2. DB 
		MemberDAO memberDAO = MemberDAO.getInstance();
		Map<String, String> userInfo = memberDAO.memberLogIn(id, pwd);

		// 3. Response
		String name = userInfo.get("name");
		String email1 = userInfo.get("email1");
		String email2 = userInfo.get("email2");
		String email = email1 + "@" + email2;
		
		if (name == null) {
			return "/member/memberLogInFail.jsp";
		} else {
			// 세션
			HttpSession session = request.getSession();
	        session.setAttribute("memName", name);
	        session.setAttribute("memId", id);
	        session.setAttribute("memEmail", email);
	        
			return "/member/memberLogInOk.jsp";
		}
		
		
	}

}
