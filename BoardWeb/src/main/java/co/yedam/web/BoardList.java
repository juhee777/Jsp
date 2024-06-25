package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.common.SearchVO;
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
		String sc = req.getParameter("searchCondition"); //페이지가 하나더 들어옴
		String kw = req.getParameter("keyword");
		
	
		
		page = page == null ? "1" : page; //페이지의 값이 널이면 1값(페이지) 아니면 원래 page페이지
		//검색조건들을 담는 SearchVO
		SearchVO search = new SearchVO(Integer.parseInt(page), sc, kw);
		
		BoardService svc = new BoardServicrImpl();
		List<BoardVO> list = svc.boardList(search);
		
		req.setAttribute("boardList", list);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		
		// paging계산.
		int totalCnt = svc.boardTotal(search); //1page ~ 25page
		pageDTO dto = new pageDTO(Integer.parseInt(page), totalCnt);
		req.setAttribute("paging", dto);
		
		req.getRequestDispatcher("board/boardList.tiles").forward(req, resp);

	}

}
