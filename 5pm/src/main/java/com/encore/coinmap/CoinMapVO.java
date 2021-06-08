package com.encore.coinmap;

import java.util.Date;

import lombok.Data;

@Data
public class CoinMapVO {
	private double percent_change_24;
	private Date last_update;
	private String symbol;
	private String name;
	private int id;
	private int cmc_rank;
	private double market_cap;
}
