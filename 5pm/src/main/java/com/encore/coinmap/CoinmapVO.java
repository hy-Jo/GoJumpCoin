package com.encore.coinmap;

import lombok.Data;

@Data
public class CoinmapVO {
	private String currency;
	private int cmc_rank;
	private String symbol;
	private String name;
	private int id;
	private String last_updated; //or Date type
	private double percent_change_24h;
	private double market_cap;
	private String sector;
	
}
