<<<<<<< HEAD
package com.encore.coindata;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("com.encore.coindata.CoinDailyServiceImpl")
public class CoinDailyServiceImpl implements CoinDailyService{

	@Autowired
	private CoinDailyMapper mapper;

	@Override
	public List<CoinDailyVO> getAllData() {
		return mapper.getAllData();
	}

	@Override
	public void insert(CoinDailyVO vo) {
		mapper.insert(vo);
	}

	@Override
	public List<CoinDailyVO> getTodayCoin(String today) {
		return mapper.getTodayCoin(today);
	}

	@Override
	public int getCoincycle(Map<String, Integer> map) {
		return mapper.getCoincycle(map);
	}
}
=======
package com.encore.coindata;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("com.encore.coindata.CoinDailyServiceImpl")
public class CoinDailyServiceImpl implements CoinDailyService{

	@Autowired
	private CoinDailyMapper mapper;

	@Override
	public List<CoinDailyVO> getAllData() {
		return mapper.getAllData();
	}

	@Override
	public void insert(CoinDailyVO vo) {
		mapper.insert(vo);
	}

	@Override
	public List<CoinDailyVO> getTodayCoin(String today) {
		return mapper.getTodayCoin(today);
	}

	@Override
	public int getCoincycle(Map<String, Integer> map) {
		return mapper.getCoincycle(map);
	}
}
>>>>>>> 6b40e0fc80692c261b82ba81431cc077b11010fc
