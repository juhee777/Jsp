package co.yedam.book.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.book.service.BookService;
import co.yedam.book.service.BookServiceImpl;
import co.yedam.book.vo.BookVO;
import co.yedam.common.Control;

public class AddBook implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String cod = req.getParameter("bookCode");
		String bname = req.getParameter("bookName");
		String author = req.getParameter("author");
		String publisher = req.getParameter("company");
		String money = req.getParameter("price");
		
		BookVO bvo = new BookVO();
		bvo.setBookCode(cod);
		bvo.setBookName(bname);
		bvo.setAuthor(author);
		bvo.setCompany(publisher);
		bvo.setPrice(money);
		
		
		BookService svc = new BookServiceImpl();
		if(svc.addBook(bvo)) {
			resp.getWriter().print("{\"retCode\": \"OK\", \"retMsg\": \"Success\"}");
		}else { //{'retCode": "NG", "retMsg": "Fail"}
			resp.getWriter().print("{\"retCode\": \"NG\", \"retMsg\": \"Fail\"}");
		}
	}

}
