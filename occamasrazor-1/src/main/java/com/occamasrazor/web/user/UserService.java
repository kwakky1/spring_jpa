package com.occamasrazor.web.user;

import java.util.List;

import com.occamasrazor.web.util.Messenger;

public interface UserService {
	public int count();
	public User detail(String userid);
	public User login(User user);
	public boolean update(User user);
	public boolean remove(String userid);
	public void saveFile(User user);
	public List<User> readFile();
	public Messenger confirm(String userid);
}
