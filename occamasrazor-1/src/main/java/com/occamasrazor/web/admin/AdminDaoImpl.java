package com.occamasrazor.web.admin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.occamasrazor.web.util.Messenger;

@Repository
public class AdminDaoImpl implements AdminDao {

	@Override
	public void insert(Admin admin) {
		admin.setEmployNumber(createEmployNumber());
		admin.setPassword("1");
		admin.setRegisterDate(createCurrentDate());
		try {
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(
									new FileWriter(
									new File("C:\\Users\\Administrator\\git\\spring_jpa\\occamasrazor-1\\src\\main\\resources\\static\\resources\\file\\adminlist.csv"),true));
			writer.write(admin.toString());
			writer.newLine();
			writer.flush();
		}catch(Exception e) {
			System.out.println(Messenger.FILE_INSERT_ERROR);
		}
	}

	private String createCurrentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}

	private String createEmployNumber() {
		String a = createCurrentDate().substring(2, 3);
		int b = 1;
		String plusNumber="";
		String backNumber =Integer.toString(b);
			for(int i=0;i<4-backNumber.length();i++) {
				plusNumber += String.valueOf(0); 
			}
			b++;
		return a+"-"+plusNumber+backNumber;
	}

	@Override
	public List<Admin> selectAll() {
		List<Admin> adminList = new ArrayList<Admin>();
		List<String> list = new ArrayList<String>();
		try {
			File file = new File("C:\\Users\\Administrator\\git\\spring_jpa\\occamasrazor-1\\src\\main\\resources\\static\\resources\\file\\adminlist.csv");
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String adminOne = "";
			while((adminOne = reader.readLine())!=null) {
				list.add(adminOne);
			}
			reader.close();
			
		}catch(Exception e) {
			System.out.println("에러");
		}
		Admin adminAll =null;
		for(int i=0;i<list.size();i++) {
			adminAll= new Admin();
			String[] arry = list.get(i).split(",");
			adminAll.setEmployNumber(arry[0]);
			adminAll.setPassword(arry[1]);
			adminAll.setName(arry[2]);
			adminAll.setPosition(arry[3]);
			adminAll.setProfile(arry[4]);
			adminAll.setPhoneNumber(arry[5]);
			adminAll.setEmail(arry[6]);
			adminAll.setRegisterDate(arry[7]);
			adminList.add(adminAll);
		}
		
		return adminList;
	}

	@Override
	public Admin selectOne(String employNumber) {
		
		return null;
	}

	@Override
	public void update(Admin admin) {
		
	}

	@Override
	public void delete(Admin admin) {
		
	}

	@Override
	public Messenger signIn(Admin admin) {
		Messenger signIn =null;
		for(int i=0;i<selectAll().size();i++) {
			if(admin.getEmployNumber().equals(selectAll().get(i).getEmployNumber())
					&& admin.getPassword().equals(selectAll().get(i).getPassword())) {
				signIn = Messenger.SUCCESS;
				break;
			} else {
				signIn = Messenger.FAIL;
			}
		}
		return signIn;
	}

}
