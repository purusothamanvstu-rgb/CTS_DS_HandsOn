package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository bookRepository;

    // The setter method that Spring's XML container will look for
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("BookService is executing management tasks...");
        // Calling a method on the injected dependency to prove it works
        bookRepository.saveBook(); 
    }
}