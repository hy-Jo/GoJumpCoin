
package com.encore.coindata;

import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.encore.coinflow.CoinflowService;

@RestController
public class CoindataRESTController {

	@Autowired
	@Qualifier("com.encore.coinflow.CoinflowServiceImpl")
	private CoinflowService service;

	@Autowired
	@Qualifier("com.encore.coindata.CoinDailyServiceImpl")
	private CoinDailyService dservice;

	public CoindataRESTController() {
		System.out.println("CoindataRESTController 호출");
	}

	/**
	 * [전날종가 API - 오늘의코인]
	 * @return json market, trade_price
	 */
	@RequestMapping(value = { "/api/get-trade" }, method = RequestMethod.GET)
	public ResponseEntity<?> getTradePrice() {
		SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
		Date now = new Date();
		Calendar cal = Calendar.getInstance();
		cal.setTime(now);
		cal.add(Calendar.DATE,-1);
		String today = date.format(cal.getTime()) + "T09:00:00";
		
		JSONArray resultJson = new JSONArray(); // 모든결과를 출력할 JSONArray
		System.out.println(dservice.getTodayCoin(today));
		
		for (CoinDailyVO vo : dservice.getTodayCoin(today)) { 
			Map<Object, Object> map = new HashMap<Object,Object>();
			map.put("market", vo.getMarket());
			map.put("trade_price",vo.getTrade_price());
			
			resultJson.put(new JSONObject(map));	
		}
		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}
	
	/**
	 * [코인주기 API]
	 * @param amount
	 * @return
	 */
	@RequestMapping(value = { "/api/get-cycle/{amount}" }, method = RequestMethod.GET)
	public ResponseEntity<?> getCoinCycle(@PathVariable("amount") int amount) {
		JSONArray resultJson = new JSONArray(); // 모든결과를 출력할 JSONArray
		Map map = new HashMap();
		
		for (String market : service.coinMarketList()) { 
			map.put("market", market);
			map.put("amount", amount);
			Map resultMap = new HashMap();
			resultMap.put("market", market);
			double cyclecount = (double)dservice.getCoincycle(map);
			
			if(cyclecount!=0) {
				resultMap.put("inc_cycle", Math.round(amount/cyclecount*10)/10.0);				
			}else {
				resultMap.put("inc_cycle", "-");
			}
			
			resultJson.put(new JSONObject(resultMap));			
			
		}
		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}
	

	/**
	 * [DB업데이트] - 외부 api에서 db에 입력
	 * @param amount : 지금으로부터 업데이트 할 일 수 (ex. 1년 = 365)
	 * @return db업데이트 한 결과
	 * @throws InterruptedException
	 */
	@RequestMapping(value = { "/api/insert-daily/{amount}" }, method = RequestMethod.GET)
	public ResponseEntity<?> insertCoinDailyData(@PathVariable("amount") int amount) throws InterruptedException {
		Date now = new Date();
		URL url = null;
		JSONArray resultJson = null; // 모든결과를 출력할 JSONArray
		JSONObject json = null; // 현재 호출 결과
		CoinDailyVO vo = new CoinDailyVO();

		for (int i = amount; i >= 1; i--){ // amount 일 수 만큼, 과거데이터부터
			int j = 0;
			for (String market : service.coinMarketList()) { 
				url = service.getAPIURL(market, "day", i, now);
				j++;
				try {
					if (resultJson != null) {
						json = (JSONObject) service.callAPI(url).get(0);
						resultJson.put(json);
					} else {
						resultJson = service.callAPI(url);
						json = resultJson.getJSONObject(0);
					}

					System.out.println("길이" + resultJson.length());
					System.out.println(json.get("market") + ":" + json.get("candle_date_time_utc"));
					vo.setMarket(json.get("market").toString());
					vo.setCandle_acc_trade_price(Double.parseDouble(json.get("candle_acc_trade_price").toString()));
					vo.setCandle_acc_trade_volume(Double.parseDouble(json.get("candle_acc_trade_volume").toString()));
					vo.setCandle_date_time_kst(json.get("candle_date_time_kst").toString());
					vo.setCandle_date_time_utc(json.get("candle_date_time_utc").toString());
					vo.setHigh_price(Double.parseDouble(json.get("high_price").toString()));
					vo.setLow_price(Double.parseDouble(json.get("low_price").toString()));
					vo.setOpening_price(Double.parseDouble(json.get("opening_price").toString()));
					vo.setPrev_closing_price(Double.parseDouble(json.get("prev_closing_price").toString()));
					vo.setTimestamp_(Long.parseLong(json.get("timestamp").toString()));
					vo.setTrade_price(Double.parseDouble(json.get("trade_price").toString()));
					vo.setChange_rate(Double.parseDouble(json.get("change_rate").toString()));
					vo.setChange_price(Double.parseDouble(json.get("change_price").toString()));
					// vo.setConverted_trade_price(Double.parseDouble(json.get("converted_trade_price").toString()));

					dservice.insert(vo);
					vo = new CoinDailyVO();

					if (j % 9 == 0) {
						Thread.sleep(1100);
					}

				} catch (NumberFormatException e) {
					System.out.println("CoindataRESTController 에러발생" + e);
					dservice.insert(vo);
					vo = new CoinDailyVO();
					if (j % 9 == 0) {
						Thread.sleep(1100);
					}
				} catch(JSONException e) {
					System.out.println("null값이 들어갑니다");
					if (j % 9 == 0) {
						Thread.sleep(1100);
					}
				}
			}
			Thread.sleep(1100);
		}
		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}
	

