package com.encore.coinmap;

import java.util.List;

import org.json.JSONArray;

public interface CoinmapService {
	String getSector();
	List<CoinmapVO> getCoinmapList();
	
	JSONArray jsonCoinmap(String urlstr, String currency);
	
	int insert(CoinmapVO vo);
	
	
}
