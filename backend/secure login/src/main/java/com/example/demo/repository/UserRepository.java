package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.auth.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}