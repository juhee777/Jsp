package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.MemberVO;

public class MemberUpdAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String nm = req.getParameter("nm");
		
		MemberVO mvo = new MemberVO();
		mvo.setUserId(id);
		mvo.setUserPw(pw);
		mvo.setUserName(nm);
		System.out.println(mvo);
		
		BoardService svc = new BoardServicrImpl();
		if(svc.updMemberAjax(mvo)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		}else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
	}

}
