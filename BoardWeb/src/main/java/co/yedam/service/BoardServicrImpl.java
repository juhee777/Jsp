package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
/*
 * 업무프로세스를 따라 실행하기 위한 서비스
 */

public class BoardServicrImpl  implements BoardService{
	SqlSession sqlSession =
			DataSource.getInstance().openSession(true); // true를 매개값으로 넣으면 자동커밋
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);

	@Override
	public List<BoardVO> boardList(int page) {
		//mapper 등록된 기능 활용
		return mapper.boardListPaging(page);
	}

	@Override
	public int boardTotal() {
		// TODO Auto-generated method stub
		return mapper.getTotalCnt();
	}
	
	@Override
	public BoardVO getBoard(int bno) {
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean addBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.insertBoard(bvo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.updateBoard(bvo) == 1;
	}

	@Override
	public boolean deleteBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.deleteBoard(bno) == 1;
	}
	
	@Override
	public boolean checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id, pw) == 1;
	}
	
	

}
