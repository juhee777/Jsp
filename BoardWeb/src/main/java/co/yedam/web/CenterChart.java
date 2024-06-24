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
		resp.setContentType("text/json;charset=utf-8");
		
		ReplyService svc = new ReplyServicelmpl();
		List<Map<String, Object>> result = svc.centerList();
		
		Map<String , Object> centerMap = new HashMap<String, Object>();
		//String이 키, object가 값 (값은 문자열과 숫자가 동시에 있으니 object로)
		for(Map<String,Object> map : result) {
			System.out.println(map.get("sido") + ", " + map.get("cnt"));
			System.out.println("--------------------");
			centerMap.put((String) map.get("sido"), map.get("cnt"));
		}
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(result); //centerMap을 넣으면 chart.jsp에서 for in 문으로 
		System.out.println("Map");
		resp.getWriter().print(json);
	}

}
