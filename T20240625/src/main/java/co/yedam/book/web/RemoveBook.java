package co.yedam.book.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.book.service.BookService;
import co.yedam.book.service.BookServiceImpl;
import co.yedam.book.vo.BookVO;
import co.yedam.common.Control;

public class RemoveBook implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String cod = req.getParameter("bookCode");

		
		BookVO bvo = new BookVO();
		bvo.setBookCode(cod);
	
		
		BookService svc = new BookServiceImpl();
		if(svc.removeBook(cod)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		
	}

}
