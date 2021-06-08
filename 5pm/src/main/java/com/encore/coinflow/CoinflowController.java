package com.encore.coinflow;

import java.net.URL;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.encore.utility.Utility;


@Controller
public class CoinflowController {
	
	@Autowired
	@Qualifier("com.encore.coinflow.CoinflowServiceImpl")
	private CoinflowService service;
	
	public CoinflowController() {
		System.out.println("CoinflowController 호출");
	}
	
	@RequestMapping(value = {"/coinflow"}, method = RequestMethod.GET)
	public String home() {
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
                //JSONObject json1 = (JSONObject) nowJson.get(0);
                
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
				System.out.print("CoinflowController 코인API 호출 error : "+ e);
			}
			
		}	
		return "/coinflow";
	}
	
	
	
}
