// memberMVC/src/main/java/member/service/WriteService.java
package member.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.control.CommandProcess;
import member.bean.MemberDTO;
import member.dao.MemberDAO;

public class WriteService implements CommandProcess {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String status = "error";

		// 1. Data 받기
	    String userName = request.getParameter("name");
	    String userId = request.getParameter("id");
	    String userPwd = request.getParameter("pwd");
	    String userGender = request.getParameter("gender");
	    String userEmail1 = request.getParameter("email1");
	    String userEmail2 = request.getParameter("email2");
	    String userTel1 = request.getParameter("tel1");
	    String userTel2 = request.getParameter("tel2");
	    String userTel3 = request.getParameter("tel3");
	    String userZipcode = request.getParameter("zipcode");
	    String userAddr1 = request.getParameter("addr1");
	    String userAddr2 = request.getParameter("addr2");

	    // 2. DB 
	    MemberDAO memberDAO = MemberDAO.getInstance();
		
	    try {
	        // 회원가입 처리
	        if (userName != null && userId != null && userPwd != null) {
	            // 회원 정보 DTO 생성
	            MemberDTO memberDTO = new MemberDTO();
	            memberDTO.setName(userName);
	            memberDTO.setId(userId);
	            memberDTO.setPwd(userPwd);
	            memberDTO.setGender(userGender);
	            memberDTO.setEmail1(userEmail1);
	            memberDTO.setEmail2(userEmail2);
	            memberDTO.setTel1(userTel1);
	            memberDTO.setTel2(userTel2);
	            memberDTO.setTel3(userTel3);
	            memberDTO.setZipcode(userZipcode);
	            memberDTO.setAddr1(userAddr1);
	            memberDTO.setAddr2(userAddr2);		
				
	            // 회원가입
	            boolean result = memberDAO.memberSignUp(memberDTO);
	            if (result) {
	            	status = "success";
	            } else {
	            	status = "fail";
	            }
	        }
	    } catch (Exception e) {
	        	status = "error";
	        	 e.printStackTrace(); // 로그에 에러 출력
	    }
	    
				
		// 3. Response		
	    request.setAttribute("status", status);
		return "/member/memberWrite.jsp";
	}

}
