package com.encore.coinflow;

import java.net.URL;
import java.util.Date;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CoinflowRESTController {
	
	@Autowired
	@Qualifier("com.encore.coinflow.CoinflowServiceImpl")
	private CoinflowService service;
	
	public CoinflowRESTController() {
		System.out.println("CoinflowRESTController 호출");
	}

	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = {"/coinflow/json"}, method = RequestMethod.GET)
	public ResponseEntity<?> getIncreaseRate() {
		Date now = new Date();
		URL url = null;
		JSONArray resultJson = null; //모든결과를 출력할 JSONArray
		JSONObject json = null;
		CoinflowVO vo = new CoinflowVO();
		
		for(String market : service.coinMarketList()) {
			try {
				url = service.getAPIURL(market,"now", 1, now);
				if(resultJson ==null) {
					resultJson = service.callAPI(url);
					json = resultJson.getJSONObject(0);
					System.out.println(json.get("market")+":"+ json.get("trade_price"));
					vo.setMarket(json.get("market").toString());
					vo.setToday((int)Double.parseDouble(json.get("trade_price").toString()));
				}
				else {
					json = (JSONObject) service.callAPI(url).get(0); //현재기준 api는 미리 호출해놓고 test용 출력
					resultJson.put(json);
					System.out.println("길이" + resultJson.length());
					System.out.println(json.get("market")+":"+json.get("trade_price"));
					vo.setMarket(json.get("market").toString());
					vo.setToday((int)Double.parseDouble(json.get("trade_price").toString()));
				}
				 
                //System.out.println(nowJson);
                //System.out.println(service.callAPI(service.getAPIURL(market, "week", 1, now)));
                //System.out.println(service.callAPI(service.getAPIURL(market, "month", 1, now)));
                //System.out.println(service.callAPI(service.getAPIURL(market, "month", 3, now)));
                //System.out.println(service.callAPI(service.getAPIURL(market, "month", 6, now)));
                //System.out.println(service.callAPI(service.getAPIURL(market, "year", 1, now)));
				vo.setWeek1((int)Double.parseDouble((service.callAPI(service.getAPIURL(market, "week", 1, now)).getJSONObject(0)).get("trade_price").toString()));
				vo.setMonth1((int)Double.parseDouble((service.callAPI(service.getAPIURL(market, "month", 1, now)).getJSONObject(0)).get("trade_price").toString()));
				Thread.sleep(1000);
				vo.setMonth3((int)Double.parseDouble((service.callAPI(service.getAPIURL(market, "month", 3, now)).getJSONObject(0)).get("trade_price").toString()));
				vo.setMonth6((int)Double.parseDouble((service.callAPI(service.getAPIURL(market, "month", 6, now)).getJSONObject(0)).get("trade_price").toString()));
				vo.setYear1((int)Double.parseDouble((service.callAPI(service.getAPIURL(market, "year", 1, now)).getJSONObject(0)).get("trade_price").toString()));
				service.create(vo);
				vo = new CoinflowVO();
				
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
				System.out.print("CoinflowRESTController 코인API 호출 error : "+ e);
			} catch (JSONException e) {
				service.create(vo);
				System.out.println("null값이 들어갑니다");
			} 
			
		}	
		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}
	
}
