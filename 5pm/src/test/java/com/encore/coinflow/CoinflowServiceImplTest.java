package com.encore.coinflow;

import static org.junit.jupiter.api.Assertions.*;

import java.net.URL;
import java.util.Date;

import org.json.JSONArray;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CoinflowServiceImplTest {

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
		CoinflowServiceImpl service = new CoinflowServiceImpl();
		Date now = new Date();
		URL url = null;
		JSONArray nowJson = null;
		for(String market : service.coinMarketList()) {
			try {
				url = service.getAPIURL(market,"now", 1, now);
				nowJson = service.callAPI(url); //현재기준 api는 미리 호출해놓고
                System.out.println(nowJson);
                System.out.println(service.callAPI(service.getAPIURL(market, "week", 1, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "month", 1, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "month", 3, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "month", 6, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "year", 1, now)));
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}		
	}

	@Test
	void testCoinMarketList() {
		fail("Not yet implemented");
	}

	@Test
	void testCallAPI() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAPIURL() {
		fail("Not yet implemented");
	}

}
