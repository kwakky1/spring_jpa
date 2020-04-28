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
	
	@Override
	public User detail(String userid) {
		return null;
	}
	@Override
	public boolean update(User user) {
		return false;
	}
	@Override
	public boolean remove(String userid) {
		return true;
	}

@Override
public void saveFile(User user) {
	try {
		File file = new File(FILE_PATH+"list.txt");
		@SuppressWarnings("resource")
		BufferedWriter writer = new BufferedWriter(new FileWriter(file, true));
				String message = user.toString();
				System.out.println(message);
				writer.write(message);
				writer.newLine();
				writer.flush();
	}catch(Exception e) {
		
	}
}
	@Override
	public List<User> readFile() {
	List<User> userlist = new ArrayList<>();
	List<String> list = new ArrayList<>();
		try {
		File file = new File(FILE_PATH+"list.txt");
		BufferedReader reader = new BufferedReader(new FileReader(file));
		String message = "";
		while((message = reader.readLine())!= null) {
			list.add(message);
		}
		JOptionPane.showMessageDialog(null, list);
		reader.close();
		} catch(Exception e) {
		
		}
		User u =null;
	for(int i =0;i<list.size();i++) {
		u = new User();
		String[] arr = list.get(i).split(",");
		u.setUserid(arr[0]);
		u.setPassword(arr[1]);
		u.setName(arr[2]);
		u.setSsn(arr[3]);
		u.setAddr(arr[4]);
		userlist.add(u);
		
	}
	return userlist;
	}
	@Override
	public Messenger confirm(String userid) {
	Messenger confirm = null;
	for(int i=0;i<readFile().size();i++) {
		if(readFile().get(i).getUserid().equals(userid)) {
			confirm = Messenger.FAIL;
			break;
		}else {
			confirm = Messenger.SUCCESS;
		}	
	}
	return confirm;
}
	@Override
	public int count() {
		return 0;
	}
	@Override
	public User login(User user) {
		return null;
	}

}
