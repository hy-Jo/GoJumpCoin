package com.encore.coinmap;

import java.util.Date;

import lombok.Data;

@Data
public class CoinMapVO {
	private int cmc_rank;
	private double percent_change_24h;
	private Date last_updated;
	private String symbol;
	private String name;
	private int id;
	private double market_cap;
}
