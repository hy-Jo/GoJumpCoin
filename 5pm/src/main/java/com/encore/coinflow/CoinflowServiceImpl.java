package com.encore.coinflow;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.encore.utility.Utility;

@Service("com.encore.coinflow.CoinflowServiceImpl")
public class CoinflowServiceImpl implements CoinflowService{

	static final String CANDLE_API_URL = "https://api.upbit.com/v1/candles/";
	
	@Autowired
	private CoinflowMapper mapper;
	
	/** https://api.upbit.com/v1/candles/days?market=KRW-BTC&to=2020-04-18%2009:00:00&count=1 일캔들 이용
	 * name : 비트코인 이름
	 * interval : 날짜간격
	 * Date : 현재날짜
	 */
	@Override
	public double increaseRate(URL url,URL pUrl) {
		JSONArray json = null;
		try {
			callAPI(url);
			callAPI(pUrl);
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

	/**
	 * 
	 * @param url 현재가격 담은 url
	 * @return api 호출 결과
	 */
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

	/**
	 * 현재날짜 구하려면 interval을 now로
	 * interval : now, week, month, year
	 */
	@Override
	public URL getAPIURL(String name, String interval, int amount, Date day) {
		URL url = null;
		try {
			SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat time = new SimpleDateFormat("hh:mm:ss");
			if (interval == "now") {
				url = new URL(CANDLE_API_URL+"days?market="+name+"&to="+date.format(day)+"%20"+time.format(day)+"&count=1"); //오늘 날짜 기준
			}else {
				String pDate = Utility.pastDate(date.format(day), amount, interval);//interval전 날짜 기준
				url = new  URL(CANDLE_API_URL+"days?market="+name+"&to="+pDate+"%20"+time.format(day)+"&count=1");
			}
			System.out.println(url);
			
		}catch(Exception e) {
			System.err.println(e.toString());
		}
		return url;
	}

	
	}

