package com.encore.coinflow;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service("com.encore.coinflow.CoinflowService")
public class CoinflowServiceImpl implements CoinflowService{

	static final String CANDLE_API_URL = "https://api.upbit.com/v1/candles/";
	
	@Override
	public double increaseRate(String name,String interval,Date time) {
		//~가격 - 전날종가(?)
		//https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1
		try {
			URL url = new URL(CANDLE_API_URL+interval+"?/count=1");
			HttpURLConnection con = (HttpURLConnection)url.openConnection();
			con.setConnectTimeout(5000);
			con.setReadTimeout(5000);
			con.addRequestProperty(name, interval);
			
			con.setRequestMethod("GET");
		}catch(Exception e) {
			
		}
		return 0;
	}
	
	@Override
	public double increaseRateW(String name) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double increaseRateM(String name) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double increaseRate3M(String name) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double increaseRate6M(String name) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double increaseRateY(String name) {
		// TODO Auto-generated method stub
		return 0;
	}



	

}
