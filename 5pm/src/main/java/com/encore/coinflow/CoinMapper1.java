package com.encore.coinflow;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinMapper1 {
	List<CoinVO> coinlist(); //코인정보 리턴
	String getKorName(String string); //코인 한글명 리턴
}
