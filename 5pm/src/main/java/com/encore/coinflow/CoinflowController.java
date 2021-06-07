package com.encore.coinflow;

import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.encore.utility.Utility;


@Controller
public class CoinflowController {
	
	private final static Logger LOG = Logger.getGlobal();
	
	@Autowired
	@Qualifier("com.encore.coinflow.CoinflowServiceImpl")
	private CoinflowService service;
	
	public CoinflowController() {
		System.out.println("CoinflowController 호출");
		LOG.setLevel(Level.INFO);
		LOG.info("CoinflowController 호출");
	}
	
	@RequestMapping(value = {"/coinflow"}, method = RequestMethod.GET)
	public String home() {
		//System.out.println(service.coinMarketList());
		//System.out.println(service.increaseRate("KRW-BTC", "week", new Date()));
		String interval = "week";
		Date now = new Date();
		
		
		for(String market : service.coinMarketList()) {
			try {
				service.getAPIURL(market,"now", 1, now);
				service.callAPI(null);
				System.out.println(service.increaseRate(market, "week", 1, now));
				System.out.println(service.increaseRate(market, "month", 1, now));
				System.out.println(service.increaseRate(market, "month", 3, now));
				System.out.println(service.increaseRate(market, "month", 6, now));
				System.out.println(service.increaseRate(market, "year", 1, now));
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
				LOG.warning("CoinflowController : 코인 API 호출 error");
				System.out.print("CoinflowController 코인API 호출 error : "+ e);
			}
			
		}
		
		
		return "/coinflow";
	}
	
}
