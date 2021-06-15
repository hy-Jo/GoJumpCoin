package com.encore.coinmap;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
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
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = {"/coinmap/update"}, method = RequestMethod.GET)
	public ResponseEntity<?> updateCoinmap() { 
//		Date now = new Date();
//		URL url = null;
		JSONArray resultJson = null; //모든결과를 출력할 JSONArray
//		JSONObject json = null;
//		CoinmapVO vo = new CoinmapVO();
		String currency = "KRW";
		
		String urlstr = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4adf43b1-a8f9-4cf4-89a1-c161c38ec59b&convert="
		//String urlstr = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c&convert="
						+currency;
		
		resultJson = service.jsonCoinmap(urlstr, currency);

		return ResponseEntity.status(HttpStatus.OK).body(resultJson.toString());
	}
	
	// [DB에서 정보를 요청하는 컨트롤러]
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = {"/coinmap/get"}, method = RequestMethod.GET)
	public List<CoinmapVO> getCoinmapData() {
		
		
		List<CoinmapVO> list = service.getCoinmapList();
		
		
//////////////////////////////////////////////////////
		
		//if you doesn't need a json data file, please delete this code below
		
		JSONArray rdata = new JSONArray(); //new Empty JSON Array[]
		JSONObject obj = new JSONObject();//new json array including jsonobjects{}{}: in [{},{}.....] format 
		File file = new File("src/main/resources/static/assets/getCoinmap_data.json");
		try {
			FileWriter fw = new FileWriter(file);
			
			for (CoinmapVO vo : list) { //insert the data(a row) into JSON Array

				obj.put("currency", vo.getCurrency());
				obj.put("cmc_rank", vo.getCmc_rank());
				obj.put("name", vo.getName());
				obj.put("symbol", vo.getSymbol());
				obj.put("percent_change_24h", vo.getPercent_change_24h());
				obj.put("last_updated", vo.getLast_updated());
				obj.put("market_cap", vo.getMarket_cap());
				if (vo.getSector()!= null) {
					obj.put("sector", vo.getSector().replace("\r", ""));
				}
				//System.out.println(obj+"\n\n");
				rdata.put(obj);
				obj = new JSONObject();
				System.out.println(rdata+"\n\n");
			}
			fw.write(rdata.toString());
			//System.out.println(list);
			System.out.println(file.getAbsolutePath());
			System.out.println("file created");
			fw.flush();
            fw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//no json file, delete till here
		////////////////////////////////////////
		
		//System.out.println(service.getCoinmapList().get(1).getSector());
		return list;
	}
	

	
}
