package com.encore.coindata;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinDailyMapper {
	List<CoinDailyVO> getAllData();
	List<CoinDailyVO> getTodayCoin(String today);
	void insert(CoinDailyVO vo);
	
}
