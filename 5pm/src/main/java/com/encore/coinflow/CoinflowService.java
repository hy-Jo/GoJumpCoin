package com.encore.coinflow;

import java.util.Date;

import org.springframework.stereotype.Service;


public interface CoinflowService {
	double increaseRate(String name, String interval, Date time); //상승률
	double increaseRateW(String name); //일주일 상승률
	double increaseRateM(String name);//1개월 상승률
	double increaseRate3M(String name);//3개월 상승률
	double increaseRate6M(String name);//6개월 상승률
	double increaseRateY(String name);//1년 상승률
	
}
