package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.MemberVO;

public class MemberDelAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		System.out.println(id);

		BoardService svc = new BoardServicrImpl();
		if (svc.delMemberAjax(id)) { // {"retCode":"OK"}
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}

	}

}
