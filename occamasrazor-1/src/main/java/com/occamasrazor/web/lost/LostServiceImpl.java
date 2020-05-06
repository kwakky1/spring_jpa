package com.occamasrazor.web.lost;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LostServiceImpl implements LostService{
	@Autowired LostDao lostDao;
	@Override
	public List<Lost> list() {
		return lostDao.selectAll();
	}
	@Override
	public Lost detail(String lostname) {
		return lostDao.selectOne(lostname);
	}

}
