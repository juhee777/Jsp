package co.yedam.service;

import java.util.List;
import java.util.Map;

import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;

public interface BoardService {
	List<BoardVO> boardList(SearchVO search);
	int boardTotal(SearchVO search); 
	BoardVO getBoard(int bno); //단건조회.
	boolean addBoard(BoardVO bvo);
	boolean editBoard(BoardVO bvo);//수정기능
	boolean deleteBoard(int bno);
	
	//checkMember(id, pw)
	MemberVO checkMember(String id, String pw);
	Map<String, String> addMember(MemberVO bvo);
	
	boolean signUpBoard(MemberVO bvo);
	
	List<MemberVO> memberList();
	
	boolean addMemberAjax(MemberVO bvo);
	boolean checkMemberId(String id);
	boolean delMemberAjax(String id);
	boolean updMemberAjax(MemberVO bvo);
	//파일첨부 회원등록
	boolean addMemberImage(MemberVO bvo);
	
}
