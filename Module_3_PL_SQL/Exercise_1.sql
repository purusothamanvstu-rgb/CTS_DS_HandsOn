DECLARE
    CURSOR c_customers IS
        SELECT Customer_ID, Age 
        FROM Customers;
BEGIN
    FOR cust_rec IN c_customers LOOP
        IF cust_rec.Age > 60 THEN
            UPDATE Loans
            SET Interest_Rate = Interest_Rate - 1
            WHERE Customer_ID = cust_rec.Customer_ID;
        END IF;
    END LOOP;
    
    COMMIT;
END;
/



DECLARE
    CURSOR c_balances IS
        SELECT Customer_ID, Balance 
        FROM Customers;
BEGIN
    FOR bal_rec IN c_balances LOOP
        IF bal_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE Customer_ID = bal_rec.Customer_ID;
        END IF;
    END LOOP;
    
    COMMIT;
END;
/




DECLARE
    CURSOR c_due_loans IS
        SELECT c.Customer_Name, l.Loan_ID, l.Due_Date
        FROM Loans l
        JOIN Customers c ON l.Customer_ID = c.Customer_ID
        WHERE l.Due_Date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan_rec IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan_rec.Customer_Name || 
                             ', your loan (ID: ' || loan_rec.Loan_ID || 
                             ') is due on ' || TO_CHAR(loan_rec.Due_Date, 'YYYY-MM-DD'));
    END LOOP;
END;
/