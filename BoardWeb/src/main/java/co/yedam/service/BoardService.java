package co.yedam.service;

import java.util.List;

import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList(SearchVO search);
	int boardTotal(SearchVO search); 
	BoardVO getBoard(int bno); //단건조회.
	boolean addBoard(BoardVO bvo);
	boolean editBoard(BoardVO bvo);//수정기능
	boolean deleteBoard(int bno);
	
	//checkMember(id, pw)
	boolean checkMember(String id, String pw);
}
