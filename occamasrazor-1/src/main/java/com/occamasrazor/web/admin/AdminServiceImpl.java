package com.occamasrazor.web.admin;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.occamasrazor.web.util.Messenger;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired AdminDao adminDao;
	
	@Override
	public void register(Admin admin) {
		/*
		 * employNumber,password,name,position,profile,phoneNumber,email,registerDate
		 * */
		admin.setEmployNumber(createEmployNumber());
		admin.setPassword("1");
		admin.setRegisterDate(createCurrentDate());
		adminDao.insert(admin);
	}

	private String createCurrentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}

	private String createEmployNumber() {
//		System.out.println("사번 :"+String.format("%04d",Math.random()*10000+1000));
		String startNum="";
		for(int i=0;i<4;i++) {
			startNum += String.valueOf((int)(Math.random()*10));
		}
//		String.format("%04d",Math.random()*10000+1000)
		return startNum;
	}

	@Override
	public List<Admin> findAll() {
		return adminDao.selectAll();
	}

	@Override
	public Admin findOne(String employNumber) {
		return adminDao.selectOne(employNumber);
	}

	@Override
	public void modify(Admin admin) {
		adminDao.update(admin);
	}

	@Override
	public void remove(Admin admin) {
		adminDao.delete(admin);
	}

	@Override
	public Messenger login(Admin admin) {
		return adminDao.signIn(admin);
	}

}
