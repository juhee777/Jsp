package co.yedam.vo;



import java.util.Date;

import lombok.Data;

@Data
public class Student {
	private String stdNo; //오라클에서는 STDNO == stdno 동일함
	private String stdName;
	private String phone;
	private String bldType;
	private Date createDate;
	
	
	 
	
	
}
