package co.yedam;

public class Student {
	private String stdNo; //오라클에서는 STDNO == stdno 동일함
	private String stdName;
	private String phone;
	private String bleType;
	private String createDate;
	
	public String getStdNo() {
		return stdNo;
	}
	public void setStdNo(String stdNo) {
		this.stdNo = stdNo;
	}
	public String getStdName() {
		return stdName;
	}
	public void setStdName(String stdName) {
		this.stdName = stdName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getBleType() {
		return bleType;
	}
	public void setBleType(String bleType) {
		this.bleType = bleType;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	
	
	// toString 오버라이드
	@Override
	public String toString() {
		return "Student [stdNo=" + stdNo + ", stdName=" + stdName + ", phone=" + phone + ", bleType=" + bleType
				+ ", createDate=" + createDate + "]";
	}
	
	
	
	
}
