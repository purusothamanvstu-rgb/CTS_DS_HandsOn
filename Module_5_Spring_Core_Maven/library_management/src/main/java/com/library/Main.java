package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class Main {
    public static void main(String[] args) {
        // 1. Load the Spring Application Context from your XML file
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // 2. Ask Spring for the BookService bean you defined
        BookService service = (BookService) context.getBean("bookService");

       
        service.manageBooks();
    }
}