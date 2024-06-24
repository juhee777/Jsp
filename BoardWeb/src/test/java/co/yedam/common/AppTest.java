package co.yedam.common;



import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.session.SqlSession;

import co.yedam.mapper.ReplyMapper;


public class AppTest {
	public static void main(String[] args) {
		SqlSession sqlSession =
				DataSource.getInstance().openSession(true); // true를 매개값으로 넣으면 자동커밋
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		
		List<Map<String, Object>> result = mapper.centerBysido();
		for(Map<String,Object> map : result) {
			Set<String> keyset =  map.keySet();
			System.out.println(map.get("sido") + ", " + map.get("cnt"));
			System.out.println("--------------------");
		}
		
	}
}
