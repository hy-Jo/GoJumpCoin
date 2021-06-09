package com.encore.coinmap;

import java.net.URL;
import java.util.List;

import org.json.JSONArray;

public interface CoinmapService {
	
	List<CoinmapVO> list_coinmap_data();

	JSONArray callAPI(URL url);
	
}
