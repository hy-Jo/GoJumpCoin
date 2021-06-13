package com.encore.coinmap;

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


@RestController
public class CoinmapRESTController {
	
	@Autowired 
	@Qualifier("com.encore.coinmap.CoinmapServiceImpl")
	private CoinmapService service;
	
	public CoinmapRESTController() {
		System.out.println("CoinmapRESTController 호출");
	}

	// [스케쥴러로 매일 한번씩 DB초기화 할 컨트롤러]
	//@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = {"/coinmap/update"}, method = RequestMethod.GET)
	public ResponseEntity<?> updateCoinmap() { 
//		Date now = new Date();
//		URL url = null;
		JSONArray resultJson = null; //모든결과를 출력할 JSONArray
//		JSONObject json = null;
//		CoinmapVO vo = new CoinmapVO();
		String currency = "KRW";
		
		//String urlstr = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert="
		String urlstr = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c&convert="
						+currency;
		
		service.jsonCoinmap(urlstr, currency);

		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}
	
	// [DB에서 정보를 요청하는 컨트롤러]
//	@CrossOrigin(origins = "*", allowedHeaders = "*")
//	@RequestMapping(value = {"/coinmap/get"}, method = RequestMethod.GET)
//	public List<CoinflowVO> getAllCoinData() {
//		JSONArray resultJson = null;
//		List<CoinflowVO> list = new ArrayList<CoinflowVO>();
//		//받아온 가격 데이터로 이름 한글로 바꾸고 상승률 계산해서 return
//		for(CoinflowVO pvo : service.getCoinflowList()) {
//			CoinflowVO vo = new CoinflowVO();
//			vo.setMarket(service.getKorName(pvo)); 
//			vo.setIdx(pvo.getIdx());
//			double today = pvo.getToday();
//			double week1 = pvo.getWeek1();
//			double month1 = pvo.getMonth1();
//			double month3 = pvo.getMonth3();
//			double month6 = pvo.getMonth6();
//			double year1 = pvo.getYear1();			
//			
//			vo.setToday(today);
//			if(week1 != 0) {
//				vo.setWeek1(Math.round((today - week1) / week1* 100 *10)/10.0);
//			}else {
//				vo.setWeek1(0);
//			}
//			if(month1 != 0) {
//				vo.setMonth1(Math.round((today - month1) / month1 * 100 *10)/10.0);
//			}else {
//				vo.setMonth1(0);
//			}
//			if(month3 != 0) {
//				vo.setMonth3(Math.round((today - month3) / month3 * 100 *10)/10.0);
//			}else {
//				vo.setMonth3(0);
//			}
//			if(month6 != 0) {
//				vo.setMonth6(Math.round((today - month6) / month6 * 100 *10)/10.0);
//			}else {
//				vo.setMonth6(0);
//			}
//			if(year1 != 0) {
//				vo.setYear1(Math.round((today - year1) / year1 * 100*10)/10.0);
//			}else {
//				vo.setYear1(0);
//			}
//			
//			
//			 
//			list.add(vo);
//		}
//	
//		return list;
//	}
//	
//	// [스케쥴러로 매일 한번씩 DB초기화 할 컨트롤러2]
//	// [지금 초기화할 데이터들 - amount 일 수로 가져옴]
//		@CrossOrigin(origins = "*", allowedHeaders = "*")
//		@RequestMapping(value = {"/coinflow/get_all_daily/{amount}"}, method = RequestMethod.GET)
//		public ResponseEntity<?> updateCoinDailyData(
//				@PathVariable("amount") int amount
//				) throws InterruptedException { 
//			Date now = new Date();
//			URL url = null;
//			JSONArray resultJson = null; //모든결과를 출력할 JSONArray
//			JSONObject json = null;
//			CoinDailyVO vo = new CoinDailyVO();
//			
//			
//			for(String market : service.coinMarketList()) {
//				for (int i =1 ; i<= amount; i++) { //6개월 = 180일
//					url = service.getAPIURL(market,"day", i, now);
//					
//					json = (JSONObject) service.callAPI(url).get(0); //현재기준 api는 미리 호출해놓고 test용 출력
//					System.out.println(json);
//					if( i%5 == 0) {
//						Thread.sleep(1000);
//					}
//				}
//				Thread.sleep(1000);
//			}	
//			return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
//		}
	
}
