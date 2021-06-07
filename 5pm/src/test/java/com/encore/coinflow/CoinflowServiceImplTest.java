package com.encore.coinflow;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Date;

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
		service.increaseRate("KRW-BTC","week", 1, new Date());
		service.increaseRate("KRW-BTC","month", 1, new Date());
		service.increaseRate("KRW-BTC","month", 3, new Date());
		service.increaseRate("KRW-BTC","month", 6, new Date());
		service.increaseRate("KRW-BTC","year", 1, new Date());
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
