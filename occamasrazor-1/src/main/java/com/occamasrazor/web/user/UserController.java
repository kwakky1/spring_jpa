package com.occamasrazor.web.user;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamasrazor.web.admin.AdminService;
import com.occamasrazor.web.util.Messenger;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired UserService userService;
	@PostMapping("")
	public Messenger post(@RequestBody User user) {
		userService.join(user);
		return Messenger.SUCCESS;
	}
	@GetMapping("")
	public List<User> list(){
		return userService.list();
	}
	@GetMapping("/{userid}")
	public User detail(@PathVariable String userid) {
		return userService.detail(userid);
	}
	@PutMapping("/{userid}")
	public Messenger put(@RequestBody User user) {
		userService.update(user);
		return Messenger.SUCCESS;
	}
	@DeleteMapping("/{userid}")
	public Messenger delete(@RequestBody User user) {
		userService.delete(user);
		return Messenger.SUCCESS;
	}
}
