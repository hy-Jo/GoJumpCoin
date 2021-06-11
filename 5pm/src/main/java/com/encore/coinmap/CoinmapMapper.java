package com.encore.coinmap;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

<<<<<<< HEAD
public interface CoinMapMapper {
	
	List<CoinMapVO> list_coinmap_data();

}
=======
@Mapper
public interface CoinmapMapper {
	List<CoinmapVO> list_coinmap_data();
	CoinmapVO getCoinmap(String market);
	int insert(CoinmapVO vo);
	int updateCoinmap(CoinmapVO vo);
}
>>>>>>> d79c88b27af5bb625898e2cfd2757021af2f7c5b
