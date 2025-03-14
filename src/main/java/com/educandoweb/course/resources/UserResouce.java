package com.educandoweb.course.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educandoweb.course.entities.User;

/*
 * add annotation @RestController
 * add annotation @RequestMapping with value (ex: class name = User, value = /users)
 * 
 * add annotation @GetMapping to get resources
 * 
 * create public ResponseEntity functions to User class
 * 
 * */

@RestController
@RequestMapping(value = "/users")
public class UserResouce {

	@GetMapping
	public ResponseEntity<User> findAll() {
		User u = new User(1L, "Maria", "maria@gmail.com", "99 9999-9999", "passsecret");
		return ResponseEntity.ok().body(u);
	}
	
}
