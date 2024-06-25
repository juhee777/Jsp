package co.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ReplyService;
import co.yedam.service.ReplyServicelmpl;

public class CenterChart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8"); //타입을 json으로 설정하고 문자 한글적용, 데이터를 json으로 인식
		
		ReplyService svc = new ReplyServicelmpl();
		List<Map<String, Object>> result = svc.centerList(); //String은 키, object는 값으로 타입의 객체들을 순서대로 저장할 수 있는 리스트
		          //데이터를 result에 할당 -> result 변수에는 데이터베이스에서 가져온 데이터가 List<Map<String, Object>> 즉 여러개의 Map객체들이 담겨있는 형태로 저장
		
		Map<String , Object> centerMap = new HashMap<String, Object>(); //centerMap이라는 Map<String, Object> 타입의 변수를 선언하고 초기화
		//Map은 키-값 쌍으로 데이터를 저장하는 자료구조
		for(Map<String,Object> map : result) { //(데이터타입 변수명: 컬렉션객체)
			System.out.println(map.get("sido") + ", " + map.get("cnt"));
			System.out.println("--------------------");
			centerMap.put((String) map.get("sido"), map.get("cnt"));
		}
		Gson gson = new GsonBuilder().create();
		//여러 개의 Map 객체들이 JSON 형태로 변환, centerMap은 단 하나의 Map 객체
		String json = gson.toJson(result); //centerMap을 넣으면 chart.jsp에서 for in 문으로 
		System.out.println("Map");
		resp.getWriter().print(json);
	}

}
