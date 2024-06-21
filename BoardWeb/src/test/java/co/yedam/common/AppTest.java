package co.yedam.common;



import org.apache.ibatis.session.SqlSession;

import co.yedam.mapper.ReplyMapper;


public class AppTest {
	public static void main(String[] args) {
		SqlSession sqlSession =
				DataSource.getInstance().openSession(true); // true를 매개값으로 넣으면 자동커밋
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		//interface에 구현해 메소드가 하나만 있는 인터페이스:함수형인터페이스
		mapper.selectListPaging(224,5).forEach(reply -> System.out.println(reply));
		
	}
}
