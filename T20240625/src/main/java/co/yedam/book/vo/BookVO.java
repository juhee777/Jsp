package co.yedam.book.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BookVO {
	private String bookCode;
	private String bookName;
	private String author;
	private String company;
	private String price;
	private Date createDate;
}
