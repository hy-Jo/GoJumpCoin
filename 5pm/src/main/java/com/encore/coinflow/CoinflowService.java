package com.encore.coinflow;

import java.util.Date;

import org.springframework.stereotype.Service;


public interface CoinflowService {
	double increaseRate(String name, String interval, Date now); //상승률
}
