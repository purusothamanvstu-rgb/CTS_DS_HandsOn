package Module_2_DSA.Exercise_4;

public class EmployeeManager {
    private Employee[] employees;
    private int size;

    public EmployeeManager(int capacity) {
        employees = new Employee[capacity];
        size = 0;
    }

    public void addEmployee(Employee emp) {
        if (size < employees.length) {
            employees[size++] = emp;
        }
    }

    public void traverse() {
        for (int i = 0; i < size; i++) System.out.println(employees[i]);
    }

    public int search(int id) {
        for (int i = 0; i < size; i++) if (employees[i].employeeId == id) return i;
        return -1;
    }

    public void deleteEmployee(int id) {
        int index = search(id);
        if (index != -1) {
            for (int i = index; i < size - 1; i++) employees[i] = employees[i + 1];
            size--;
        }
    }
}