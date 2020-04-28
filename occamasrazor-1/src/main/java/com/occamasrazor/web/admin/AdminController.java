package com.occamasrazor.web.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamasrazor.web.util.Messenger;

@RestController
@RequestMapping("/member")
public class AdminController {
	@Autowired AdminService memberService;
	
	@PostMapping("/join")
	public Messenger add(@RequestBody Admin member) {
		int current = memberService.count();
		memberService.add(member);
		return (memberService.count()==(current+1))? Messenger.SUCCESS : Messenger.FAIL; 
	}
	@PostMapping("/login")
	public Messenger login(@RequestBody Admin member) {
		return (memberService.login(member))? Messenger.SUCCESS : Messenger.FAIL;
	}
	@GetMapping("/list")
	public Admin[] list() {
		Admin[] members = new Admin[5];
		return members;
	}
	@GetMapping("/detail")
	public Admin detail(@RequestBody Admin member) {
		Admin detailMember = new Admin();
		return detailMember;
	}
	@GetMapping("/count")
	public int count() {
		int countMember = 0;
		return countMember;
	}
	@PutMapping("/update")
	public Admin update(@RequestBody Admin member) {
		Admin update = new Admin();
		return update;
	}
	@DeleteMapping("/delete")
	public Admin delete(@RequestBody Admin member) {
		Admin delete = new Admin();
		return delete;
	}
}
