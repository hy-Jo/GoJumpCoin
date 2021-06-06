package com.encore.coinflow;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
		System.out.println(service.coinMarketList());
	    return "/coinflow";
	}
	
}
