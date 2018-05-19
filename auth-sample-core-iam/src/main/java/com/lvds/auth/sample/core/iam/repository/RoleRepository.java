package com.lvds.auth.sample.core.iam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lvds.auth.sample.core.iam.entity.Role;

public interface RoleRepository extends JpaRepository<Role, String> {

}
