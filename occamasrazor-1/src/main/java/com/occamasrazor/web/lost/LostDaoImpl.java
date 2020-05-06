package com.occamasrazor.web.lost;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public class LostDaoImpl implements LostDao {

	@Override
	public List<Lost> selectAll() {
		List<Lost> lostList = new ArrayList<Lost>();
		List<String> list = new ArrayList<String>();
		try{
			File file = new File("C:\\Users\\bit2\\git\\spring_jpa1\\occamasrazor-1\\src\\main\\resources\\static\\resources\\file\\lost.csv");
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String lostOne = "";
			while((lostOne=reader.readLine())!=null) {
				list.add(lostOne);
			}
			reader.close();
		} catch(Exception e) {
			System.out.println("에러");
		}
		Lost lostAll = null;
		for(int i=0;i<list.size();i++) {
			lostAll = new Lost();
			String[] arry = list.get(i).split(",");
			lostAll.setLostid(arry[0]);
			lostAll.setLostname(arry[1]);
			lostAll.setLostdate(arry[2]);
			lostAll.setLostdivision(arry[3]);
			lostAll.setLostlocation(arry[4]);
			lostList.add(lostAll);
		}
		return lostList;
	}

	@Override
	public Lost selectOne(String lostname) {
		List<Lost> list = selectAll();
		Lost selectLost = null;
		for(Lost l:list) {
			if(lostname.equals(l.getLostname())) {
				selectLost = l;
				break;
			}
		}
		return selectLost;
	}

}
