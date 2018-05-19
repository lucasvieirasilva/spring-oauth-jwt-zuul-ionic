package com.lvds.auth.sample.core.iam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lvds.auth.sample.core.iam.entity.AuthorizationCode;

public interface AuthorizationCodeRepository extends JpaRepository<AuthorizationCode, String>{

}
