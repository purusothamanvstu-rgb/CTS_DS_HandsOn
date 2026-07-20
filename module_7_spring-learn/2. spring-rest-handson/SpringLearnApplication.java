package com.cognizant.springlearn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        
        // Invoke previous hands-on
        displayDate();
        
        // Invoke new hands-on
        displayCountry();
    }

    public static void displayCountry() {
        LOGGER.info("START: displayCountry()");
        
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        
        LOGGER.debug("Country : {}", country.toString());
        
        LOGGER.info("END: displayCountry()");
    }

    public static void displayDate() {
        LOGGER.info("START: displayDate()");
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
        try {
            Date date = format.parse("31/12/2018");
            LOGGER.debug("Parsed Date is: " + date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        LOGGER.info("END: displayDate()");
    }
}