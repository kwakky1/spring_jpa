package com.occamasrazor.web.admin;

import java.util.List;

import com.occamasrazor.web.util.Messenger;

public interface AdminService  {
	public void register(Admin admin);
	public List<Admin> findAll();
	public Admin findOne(String employNumber);
	public void modify(Admin admin);
	public void remove(Admin admin);
	public Messenger login(Admin admin);
		
}
