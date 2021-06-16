package com.encore.coindata;

import java.util.List;
import java.util.Map;

public interface CoinDailyService {
	List<CoinDailyVO> getAllData();
	List<CoinDailyVO> getTodayCoin(String today);
	int getCoincycle(Map<String,Integer> map);
	void insert(CoinDailyVO vo);
}
