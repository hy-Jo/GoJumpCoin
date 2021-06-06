package com.encore.coinflow;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinflowMapper {
	List<CoinflowVO> coinlist(); //코인정보 리턴
}
