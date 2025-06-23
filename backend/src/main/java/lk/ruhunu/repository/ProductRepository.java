package lk.ruhunu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ruhunu.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {}
