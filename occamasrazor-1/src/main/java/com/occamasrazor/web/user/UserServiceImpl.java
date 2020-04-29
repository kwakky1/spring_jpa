package com.occamasrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import com.occamasrazor.web.util.Data;
import javax.swing.JOptionPane;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.occamasrazor.web.util.Messenger;

@Service
public class UserServiceImpl implements UserService{
	@Autowired UserDao userDao;
	@Override
	public void join(User user) {
		userDao.insert(user);
	}

	@Override
	public List<User> list() {
		return userDao.selectAll();
	}

	@Override
	public User detail(String userid) {
		return userDao.selectOne(userid);
	}

	@Override
	public void update(User user) {
		userDao.update(user);
	}

	@Override
	public void delete(User user) {
		userDao.delete(user);
	}

}
