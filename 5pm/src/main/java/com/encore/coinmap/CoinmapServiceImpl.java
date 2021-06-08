package com.encore.coinmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("com.encore.coinmap.CoinMapServiceImpl")
public class CoinMapServiceImpl implements CoinMapService{
	
	@Autowired
	private CoinMapMapper mapper;

}
