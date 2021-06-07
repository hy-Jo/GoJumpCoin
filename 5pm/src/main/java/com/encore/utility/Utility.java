package com.encore.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Utility {
	
	/**매개변수로 기간을 정하면 그 이전의 날짜를 계산해 돌려주는 method
	 * 
	 * @param now 현재날짜 전달
	 * @param count 적용할 interval 수 ex. 1주일, 1개월, 3개월, 6개월, 1년
	 * @param interval week, month, year
	 * @return
	 * @throws ParseException 
	 */
	public static String pastDate(String now,int amount, String interval) throws ParseException { 
		String date ="";
		SimpleDateFormat dtFormat = new SimpleDateFormat("yyyy-MM-dd");
		Calendar cal = Calendar.getInstance();
		Date dt = dtFormat.parse(now);
		cal.setTime(dt);
		
		switch(interval) {
			case "week":
				cal.add(Calendar.DATE,-7*amount);
				break;
			case "month":
				cal.add(Calendar.MONTH,-1*amount);
				break;
			case "year":
				cal.add(Calendar.YEAR,-1*amount);
				break;
		}
		
		date = dtFormat.format(cal.getTime()).toString();
		//2021-05-31
		return date;
	}
}
