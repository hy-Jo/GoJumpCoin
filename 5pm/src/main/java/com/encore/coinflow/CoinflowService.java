package com.encore.coinflow;

import java.net.URL;
import java.util.Date;
import java.util.List;


import org.json.JSONArray;


public interface CoinflowService {
	double increaseRate(URL url, URL pUrl); //상승률
	List<String> coinMarketList();
	JSONArray callAPI(URL url);
	URL getAPIURL(String name, String interval, int amount, Date day);
	int create(CoinflowVO vo);
	int update(CoinflowVO vo);
}
