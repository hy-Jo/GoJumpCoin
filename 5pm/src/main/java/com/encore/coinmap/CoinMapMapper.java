package com.encore.coinmap;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoinMapMapper {
	String getSector();
	int classify(CoinMapVO vo);
	int insert(CoinMapVO vo);
	int deleteCoinmap(CoinMapVO vo);
	int updateCoinmap(CoinMapVO vo);
	List<CoinMapVO> getCoinmapList();
}