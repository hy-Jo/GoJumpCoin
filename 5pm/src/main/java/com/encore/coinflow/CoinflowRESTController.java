package com.encore.coinflow;

import java.net.URL;
import java.util.Date;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	
	//우선 rest 테스트용으로  json을 보낼거임
	@RequestMapping(value = {"/coinflow/json"}, method = RequestMethod.GET)
	public ResponseEntity<?> getIncreaseRate() {
		Date now = new Date();
		URL url = null;
		JSONArray nowJson = null;
		
		for(String market : service.coinMarketList()) {
			try {
				url = service.getAPIURL(market,"now", 1, now);
				if(nowJson ==null) {
					nowJson = service.callAPI(url);
				}
				else {
					JSONObject json1 = (JSONObject) service.callAPI(url).get(0); //현재기준 api는 미리 호출해놓고 test용 출력
					nowJson.put(json1);
					System.out.println("여기실행되나?");
					System.out.println("길이" + nowJson.length());
				}
				 
                System.out.println(nowJson);
                System.out.println(service.callAPI(service.getAPIURL(market, "week", 1, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "month", 1, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "month", 3, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "month", 6, now)));
                System.out.println(service.callAPI(service.getAPIURL(market, "year", 1, now)));
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
				System.out.print("CoinflowController 코인API 호출 error : "+ e);
			}
			
		}	
		return ResponseEntity.status(HttpStatus.OK).body(nowJson.toString());
	}
	
}
