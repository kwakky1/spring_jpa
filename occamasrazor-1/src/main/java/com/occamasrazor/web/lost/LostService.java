package com.occamasrazor.web.lost;

import java.util.List;

import org.springframework.stereotype.Component;
@Component
public interface LostService {

	public List<Lost> list();

	public Lost detail(String lostname);

}
