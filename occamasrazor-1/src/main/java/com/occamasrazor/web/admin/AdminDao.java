package com.occamasrazor.web.admin;

import java.util.List;

import com.occamasrazor.web.util.Messenger;

public interface AdminDao {

	public void insert(Admin admin);

	public List<Admin> selectAll();

	public Admin selectOne(String employNumber);

	public void update(Admin admin);

	public void delete(Admin admin);

	public Messenger signIn(Admin admin);

}
