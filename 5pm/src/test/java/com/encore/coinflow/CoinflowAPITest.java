package com.encore.coinflow;

import static org.junit.jupiter.api.Assertions.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


class CoinflowAPITest {
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testIncreaseRate() {
		//~가격 - 전날종가(?) 아니면 현가. 일단 전날종가로
		//https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1
//JSONObject json = null; return 타입이 JSONArray여서 이걸로 받아줌
		/*
		 * JSONArray json = null; try { //URL url = new
		 * URL(CANDLE_API_URL+"weeks?/market=KRW-BTC&count=1");https://api.upbit.com/v1/
		 * market/all URL url = new
		 * URL("https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1");
		 * HttpURLConnection con = (HttpURLConnection)url.openConnection();
		 * con.setConnectTimeout(5000); con.setReadTimeout(5000);
		 * //con.addRequestProperty("KRW-BTC", "weeks"); con.setRequestMethod("GET");
		 * con.setDoOutput(false);
		 * 
		 * StringBuilder sb = new StringBuilder();
		 * 
		 * 
		 * if(con.getResponseCode() == HttpURLConnection.HTTP_OK) { BufferedReader br =
		 * new BufferedReader( new InputStreamReader(con.getInputStream(), "utf-8"));
		 * String line = ""; while ((line = br.readLine()) != null) {
		 * sb.append(line).append("\n"); } br.close(); System.out.println("" +
		 * sb.toString()); json = new JSONArray(sb.toString()); //JSONObject obj =
		 * jsonArray.getJSONObject(0); 하나씩 가져오려면 System.out.println(json); } else {
		 * System.out.println(con.getResponseMessage()); }
		 * 
		 * }catch(Exception e) { System.err.println(e.toString()); }
		 */	
	CoinflowServiceImpl service = new CoinflowServiceImpl();
	service.increaseRate("KRW-BTC","", null);
	}

	@Test
	void testIncreaseRateW() {
		for(int i=0;  i<=117; i++) {
			System.out.println("count"+i);
			try {
				Thread.sleep(500); // 중지시켜서 요청수를 한번 체크 -> 0.25초는 안되고 0.5초는 117회 요청이됨. 대신 오래걸림
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			testIncreaseRate();
		}
	}

	@Test
	void testIncreaseRateM() {
		fail("Not yet implemented");
	}

	@Test
	void testIncreaseRate3M() {
		fail("Not yet implemented");
	}

	@Test
	void testIncreaseRate6M() {
		fail("Not yet implemented");
	}

	@Test
	void testIncreaseRateY() {
		fail("Not yet implemented");
	}

}
