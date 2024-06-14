package co.yedam.common;

import org.apache.ibatis.session.SqlSession;

import co.yedam.mapper.BoardMapper;

public class AppTest {
	public static void main(String[] args) {
		SqlSession sqlSession =
				DataSource.getInstance().openSession(true); // true를 매개값으로 넣으면 자동커밋
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
		SearchVO search = new SearchVO(1, "T", "java");
		
		mapper.boardListPaging(search).forEach(bvo -> System.out.println(bvo));
		
	}
}
