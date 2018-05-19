package com.lvds.auth.sample.api.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class AuthSampleApiGatewayApplication {

	public static void main(final String[] args) {
		SpringApplication.run(AuthSampleApiGatewayApplication.class, args);
	}
}
