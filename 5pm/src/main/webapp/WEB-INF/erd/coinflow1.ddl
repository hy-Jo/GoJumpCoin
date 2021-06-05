/**********************************/
/* Table Name: Table1 */
/**********************************/
CREATE TABLE TABLE_1(
		idx                           		INT(10)		 NOT NULL		 PRIMARY KEY AUTO_INCREMENT COMMENT '코인인덱스',
		market                          		VARCHAR(20)		 NOT NULL COMMENT '코인명',
		rate_week                     		DOUBLE(10)		 NULL  COMMENT '1주일상승률',
		rate_1month                   		DOUBLE(10)		 NULL  COMMENT '1개월상승률',
		rate_3month                   		DOUBLE(10)		 NULL  COMMENT '3개월상승률',
		rate_6month                   		DOUBLE(10)		 NULL  COMMENT '6개월상승률',
		rate_year                     		DOUBLE(10)		 NULL  COMMENT '1년상승률'
) COMMENT='Table1';

