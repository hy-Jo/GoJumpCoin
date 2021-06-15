<<<<<<< HEAD
package com.encore.coindata;

import java.util.List;
import java.util.Map;

public interface CoinDailyService {
	List<CoinDailyVO> getAllData();
	List<CoinDailyVO> getTodayCoin(String today);
	int getCoincycle(Map<String,Integer> map);
	void insert(CoinDailyVO vo);
}
=======
package com.encore.coindata;

import java.util.List;
import java.util.Map;

public interface CoinDailyService {
	List<CoinDailyVO> getAllData();
	List<CoinDailyVO> getTodayCoin(String today);
	int getCoincycle(Map<String,Integer> map);
	void insert(CoinDailyVO vo);
}
>>>>>>> 6b40e0fc80692c261b82ba81431cc077b11010fc
