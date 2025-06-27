package lk.ruhunu.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String image;

    @Column(name = "new_price", nullable = false)
    private Double newPrice;

    @Column(name = "old_price", nullable = false)
    private Double oldPrice;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date = new Date();

    private Boolean available = true;
}
