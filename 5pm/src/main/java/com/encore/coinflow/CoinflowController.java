package com.encore.coinflow;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CoinflowController {
	
	public CoinflowController() {
		System.out.println("CoinflowController 호출");
	}
	
	@RequestMapping(value = {"/coinflow"}, method = RequestMethod.GET)
	public String home() {
	    return "/coinflow";
	}
	
}
