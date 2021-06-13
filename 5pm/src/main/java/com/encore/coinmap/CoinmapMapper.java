package com.encore.coinmap;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinmapMapper {
	String getSector();
	int classify(CoinmapVO vo);
	int insert(CoinmapVO vo);
	int deleteCoinmap(CoinmapVO vo);
	int updateCoinmap(CoinmapVO vo);
	List<CoinmapVO> getCoinmapList();
}