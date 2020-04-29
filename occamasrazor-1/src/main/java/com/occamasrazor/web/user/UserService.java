package com.occamasrazor.web.user;

import java.util.List;

import com.occamasrazor.web.util.Messenger;

public interface UserService {

	public void join(User user);

	public List<User> list();

	public User detail(String userid);

	public void update(User user);

	public void delete(User user);
}
