// memberMVC/src/main/java/member/service/Deleteservice.java
package member.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.control.CommandProcess;

import member.dao.MemberDAO;

public class DeleteService implements CommandProcess {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String status = "error";

		// 1. Data 받기
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		
		// 2. DB 
		MemberDAO memberDAO = MemberDAO.getInstance();
		boolean result = memberDAO.memberDelete(id, pwd);
				
		// 3. Response
		if (result) {
			HttpSession session = request.getSession();		
			session.invalidate();
			status = "success";
		} else {
			status = "fail";
		}
		
		return "/member/memberDelete.jsp";
	}

}