	@RequestMapping(value = { "/api/insert-daily-db" }, method = RequestMethod.GET)
	@Scheduled(cron = "0 0 9 * * * ") // 초 분 시간 일 월 요일
	public void insertCoinDaily() throws InterruptedException {
		System.out.println("정각실행테스트");
		Date now = new Date();
		URL url = null;
		JSONArray resultJson = null; // 모든결과를 출력할 JSONArray
		JSONObject json = null; 
		CoinDailyVO vo = new CoinDailyVO();

		int j = 0;
		for (String market : service.coinMarketList()) {
			url = service.getAPIURL(market, "day", 1, now); //하루치 코인 업데이트
			j++;
			try {
				if (resultJson != null) {
					json = (JSONObject) service.callAPI(url).get(0);
					resultJson.put(json);
				} else {
					resultJson = service.callAPI(url);
					json = resultJson.getJSONObject(0);
				}

				System.out.println("길이" + resultJson.length());
				System.out.println(json.get("market") + ":" + json.get("candle_date_time_utc"));
				vo.setMarket(json.get("market").toString());
				vo.setCandle_acc_trade_price(Double.parseDouble(json.get("candle_acc_trade_price").toString()));
				vo.setCandle_acc_trade_volume(Double.parseDouble(json.get("candle_acc_trade_volume").toString()));
				vo.setCandle_date_time_kst(json.get("candle_date_time_kst").toString());
				vo.setCandle_date_time_utc(json.get("candle_date_time_utc").toString());
				vo.setHigh_price(Double.parseDouble(json.get("high_price").toString()));
				vo.setLow_price(Double.parseDouble(json.get("low_price").toString()));
				vo.setOpening_price(Double.parseDouble(json.get("opening_price").toString()));
				vo.setPrev_closing_price(Double.parseDouble(json.get("prev_closing_price").toString()));
				vo.setTimestamp_(Long.parseLong(json.get("timestamp").toString()));
				vo.setTrade_price(Double.parseDouble(json.get("trade_price").toString()));
				vo.setChange_rate(Double.parseDouble(json.get("change_rate").toString()));
				vo.setChange_price(Double.parseDouble(json.get("change_price").toString()));
				// vo.setConverted_trade_price(Double.parseDouble(json.get("converted_trade_price").toString()));

				dservice.insert(vo);
				vo = new CoinDailyVO();

				if (j % 9 == 0) {
					Thread.sleep(1100);
				}

			} catch (NumberFormatException e) {
				System.out.println("CoindataRESTController 에러발생" + e);
				dservice.insert(vo);
				vo = new CoinDailyVO();
				if (j % 9 == 0) {
					Thread.sleep(1100);
				}
			} catch (JSONException e) {
				System.out.println("null값이 들어갑니다");
				if (j % 9 == 0) {
					Thread.sleep(1100);
				}

			}
			Thread.sleep(1100);
		}
	}

}

