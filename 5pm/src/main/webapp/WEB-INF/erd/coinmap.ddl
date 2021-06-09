/**********************************/
/* Table Name: 코인맵 */
/**********************************/
CREATE TABLE coinmapData(
		cmc_rank                      		INT(10)		 NOT NULL AUTO_INCREMENT COMMENT '시총순위',
		symbol                        		VARCHAR(10)		 NOT NULL COMMENT '상표',
		name                          		VARCHAR(20)		 NOT NULL COMMENT '코인명',
		id                            		INT(10)		 NOT NULL COMMENT '식별번호',
		last_updated                  		DATE		 NULL  COMMENT '최신업데이트',
		percent_change_24h            		DOUBLE(10)		 NULL  COMMENT '변동률_24시간',
		market_cap                    		DOUBLE(10)		 NULL  COMMENT '시가총액'
) COMMENT='코인맵';


ALTER TABLE coinmapData ADD CONSTRAINT IDX_coinmapData_PK PRIMARY KEY (cmc_rank);

