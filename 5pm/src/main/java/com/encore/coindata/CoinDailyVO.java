package com.encore.coindata;

import lombok.Data;

@Data
public class CoinDailyVO {
	private int idx;
	private String market;
	private String candle_date_time_utc;
	private String candle_date_time_kst;
	private double opening_price;
	private double high_price ;
	private double low_price ;
	private double trade_price ;
	private long timestamp_ ;
	private double candle_acc_trade_price ;
	private double candle_acc_trade_volume ;
	private double prev_closing_price ;
	private double change_price ;
	private double change_rate ;
	//private double converted_trade_price;
}
