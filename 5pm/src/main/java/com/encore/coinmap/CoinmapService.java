package com.encore.coinmap;

import java.net.URL;
import java.util.List;

import org.json.JSONArray;

public interface CoinMapService {
	
	List<CoinMapVO> list_coinmap_data();

	JSONArray callAPI(URL url);
	
}
