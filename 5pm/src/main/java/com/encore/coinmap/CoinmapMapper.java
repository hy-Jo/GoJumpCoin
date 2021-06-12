package com.encore.coinmap;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinmapMapper {
	List<CoinmapVO> list_coinmap_data();
	CoinmapVO getCoinmap(String market);
	int insert(CoinmapVO vo);
	int updateCoinmap(CoinmapVO vo);
}