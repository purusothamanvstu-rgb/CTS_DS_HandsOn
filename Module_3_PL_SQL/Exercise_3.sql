
/*Scenario  1*/
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE Account_Type = 'Savings';
    
    COMMIT;
END;
/


/*Scenario  2*/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN NUMBER,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percentage / 100))
    WHERE Department_ID = p_department_id;
    
    COMMIT;
END;
/


/*Scenario  3*/

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account IN NUMBER,
    p_destination_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_current_balance NUMBER;
BEGIN
    SELECT Balance INTO v_current_balance
    FROM Accounts
    WHERE Account_ID = p_source_account;
    
    IF v_current_balance >= p_amount THEN
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE Account_ID = p_source_account;
        
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE Account_ID = p_destination_account;
        
        COMMIT;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds.');
    END IF;
    
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: Source account not found.');
END;
/