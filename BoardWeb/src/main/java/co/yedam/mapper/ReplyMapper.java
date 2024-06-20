package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.ReplyVO;

public interface ReplyMapper {
	//목록, 단건조회, 등록, 삭제
	List<ReplyVO> selectList(int boardNo);
	ReplyVO selectReply(int replyNO);
	int insertReply(ReplyVO rvo);
	int deleteReply(int replyNO);
}
