package com.encore.coindata;

import java.util.List;

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
}
