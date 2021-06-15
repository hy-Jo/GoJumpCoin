package com.encore.coinflow;

import lombok.Data;

@Data
public class CoinflowVO {
	private int idx;
	private String market;
	private double today;
	private double week1;
	private double month1;
	private double month3;
	private double month6;
	private double year1;
}