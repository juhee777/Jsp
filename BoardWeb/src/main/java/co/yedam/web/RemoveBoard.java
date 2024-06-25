package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.Control;
import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.BoardVO;

public class RemoveBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
	    String bno = req.getParameter("bno");
		
	    //deleteBoard메소드의 매개값
	    BoardVO board = new BoardVO();
		board.setBoardNo(Integer.parseInt(bno));
		
		
		BoardService svc = new BoardServicrImpl();
		if(svc.deleteBoard(board.getBoardNo())) {
			resp.sendRedirect("boardList.do");
		}else {
			req.getRequestDispatcher("WEB-INF/view/removeBoardForm.jsp")
			.forward(req, resp);
		}
		
	
		
	}

}
