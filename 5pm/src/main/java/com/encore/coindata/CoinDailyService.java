package com.encore.coindata;

import java.util.List;

public interface CoinDailyService {

	List<CoinDailyVO> getAllData();
	List<CoinDailyVO> getTodayCoin(String today);
	void insert(CoinDailyVO vo);
}
