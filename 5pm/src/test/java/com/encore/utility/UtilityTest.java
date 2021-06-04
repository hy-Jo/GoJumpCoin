package com.encore.utility;

import static org.junit.jupiter.api.Assertions.*;

import java.text.ParseException;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UtilityTest {

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
	void testPastDate() throws ParseException {
		System.out.println( Utility.pastDate("2021-05-31", 3,"week"));
		System.out.println( Utility.pastDate("2021-05-31", 3,"year"));
		System.out.println( Utility.pastDate("2021-05-31", 3,"month"));
	}

}
