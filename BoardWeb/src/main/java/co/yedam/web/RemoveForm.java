package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.BoardVO;

public class RemoveForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");
		
		BoardService svc = new BoardServicrImpl();
		BoardVO board = svc.getBoard(Integer.parseInt(bno));
		
		req.setAttribute("board", board);
		
		req.getRequestDispatcher("WEB-INF/view/removeBoardForm.jsp")
		.forward(req, resp);

	}

}
