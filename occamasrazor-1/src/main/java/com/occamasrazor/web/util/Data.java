package com.occamasrazor.web.util;

public enum Data {
	USER_PATH, ADMIN_PATH, CSV, LIST;
	
	@Override
	public String toString() {
		String returnValue ="";
		switch(this) {
		case USER_PATH : returnValue ="C:\\Users\\bit2\\git\\repository2\\occamasrazor-1\\src\\main\\resources\\static\\user\\";break;
		case ADMIN_PATH : returnValue ="C:\\Users\\bit2\\git\\repository2\\occamasrazor-1\\src\\main\\resources\\static\\admin\\";break;
		case CSV : returnValue = ".csv";break;
		case LIST : returnValue ="list";break;
		default :
			break;
		}
		return returnValue;
	}
}
