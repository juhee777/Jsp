package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		//interface - 구현객체
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
		List<BoardVO> list = mapper.boardList();
		for(BoardVO bvo : list) {
			System.out.println(bvo.toString());
		}
		
//		Student std = new Student();
//		std.setStdNo("s0020");
//		std.setStdName("김영만");
//		std.setPhone("010-8566-0342");
//		std.setBldType("A");
//		
////		sqlSession.insert("co.yedam.mapper.StudentMapper.insertStudent", std);
////		sqlSession.commit();
//		
//		sqlSession.update("co.yedam.mapper.StudentMapper.updateStudent", std);
//		mapper.updateStudent(std);
//		sqlSession.commit();
//
//		// 학생 삭제
//        std.setStdNo("s0020");
//            
//        sqlSession.delete("co.yedam.mapper.StudentMapper.deleteStudent", std);
//            
//        mapper.deleteStudent(std);
//        sqlSession.commit();
//		
//		List<Student> list //
//				= sqlSession.selectList("co.yedam.mapper.StudentMapper.selectBlog");
////		        = mapper.selectBlog();
//		for(Student std1 : list) {
//			System.out.println(std1.toString());
//		}
		
	}
}
