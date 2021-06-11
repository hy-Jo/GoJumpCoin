package com.encore.coinmap;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.databind.ObjectMapper;

//@RestController
@CrossOrigin("*")
@Controller
public class CoinMapController {
	//private CoinMapService coinmapService;

	@Autowired
	@Qualifier("com.encore.coinmap.CoinMapServiceImpl")
	private CoinMapService service;
	
	public CoinMapController() {
		System.out.println("CoinMapController 호출");
	}
	
	@RequestMapping(value = {"/coinmap"}, method = RequestMethod.GET)
	public String home() {
		StringBuffer result = new StringBuffer();
		String currency = "KRW";
		JSONObject data_prepro = new JSONObject();

		try {
			//String urlstr = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert="
			String urlstr = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c&convert="
							+currency;
			ObjectMapper mapper = new ObjectMapper();
			File file = new File("src/main/resources/static/assets/coinmap_data.json");
			FileWriter fw = new FileWriter(file);
			URL url = new URL(urlstr);
			HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
			urlconnection.setRequestMethod("GET");
			
			//InputStreamReader is = new InputStreamReader(urlconnection.getInputStream(), "UTF-8");
			BufferedReader br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

			String returnLine;
			while((returnLine = br.readLine()) != null) {
				result.append(returnLine + "\n");
				
			}
			JSONObject json = new JSONObject(result.toString());
			JSONArray data = (JSONArray) json.get("data");
			JSONObject coinInfo = data.getJSONObject(0);
			JSONObject currInfo = coinInfo.getJSONObject("quote").getJSONObject("KRW");
			
			int cmc_rank = coinInfo.getInt("cmc_rank");
			
			String name = coinInfo.getString("name");
			String symbol = coinInfo.getString("symbol");
			int id = coinInfo.getInt("id");
			String last_updated = currInfo.getString("last_updated").substring(0, 10);
			double market_cap = currInfo.getDouble("market_cap");
			double percent_change_24h=  Math.round((currInfo.getDouble("percent_change_24h")) * 100.0) / 100.0;
			
			data_prepro.put("cmc_rank", cmc_rank);
			data_prepro.put("name", name);
			data_prepro.put("symbol", symbol);
			data_prepro.put("percent_change_24h", percent_change_24h);
			data_prepro.put("last_updated", last_updated);
			data_prepro.put("market_cap", market_cap);
			fw.write(data_prepro.toString());
			
			System.out.println("cmc_rank: "+cmc_rank);
			System.out.println("name: "+name);
			System.out.println("symbol: "+symbol);
			System.out.println("id: "+id);
			System.out.println("last_updated: "+last_updated);
			System.out.println("market_cap: "+market_cap);
			System.out.println("percent_change_24h: "+percent_change_24h);
			
			System.out.println(file.getAbsolutePath());
			System.out.println("file created");
			fw.flush();
            fw.close();
			urlconnection.disconnect();
		}catch(Exception e){
			e.printStackTrace();
		}
		return "/coinmap";
	}
	
	/*
	 * @GetMapping("/list") public Iterable<CoinmapData> list() { return
	 * coinmapService.list(); }
	 */
}

