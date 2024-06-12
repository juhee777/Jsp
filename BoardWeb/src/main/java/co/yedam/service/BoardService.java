package co.yedam.service;

import java.util.List;

import co.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList(int page);
	int boardTotal(); 
	BoardVO getBoard(int bno); //단건조회.
	boolean addBoard(BoardVO bvo);
	boolean editBoard(BoardVO bvo);
	boolean deleteBoard(int bno);
}
