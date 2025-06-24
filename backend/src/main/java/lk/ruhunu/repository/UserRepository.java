package lk.ruhunu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ruhunu.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
