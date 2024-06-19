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
import co.yedam.web.AddBoard;
import co.yedam.web.AddForm;
import co.yedam.web.AddStudent;
import co.yedam.web.AjaxForm;
import co.yedam.web.BoardList;
import co.yedam.web.CheckIdAjax;
import co.yedam.web.GetBoard;
import co.yedam.web.LoginControl;
import co.yedam.web.LoginForm;
import co.yedam.web.LogoutControl;
import co.yedam.web.MainControl;
import co.yedam.web.MemberAddAjax;
import co.yedam.web.MemberAjax;
import co.yedam.web.MemberDelAjax;
import co.yedam.web.MemberList;
import co.yedam.web.ModifyBoard;
import co.yedam.web.ModifyForm;
import co.yedam.web.RemoveBoard;
import co.yedam.web.RemoveForm;
import co.yedam.web.ScriptForm;
import co.yedam.web.SignUpBoard;
import co.yedam.web.SignUpForm;
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
		
		//게시글목록.
		map.put("/boardList.do", new BoardList());
		//상세화면
		map.put("/getBoard.do", new GetBoard());
		//등록
		map.put("/addForm.do", new AddForm());//등록화면
		map.put("/addBoard.do", new AddBoard() );//정보db
		//삭제
		map.put("/removeForm.do", new RemoveForm());//삭제화면
		map.put("/removeBoard.do", new RemoveBoard());//삭제기능
		//수정화면
		map.put("/modifyForm.do", new ModifyForm());
		//수정처리
		map.put("/modifyBoard.do", new ModifyBoard());
		//로그인화면
		map.put("/loginForm.do", new LoginForm());
		//로그인기능
		map.put("/login.do", new LoginControl());
		//로그아웃
		map.put("/logout.do", new LogoutControl());
		
		//회원가입
		map.put("/signUpForm.do", new SignUpForm()); //화면
		map.put("/signUpBoard.do", new SignUpBoard()); //기능
		
		//회원목록(관리자템플릿)
		map.put("/memberList.do", new MemberList());
		
		//자바스크립트 연습용 페이지
		map.put("/script.do", new ScriptForm());
		//ajax연습
		map.put("/ajax.do", new AjaxForm());
		map.put("/membersAjax.do", new MemberAjax());
		map.put("/addAjax.do", new MemberAddAjax());//기능
		map.put("/checkIdAjax.do", new CheckIdAjax());
		map.put("/delAjax.do", new MemberDelAjax());//삭제기능
		
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
