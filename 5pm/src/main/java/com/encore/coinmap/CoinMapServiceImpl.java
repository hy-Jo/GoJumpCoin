package com.encore.coinmap;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.encore.coinmap.CoinmapService;
import com.encore.coinmap.CoinmapVO;

@Service("com.encore.coinmap.CoinmapServiceImpl")
public class CoinmapServiceImpl implements CoinmapService{
	
//	@Autowired
//	private CoinmapService service;
	
	@Autowired
	private CoinmapMapper mapper;

	@Override
	public String getSector() {
		// TODO Auto-generated method stub
		return mapper.getSector();
	}
	@Override
	public List<CoinmapVO> getCoinmapList() {
		// TODO Auto-generated method stub
		return mapper.getCoinmapList();
	}

	@Override
	public JSONArray jsonCoinmap(String urlstr, String currency) {
		StringBuffer result = new StringBuffer(); 
		JSONArray resultJson = null;
		try {
			//File file = new File("src/main/resources/static/assets/coinmap_data.json");
			//FileWriter fw = new FileWriter(file);
			URL url = new URL(urlstr);
			HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
			urlconnection.setRequestMethod("GET");
			
			//InputStreamReader is = new InputStreamReader(urlconnection.getInputStream(), "UTF-8");
			BufferedReader br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

			String returnLine;
			while((returnLine = br.readLine()) != null) {
				result.append(returnLine + "\n");
				
			}
			urlconnection.disconnect();
			JSONObject json = new JSONObject(result.toString());
			JSONArray data = (JSONArray) json.get("data");
			resultJson = insertdata(json, data, currency);
			//fw.write(resultJson.toString());
			
			//System.out.println(file.getAbsolutePath());
			//System.out.println("file created");
			//fw.flush();
           // fw.close();
			
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return resultJson;
	}
	
	public JSONArray insertdata(JSONObject json, JSONArray data, String currency) {
		
		CoinmapVO vo = new CoinmapVO();
		mapper.deleteCoinmap(vo);
		
		for (int i = 0; i < data.length(); i ++) {
			
			JSONObject coinInfo = data.getJSONObject(i);
			JSONObject currInfo = coinInfo.getJSONObject("quote").getJSONObject(currency);
			
			int cmc_rank = coinInfo.getInt("cmc_rank");
			
			String name = coinInfo.getString("name");
			String symbol = coinInfo.getString("symbol");
			int id = coinInfo.getInt("id");
			String last_updated = currInfo.getString("last_updated");//.substring(0, 10);
			double market_cap = currInfo.getDouble("market_cap");
			double percent_change_24h=  Math.round((currInfo.getDouble("percent_change_24h")) * 100.0) / 100.0;
			
			///////// set VO
			
			vo.setCmc_rank(cmc_rank);
			vo.setName(name);
			vo.setSymbol(symbol);
			vo.setId(id);
			vo.setLast_updated(last_updated);
			vo.setPercent_change_24h(percent_change_24h);
			vo.setCurrency(currency);
			vo.setMarket_cap(market_cap);
			mapper.insert(vo);
			
			mapper.classify(vo);
			
			
			//////print each object in the json Array
			
//			System.out.println(i+ "cmc_rank: "+cmc_rank);
//			System.out.println("name: "+name);
//			System.out.println("symbol: "+symbol);
//			System.out.println("id: "+id);
//			System.out.println("last_updated: "+last_updated);
//			System.out.println("market_cap: "+market_cap);
//			System.out.println("percent_change_24h: "+percent_change_24h);
			
			
			
			vo = new CoinmapVO();
			
		}
		return data;
		
	}

	@Override
	public int insert(CoinmapVO vo) {
		// TODO Auto-generated method stub
		return mapper.insert(vo);
	}


	


}
