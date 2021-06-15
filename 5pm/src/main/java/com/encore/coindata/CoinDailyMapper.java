package com.encore.coindata;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinDailyMapper {
	List<CoinDailyVO> getAllData();
	List<CoinDailyVO> getTodayCoin(String today);
	int getCoincycle(Map<String,Integer> map);
	void insert(CoinDailyVO vo);
}
