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

public class AddBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String title = req.getParameter("title");
		String writer = req.getParameter("writer");
		String content = req.getParameter("content");
		
		BoardService svc = new BoardServicrImpl();
		
		SqlSession sqlSession = DataSource.getInstance().openSession();
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
		BoardVO board = new BoardVO();
		board.setTitle(title);
		board.setWriter(writer);
		board.setContent(content);
		
		if(svc.addBoard(board)) {
			System.out.println("정상등록");
			resp.sendRedirect("boardList.do");
		}else {
			System.out.println("등록실패");
			req.getRequestDispatcher("WEB-INF/view/addBoard.jsp")
			.forward(req, resp);
		}
	}

}
