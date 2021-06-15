package com.encore.coinflow;

import java.net.URL;
import java.util.Date;
import java.util.List;


import org.json.JSONArray;


public interface CoinflowService {
	List<CoinflowVO> getCoinflowList(); //모든 coinflow 가져옴
	List<String> coinMarketList();
	String getKorName(CoinflowVO vo);
	JSONArray callAPI(URL url);
	URL getAPIURL(String name, String interval, int amount, Date day);
	int create(CoinflowVO vo);
	int update(CoinflowVO vo);
}
