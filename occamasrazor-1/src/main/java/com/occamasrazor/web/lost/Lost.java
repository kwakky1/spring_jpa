package com.occamasrazor.web.lost;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Component
public class Lost {
	private String lostid, lostname, lostdate, lostdivision, lostlocation ;
	@Override
	public String toString() {
		return String.format("%s,%s,%s,%s,%s", 
				lostid, lostname, lostdate, lostdivision, lostlocation);
	}
}
