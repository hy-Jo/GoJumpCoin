package com.encore.coindata;

import java.util.List;

public interface CoinDailyService {

	List<CoinDailyVO> getAllData();
	void insert(CoinDailyVO vo);
}
