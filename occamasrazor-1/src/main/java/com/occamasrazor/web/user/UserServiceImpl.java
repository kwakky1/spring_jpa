package com.occamasrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.swing.JOptionPane;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.occamasrazor.web.util.Messenger;

@Service
public class UserServiceImpl implements UserService{
	public final static String FILE_PATH = "C:\\Users\\bit2\\spring-workspace\\occamasrazor\\src\\main\\resources\\static\\user\\";
	private Map<String, Object> map;
	public UserServiceImpl() {
		map = new HashMap<>();
		
	}
	@Override
	public void add(User user) {
		System.out.println("회원가입 확인  :"+ user);
		map.put(user.getUserid(), user);
	}
	@Override
	public int count() {
		return map.size();
	}
	@Override
	public User login(User user) {
		User returnUser = null;
		if(map.containsKey(user.getUserid())) {
			User u =detail(user.getUserid());
			if(user.getPassword().equals(u.getPassword())) {
				returnUser =u;
				System.out.println("로그인 :" + returnUser);
			}
		}
		return returnUser;
	}
	@Override
	public User detail(String userid) {
		System.out.println("디테일: "+ userid);
		User t = (User) map.get(userid);
		System.out.println("map이후 " + t);
		return t;
	}
	@Override
	public boolean update(User user) {
		map.replace(user.getUserid(), user);
		return true;
	}
	@Override
	public boolean remove(String userid) {
		map.remove(userid);
		return true;
	}
	@Override
	public List<User> list() {
		List<User> list = new ArrayList<>();
		@SuppressWarnings("rawtypes")
		Set set = map.entrySet();
		@SuppressWarnings("rawtypes")
		Iterator it = set.iterator();
		while(it.hasNext()) {
			@SuppressWarnings("unchecked")
			Map.Entry<String , User> e = (Entry<String, User>) it.next();
			list.add(e.getValue());
		}
		for(int i=0;i<list.size();i++) {
			System.out.println(list.get(i));
		}
		return list;
	}
	
	

}
