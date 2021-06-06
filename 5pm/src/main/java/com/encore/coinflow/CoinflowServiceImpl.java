package com.encore.coinflow;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("com.encore.coinflow.CoinflowServiceImpl")
public class CoinflowServiceImpl implements CoinflowService{

	static final String CANDLE_API_URL = "https://api.upbit.com/v1/candles/";
	
	@Autowired
	private CoinflowMapper mapper;
	
	/**
	 * name : 비트코인 이름
	 * interval : 날짜간격
	 * Date : 현재날짜
	 */
	@Override
	public double increaseRate(String name,String interval,Date now) {
		//~가격 - 전날종가(?) 아니면 현가. 일단 전날종가로
		//https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1
		JSONArray json = null;
		try {
			//URL url = new URL(CANDLE_API_URL+"weeks?/market=KRW-BTC&count=1");https://api.upbit.com/v1/market/all
			URL url = new URL("https://api.upbit.com/v1/candles/weeks?market="+name+"&count=1");
			HttpURLConnection con = (HttpURLConnection)url.openConnection();
			con.setConnectTimeout(5000);
			con.setReadTimeout(5000);
			//con.addRequestProperty("KRW-BTC", "weeks");	
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
				System.out.println("" + sb.toString());
				json = new JSONArray(sb.toString());
				//JSONObject obj = jsonArray.getJSONObject(0); 하나씩 가져오려면
				System.out.println(json);
			} else {
				System.out.println(con.getResponseMessage());
			}
			
		}catch(Exception e) {
			System.err.println(e.toString());
		}
		return 0;
	}

	@Override
	public List<String> coinMarketList() {
		List<CoinflowVO> coinflowlist = this.mapper.coinlist();
		ArrayList<String> list = new ArrayList<String>();
		for(CoinflowVO coin : coinflowlist) {
			list.add(coin.getMarket());
		}
		return list;
	}
	
	}

