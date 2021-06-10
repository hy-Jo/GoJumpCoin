package com.encore.coinmap;

import java.util.List;

public interface CoinmapService {
	
	List<CoinmapVO> list_coinmap_data();
	
	void jsonCoinmap(String urlstr, String currency);
	
	int insert(CoinmapVO vo);
	
	
}
