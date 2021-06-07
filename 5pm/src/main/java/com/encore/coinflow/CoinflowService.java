package com.encore.coinflow;

import java.net.URL;
import java.util.Date;
import java.util.List;


import org.json.JSONArray;


public interface CoinflowService {
	double increaseRate(String name, String interval, int amount, Date day); //상승률
	List<String> coinMarketList();
	JSONArray callAPI(URL url);
	URL getAPIURL(String name, String interval, int amount, Date day);
	
}
