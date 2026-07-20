package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Spring Data JPA derived query method:
    // generates a WHERE co_name LIKE %partialName% (case-insensitive) query
    List<Country> findByNameContainingIgnoreCase(String partialName);
}
