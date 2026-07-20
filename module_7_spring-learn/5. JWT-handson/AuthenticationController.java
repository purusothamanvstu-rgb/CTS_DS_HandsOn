package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("Start");
        LOGGER.debug(authHeader);
        
        // 1. Get the username from the encoded header
        String user = getUser(authHeader);
        LOGGER.debug("User extracted: {}", user);
        
        // 2. Generate the JWT for that user
        String token = generateJwt(user);
        
        // 3. Return the token in a Map
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        
        LOGGER.info("End");
        return map;
    }

    private String getUser(String authHeader) {
        // Extract the Base64 text after "Basic " and decode it
        String encodedCredentials = authHeader.substring(6);
        byte[] decoded = Base64.getDecoder().decode(encodedCredentials);
        
        // Convert the decoded bytes to a String (looks like "user:pwd")
        String decodedString = new String(decoded);
        
        // Split the string at the colon and return just the username
        return decodedString.split(":")[0];
    }

    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        
        // Set the token issue time as current time
        builder.setIssuedAt(new Date());
        
        // Set the token expiry as 20 minutes from now (1,200,000 ms)
        builder.setExpiration(new Date((new Date()).getTime() + 1200000));
        
        // Sign the token with HS256 and our secret key
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");
        
        return builder.compact();
    }
}
