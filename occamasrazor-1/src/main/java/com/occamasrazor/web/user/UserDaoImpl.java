package com.occamasrazor.web.user;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {
	@Autowired UserDao userDao;

	@Override
	public void insert(User user) {
		
	}

	@Override
	public List<User> selectAll() {
		List<User> userlist = new ArrayList<>();
		List<String> list = new ArrayList<>();
		try {
			File file = new File("C:\\Users\\bit2\\git\\spring_jpa1\\occamasrazor-1\\src\\main\\resources\\static\\resources\\file\\userlist.csv");
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close();
			
		} catch (Exception e) {
			System.out.println("에러");
		}
		User u = null;
		for(int i=0;i<list.size();i++) {
			u = new User();
			String[] arr = list.get(i).split(",");
			u.setUserid(arr[0]);
			u.setPassword(arr[1]);
			u.setName(arr[2]);
			u.setSsn(arr[3]);
			u.setAddr(arr[4]);
			u.setProfile(arr[5]);
			u.setEmail(arr[6]);
			u.setPhoneNumber(arr[7]);
			u.setRegisterDate(arr[8]);
			userlist.add(u);
		}
		return userlist;
	}

	@Override
	public User selectOne(String userid) {
		List<User> list = selectAll();
		User selectUser =null;
		for(User u : list) {
			if(userid.equals(u.getUserid())) {
				selectUser = u;
				break;
			}
		}
		return selectUser;
	}

	@Override
	public void update(User user) {
		
	}

	@Override
	public void delete(User user) {
		
	}
}
