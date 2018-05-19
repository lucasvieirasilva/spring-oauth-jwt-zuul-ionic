package com.lvds.auth.sample.api.resource.rest;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@GetMapping(value = "/user")
	public Principal getPrincipal(final Principal principal) {
		return principal;
	}
}
