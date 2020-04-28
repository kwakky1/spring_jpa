package com.occamasrazor.web.user;

import java.util.List;

import com.occamasrazor.web.util.Messenger;

public interface UserService {
	public void add(User user);
	public int count();
	public User detail(String userid);
	public User login(User user);
	public boolean update(User user);
	public boolean remove(String userid);
	public List<User> list();
	
}
