package com.encore.coinmap;

import java.util.Date;

import lombok.Data;

@Data
public class CoinmapVO {
	private int cmc_rank;
	private String symbol;
	private String name;
	private int id;
	private Date last_updated;
	private double percent_change_24h;
	private double market_cap;
}
