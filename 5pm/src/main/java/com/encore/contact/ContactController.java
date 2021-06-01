package com.encore.contact;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ContactController {
	public ContactController() {
		System.out.println("ContactController 호출");
	}
	
	@RequestMapping(value = {"/contact"}, method = RequestMethod.GET)
	public String home() {
	    return "/contact";
	}
	
}
