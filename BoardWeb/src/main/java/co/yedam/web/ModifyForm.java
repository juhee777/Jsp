package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.BoardVO;

public class ModifyForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition"); //페이지 값 계속 가져오게
		String kw = req.getParameter("keyword");
		//글번호 bno 정보를 조회
		
		BoardService svc = new BoardServicrImpl();
		BoardVO board = svc.getBoard(Integer.parseInt(bno));
		
		//요청정보의 attribute(=board)
		req.setAttribute("board", board);
		req.setAttribute("page", page);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		req.getRequestDispatcher("board/modifyBoardForm.tiles")
		.forward(req, resp);
	}

}
