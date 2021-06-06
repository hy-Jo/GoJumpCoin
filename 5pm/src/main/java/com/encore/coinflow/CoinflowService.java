package com.encore.coinflow;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

public interface CoinflowService {
	double increaseRate(String name, String interval, Date now); //상승률
	List<String> coinMarketList();
}
