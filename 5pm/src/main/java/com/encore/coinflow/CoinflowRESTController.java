package com.encore.coinflow;

import java.net.URL;
import java.util.Date;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CoinflowRESTController {
	
	@Autowired
	@Qualifier("com.encore.coinflow.CoinflowServiceImpl")
	private CoinflowService service;
	
	public CoinflowRESTController() {
		System.out.println("CoinflowController 호출");
	}

	
	//우선 rest 테스트용으로  json을 보낼거임
	@RequestMapping(value = {"/coinflow/json"}, method = RequestMethod.GET)
	public JSONArray getIncreaseRate() {
		Date now = new Date();
		URL url = null;
		JSONArray nowJson = null;
		
		for(String market : service.coinMarketList()) {
			try {
				url = service.getAPIURL(market,"now", 1, now);
				nowJson = service.callAPI(url); //현재기준 api는 미리 호출해놓고
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
		return nowJson;
	}
	
}
