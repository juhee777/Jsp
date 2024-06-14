package co.yedam.common;

import lombok.Data;

@Data
public class pageDTO {
	//현재페이지를 기준으로 보여줌
	private int startPate, endPage;
	//이전 10개 페이지가 있는지 이후 10개 페이지가 있는지 계산
	private boolean prev, next;
	private int page;
	
	//생성자.
	public pageDTO(int page, int totalCnt) {
		this.page = page; //11page ~ 14page ~ 20page
		this.endPage = (int) (Math.ceil(page / 10.0) * 10);
		this.startPate = this.endPage - 9; //11page~20page를 나오게 할려고 
		
		int realEnd = (int) Math.ceil(totalCnt/5.0); //페이지 계산
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPate > 1;
		this.next = this.endPage == realEnd ? false : true;
		
	}
	
}
