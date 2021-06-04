package com.encore.coinflow;

import static org.junit.jupiter.api.Assertions.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CoinflowAPITest {

	static final String CANDLE_API_URL = "https://api.upbit.com/v1/candles/";
	
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
				try {
					//URL url = new URL(CANDLE_API_URL+"weeks?/market=KRW-BTC&count=1");
					URL url = new URL("https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1");
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
					} else {
						System.out.println(con.getResponseMessage());
					}
					
				}catch(Exception e) {
					System.err.println(e.toString());
				}
	}

	@Test
	void testIncreaseRateW() {
		fail("Not yet implemented");
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
