package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
/*
 * 업무프로세스를 따라 실행하기 위한 서비스
 */
import co.yedam.vo.MemberVO;

public class BoardServicrImpl  implements BoardService{
	SqlSession sqlSession =
			DataSource.getInstance().openSession(true); // true를 매개값으로 넣으면 자동커밋
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);

	@Override
	public List<BoardVO> boardList(SearchVO search) {
		//mapper 등록된 기능 활용
		return mapper.boardListPaging(search);
	}

	@Override
	public int boardTotal(SearchVO search) {
		// TODO Auto-generated method stub
		return mapper.getTotalCnt(search);
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
	public MemberVO checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id, pw);
	}
	
	@Override
	public boolean signUpBoard(MemberVO bvo) {
		// TODO Auto-generated method stub
		return mapper.insertMember(bvo) == 1;
	}
	
	@Override
	public List<MemberVO> memberList() {
		// TODO Auto-generated method stub
		return mapper.memberList();
	}
	
	@Override
	public boolean addMemberAjax(MemberVO bvo) {
		return mapper.insertMemberAjax(bvo) == 1;
	};
	
	@Override
	public boolean checkMemberId(String id) {
		// TODO Auto-generated method stub
		return mapper.selectMemberAjax(id) == 1;
	}
	
	@Override
	public boolean delMemberAjax(String id) {
		// TODO Auto-generated method stub
		return mapper.deleteMemberAjax(id) == 1;
	}
}
