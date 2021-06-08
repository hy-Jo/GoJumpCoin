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
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service("com.encore.coinmap.CoinMapServiceImpl")
public class CoinmapServiceImpl implements CoinmapService{
	
	@Autowired
	private CoinmapMapper mapper;

	@Override
	public List<CoinmapVO> list_coinmap_data() {
		// TODO Auto-generated method stub
		return mapper.list_coinmap_data();
	}
	
	@Override
	public JSONArray callAPI(URL url) {
		JSONArray json = null;
		try {
			
			HttpURLConnection con = (HttpURLConnection)url.openConnection();
			con.setConnectTimeout(5000);
			con.setReadTimeout(5000);	
			con.setRequestMethod("GET");
			con.setDoOutput(false);
			
			StringBuilder sb = new StringBuilder();

			
			if(con.getResponseCode() == HttpURLConnection.HTTP_OK) {
				BufferedReader br = new BufferedReader(
						new InputStreamReader(con.getInputStream(), "utf-8"));
				String line = "";
				while ((line = br.readLine()) != null) {
					sb.append(line).append("\n");
				}
				br.close();
				json = new JSONArray(sb.toString());
				//JSONObject obj = jsonArray.getJSONObject(0); 하나씩 가져오려면
				//System.out.println(json); //결과값 출력 - json으로
				System.out.println(json.get(0));
				JSONObject json1 = (JSONObject) json.get(0);
				System.out.println((json1.get("trade_price")));
			} else {
				System.out.println(con.getResponseMessage());
			}
			
		}catch(Exception e) {
			System.err.println(e.toString());
		}
		return json;
	}
	
	@RequestMapping(value = {"/coinmap"}, method = RequestMethod.GET)
	public String home(String currency) {
	
		StringBuffer result = new StringBuffer();
		currency = "KRW";

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

			JSONParser parser = new JSONParser(); 
			JSONObject json = (JSONObject) parser.parse(result.toString());

			fw.write(json.toString());
			System.out.println(result.toString());
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


}
