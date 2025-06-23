package lk.ruhunu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ruhunu.model.CartItem;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    Optional<CartItem> findByUserIdAndProductId(Long userId, Long productId);
    List<CartItem> findAllByUserId(Long userId);
}