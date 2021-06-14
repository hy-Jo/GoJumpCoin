package com.encore.coinflow;

import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.encore.coindata.CoinDailyVO;

@RestController
public class CoinflowRESTController {

	@Autowired
	@Qualifier("com.encore.coinflow.CoinflowServiceImpl")
	private CoinflowService service;

	public CoinflowRESTController() {
		System.out.println("CoinflowRESTController 호출");
	}

	// [스케쥴러로 매일 한번씩 DB초기화 할 컨트롤러]
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = { "/coinflow/update" }, method = RequestMethod.GET)
	public ResponseEntity<?> updateCoinData() {
		Date now = new Date();
		URL url = null;
		JSONArray resultJson = null; // 모든결과를 출력할 JSONArray
		JSONObject json = null;
		CoinflowVO vo = new CoinflowVO();

		for (String market : service.coinMarketList()) {
			try {
				url = service.getAPIURL(market, "now", 1, now);
				if (resultJson != null) {
					json = (JSONObject) service.callAPI(url).get(0); // 현재기준 api는 미리 호출해놓고 test용 출력
					resultJson.put(json);
				} else {
					resultJson = service.callAPI(url);
					json = resultJson.getJSONObject(0);
				}

				System.out.println("길이" + resultJson.length());
				System.out.println(market + ":" + json.get("trade_price"));
				vo.setMarket(market);
				vo.setToday(Double.parseDouble(json.get("trade_price").toString()));
				vo.setWeek1(
						Double.parseDouble((service.callAPI(service.getAPIURL(market, "week", 1, now)).getJSONObject(0))
								.get("trade_price").toString()));
				vo.setMonth1(Double
						.parseDouble((service.callAPI(service.getAPIURL(market, "month", 1, now)).getJSONObject(0))
								.get("trade_price").toString()));
				Thread.sleep(1200);
				vo.setMonth3(Double
						.parseDouble((service.callAPI(service.getAPIURL(market, "month", 3, now)).getJSONObject(0))
								.get("trade_price").toString()));
				vo.setMonth6(Double
						.parseDouble((service.callAPI(service.getAPIURL(market, "month", 6, now)).getJSONObject(0))
								.get("trade_price").toString()));
				vo.setYear1(
						Double.parseDouble((service.callAPI(service.getAPIURL(market, "year", 1, now)).getJSONObject(0))
								.get("trade_price").toString()));
				service.create(vo); // 아직 업데이트 부분 구현안함. 이미 있는 데이터일경우 업데이터 해주는 부분 필요
				vo = new CoinflowVO();

				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
				System.out.print("CoinflowRESTController 코인API 호출 error : " + e);
			} catch (JSONException e) {
				service.create(vo);
				System.out.println("null값이 들어갑니다");
			}

		}
		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}

	// [DB에서 정보를 요청하는 컨트롤러]
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = { "/coinflow/get" }, method = RequestMethod.GET)
	public List<CoinflowVO> getAllCoinData() {
		JSONArray resultJson = null;
		List<CoinflowVO> list = new ArrayList<CoinflowVO>();
		// 받아온 가격 데이터로 이름 한글로 바꾸고 상승률 계산해서 return
		for (CoinflowVO pvo : service.getCoinflowList()) {
			CoinflowVO vo = new CoinflowVO();
			vo.setMarket(service.getKorName(pvo));
			vo.setIdx(pvo.getIdx());
			double today = pvo.getToday();
			double week1 = pvo.getWeek1();
			double month1 = pvo.getMonth1();
			double month3 = pvo.getMonth3();
			double month6 = pvo.getMonth6();
			double year1 = pvo.getYear1();

			vo.setToday(today);
			if (week1 != 0) {
				vo.setWeek1(Math.round((today - week1) / week1 * 100 * 10) / 10.0);
			} else {
				vo.setWeek1(0);
			}
			if (month1 != 0) {
				vo.setMonth1(Math.round((today - month1) / month1 * 100 * 10) / 10.0);
			} else {
				vo.setMonth1(0);
			}
			if (month3 != 0) {
				vo.setMonth3(Math.round((today - month3) / month3 * 100 * 10) / 10.0);
			} else {
				vo.setMonth3(0);
			}
			if (month6 != 0) {
				vo.setMonth6(Math.round((today - month6) / month6 * 100 * 10) / 10.0);
			} else {
				vo.setMonth6(0);
			}
			if (year1 != 0) {
				vo.setYear1(Math.round((today - year1) / year1 * 100 * 10) / 10.0);
			} else {
				vo.setYear1(0);
			}

			list.add(vo);
		}

		return list;
	}

}
