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

public class SignUpBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String name = req.getParameter("name");
		
		BoardService svc = new BoardServicrImpl();
		
		SqlSession sqlSession = DataSource.getInstance().openSession();
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
		BoardVO board = new BoardVO();
		board.setId(id);
		board.setPw(pw);
		board.setName(name);
		
		if(svc.signUpBoard(board)) {
			System.out.println("정상등록");
			resp.sendRedirect("loginForm.do");
		}else {
			System.out.println("등록실패");
			req.getRequestDispatcher("member/signUpForm.tiles").forward(req, resp);
		}

	}

}
