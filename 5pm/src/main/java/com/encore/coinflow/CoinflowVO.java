package com.encore.coinflow;

import lombok.Data;

@Data
public class CoinflowVO {
	private int idx;
	private String market;
	private int today;
	private int week1;
	private int month1;
	private int month3;
	private int month6;
	private int year1;
}
