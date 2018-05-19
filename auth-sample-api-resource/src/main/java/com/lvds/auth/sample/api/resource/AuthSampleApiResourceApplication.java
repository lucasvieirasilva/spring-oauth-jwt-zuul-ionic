package com.lvds.auth.sample.api.resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.lvds.auth.sample" })
public class AuthSampleApiResourceApplication {

	public static void main(final String[] args) {
		SpringApplication.run(AuthSampleApiResourceApplication.class, args);
	}
}
