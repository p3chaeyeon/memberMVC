// memberMVC/src/main/java/member/service/UpdateFormService.java
package member.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.control.CommandProcess;

import member.bean.MemberDTO;
import member.dao.MemberDAO;

public class UpdateFormService implements CommandProcess {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		//DB
	    // 세션에서 아이디 가져오기
	    HttpSession session = request.getSession();
	    String id = (String) session.getAttribute("memId");

	    // DAO에서 회원 정보 가져오기
	    MemberDAO memberDAO = MemberDAO.getInstance();
	    MemberDTO memberDTO = memberDAO.getMemberInfo(id);

	    // 회원 정보를 request에 저장
	    request.setAttribute("memberDTO", memberDTO);

		return "/member/memberUpdateForm.jsp";
	}

}
