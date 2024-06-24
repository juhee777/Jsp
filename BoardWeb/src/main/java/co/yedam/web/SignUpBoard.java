package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServicrImpl;
import co.yedam.vo.MemberVO;

public class SignUpBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//파일첨부일 경우에는 multipart 요청을 처리
		//Multipart요청 (1.요청정보 2.저장위치 3.최대크기 4.인코딩 5.리네임정책)
		String savePath = req.getServletContext().getRealPath("images"); //프로젝트 폴더(images)가져오기
		int maxSize = 1024 * 1024 * 5; //파일 업로드 시 최대 파일 크기
		String encoding = "utf-8";
		//객체생성(파일 업로드 처리) 매개변수로는 HttpServletRequest 객체, 저장 경로, 최대 파일 크기, 인코딩 방식, 파일 이름 중복 처리 정책을 전달
		MultipartRequest mr = new MultipartRequest(req, savePath, maxSize, encoding, new DefaultFileRenamePolicy());
		
		String id = mr.getParameter("id");
		String pw = mr.getParameter("pw");
		String name = mr.getParameter("name");
		String img = mr.getFilesystemName("myImage"); //업로드된 파일 이름 가져오기
		
		
		MemberVO board = new MemberVO();
		board.setUserId(id);
		board.setUserPw(pw);
		board.setUserName(name);
		board.setImage(img);
		
		BoardService svc = new BoardServicrImpl();
		
		try {
			if(svc.addMemberImage(board)) {
				resp.sendRedirect("memberList.do");
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		

	}

}
