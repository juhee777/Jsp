package co.yedam;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.web.AddStudent;
import co.yedam.web.MainControl;
import co.yedam.web.StudentForm;
import co.yedam.web.productControl;

// front -> 요청url(*.do) - 실행컨트롤 매칭
// main.do -> FrontController -> WEB-INF/public/main.jsp
// 객체생성 -> init -> service -> destroy
public class FrontController extends HttpServlet {
	private Map<String, Control> map; // key: url, value:control

	public FrontController() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/main.do", new MainControl());
		map.put("/product.do", new productControl());
		// map.put("/board.do", "게시판페이지입니다");
		// 학생등록화면 studentForm.do
		map.put("/studentForm.do", new StudentForm());//등록화면
		map.put("/addStudent.do", new AddStudent());//정보db
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uri = req.getRequestURI(); // http://localhose/BoardWeb/board.do
//		System.out.println("uri: " + uri); // /BoardWeb/board.do
		String context = req.getContextPath(); // /BoardWeb => project name
//		System.out.println("context: " + context);
		String page = uri.substring(context.length());
		
		Control result = map.get(page);
		result.exec(req, resp);
	}
}
