package com.occamasrazor.web.admin;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Admin {
	private String employNumber,password,name,position,profile,phoneNumber,email,registerDate;
	@Override
	public String toString() {
		return String.format("%s,%s,%s,%s,%s,%s,%s,%s",
				employNumber,password,name,position,profile,phoneNumber,email,registerDate);
	}
}

	
	