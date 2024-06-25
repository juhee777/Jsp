package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNo;
	private String title;
	private String content;
	private String writer;
	private String clickCnt;
	private Date creationDate;
	private String id;
	private String pw;
	private String name;
	private String responsibility;
}
