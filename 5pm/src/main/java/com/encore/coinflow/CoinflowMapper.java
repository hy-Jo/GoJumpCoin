package com.encore.coinflow;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinflowMapper {
	List<CoinflowVO> getCoinflowList();
	CoinflowVO getCoinflow(String market);
	int create(CoinflowVO vo);
	int update(CoinflowVO vo);
}
