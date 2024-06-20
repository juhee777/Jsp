package co.yedam.common;

import java.util.function.Consumer;

import org.apache.ibatis.session.SqlSession;

import co.yedam.mapper.ReplyMapper;
import co.yedam.vo.ReplyVO;

public class AppTest {
	public static void main(String[] args) {
		SqlSession sqlSession =
				DataSource.getInstance().openSession(true); // true를 매개값으로 넣으면 자동커밋
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		//interface에 구현해 메소드가 하나만 있는 인터페이스:함수형인터페이스
		
		//mapper.selectList(201).forEach(t -> System.out.println(reply));
		//ReplyVO rvo =  mapper.selectReply(24);
		//System.out.println(24);
		ReplyVO rvo = new ReplyVO();
		rvo.setReply("댓글작성테스트");
		rvo.setReplyer("admin");
		rvo.setBoardNo(201);
		
		try {
			if(mapper.insertReply(rvo) == 1) {
				System.out.println("입력성공");
			}
		}catch (Exception e){
			System.out.println("예외발생");
		}
		mapper.selectList(201).forEach(reply -> System.out.println(reply));
		
	}
}
