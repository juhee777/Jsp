package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.common.pageDTO;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.BoardVO;
/*
 * oracle db에 글목록을 조회 -> boardList.jsp출력
 */
public class BoardList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String page = req.getParameter("page"); // http://localhost/BoardWeb/boardList.do?page=2 /?뒤에는 파라메터
		page = page == null ? "1" : page; //페이지의 값이 널이면 1값(페이지) 아니면 원래 page페이지
		BoardService svc = new BoardServicrImpl();
		List<BoardVO> list = svc.boardList(Integer.parseInt(page));
		
		req.setAttribute("boardList", list);
		
		// paging계산.
		int totalCnt = svc.boardTotal(); //1page ~ 25page
		pageDTO dto = new pageDTO(Integer.parseInt(page), totalCnt);
		req.setAttribute("paging", dto);
		
		req.getRequestDispatcher("WEB-INF/view/boardList.jsp").forward(req, resp);

	}

}
