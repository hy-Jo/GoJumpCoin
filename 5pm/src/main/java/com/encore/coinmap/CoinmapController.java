package com.encore.coinmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//@RestController
@CrossOrigin("*")
@Controller
public class CoinmapController {
	//private CoinMapService coinmapService;

	@Autowired
	@Qualifier("com.encore.coinmap.CoinmapServiceImpl")
	private CoinmapService service;
	
	public CoinmapController() {
		System.out.println("CoinMapController 호출");
	}
	
	@RequestMapping(value = {"/coinmap"}, method = RequestMethod.GET)
	public String home() {
		String currency = "KRW";
		
		String urlstr = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert="
		//String urlstr = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c&convert="
						+currency;
		
		service.jsonCoinmap(urlstr, currency);
		return "/coinmap";
	}

}

