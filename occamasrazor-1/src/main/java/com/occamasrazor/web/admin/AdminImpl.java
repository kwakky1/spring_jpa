package com.occamasrazor.web.admin;

import org.springframework.stereotype.Service;

@Service
public class AdminImpl implements AdminService {
	private Admin[] members;
	private int count;
	public AdminImpl() {
		members = new Admin[5];
		count = 0;
	}
	@Override
	public void add(Admin member) {
		members[count]=member;
		count++;
	}

	@Override
	public Admin[] list() {
		return members;
	}

	@Override
	public Admin[] searchName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Admin detail(Admin member) {
		Admin detail = null;
		detail = new Admin();
		for(int i=0;i<count;i++) {
			if(member.getUserid().equals(members[i].getUserid())) {
				detail = members[i];
			}
		}
		return detail;
	}

	@Override
	public int count() {
		return count;
	}

	@Override
	public int count(String name) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void update(Admin member) {
		for(int i=0;i<count;i++) {
			if(member.getUserid().equals(members[i].getUserid())) {
				members[i].setPassword(member.getPassword());
			}
		}
	}

	@Override
	public void delete(Admin member) {
		for(int i=0;i<count;i++) {
			if(member.getUserid().equals(members[i].getUserid())
			&& member.getPassword().equals(members[i].getPassword())){
				members[i] = members[count-1];
				members[count-1] = null;
				count--;
			}
		}
	}
	@Override
	public boolean login(Admin member) {
		boolean ok = false;
		for(int i=0;i<count;i++) {
			if(member.getUserid().equals(members[i].getUserid())
			&& member.getPassword().equals(members[i].getPassword())){
				ok = true;
				break;
		}
	}
		return ok;
	}
}
