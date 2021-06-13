package com.encore.coinflow;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinDailyMapper {
	List<CoinDailyVO> getCoinList();
	void insertDaily(CoinDailyVO vo);
}
