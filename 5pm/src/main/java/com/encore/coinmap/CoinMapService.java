package com.encore.coinmap;

import java.util.List;

import org.json.JSONArray;

public interface CoinMapService {
	String getSector();
	List<CoinMapVO> getCoinmapList();
	
	JSONArray jsonCoinmap(String urlstr, String currency);
	
	int insert(CoinMapVO vo);
	
	
}
