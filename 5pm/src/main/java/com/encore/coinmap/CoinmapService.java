package com.encore.coinmap;

import java.util.List;

<<<<<<< HEAD
import org.json.JSONArray;

public interface CoinMapService {
	
	List<CoinMapVO> list_coinmap_data();

	JSONArray callAPI(URL url);
=======
public interface CoinmapService {
	
	List<CoinmapVO> list_coinmap_data();
	
	void jsonCoinmap(String urlstr, String currency);
	
	int insert(CoinmapVO vo);
	
>>>>>>> d79c88b27af5bb625898e2cfd2757021af2f7c5b
	
}
