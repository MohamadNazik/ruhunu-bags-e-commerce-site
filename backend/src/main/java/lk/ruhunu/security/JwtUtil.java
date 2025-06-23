package lk.ruhunu.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${app.jwt.secret}")
    private String secret;

    private Key getSigningKey() {
        // Convert your secret string to bytes and create a Key object
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(String userId) {
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .signWith(getSigningKey(), SignatureAlgorithm.HS256) // updated
                .compact();
    }

    public String validateToken(String token) throws JwtException {
        return Jwts.parserBuilder()               // updated parserBuilder()
                .setSigningKey(getSigningKey())   // pass Key, not String
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
