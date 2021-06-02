package com.encore.coinchart;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CoinController {
	  public CoinController() {
	        System.out.println("CoinController 호출");
	    }

	    @RequestMapping(value = {"/coinchart"}, method = RequestMethod.GET)
	    public String home() {
	        return "/coinchart";
	    }
	    
	    @RequestMapping(value = {"/coinmap"}, method = RequestMethod.GET)
	    public String home() {
	        return "/coinmap";
	    }
	
}

