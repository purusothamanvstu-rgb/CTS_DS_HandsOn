package Module_2_DSA.Exercise_4;

public class EmployeeTest {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(5);

        manager.addEmployee(new Employee(101, "Alice", "Developer", 75000));
        manager.addEmployee(new Employee(102, "Bob", "Designer", 65000));
        manager.addEmployee(new Employee(103, "Charlie", "Manager", 85000));

        System.out.println("--- All Employees ---");
        manager.traverse();

        System.out.println("\n--- Searching for ID 102 ---");
        int index = manager.search(102);
        System.out.println(index != -1 ? "Found at index: " + index : "Not found");

        System.out.println("\n--- Deleting ID 102 ---");
        manager.deleteEmployee(102);

        System.out.println("\n--- Employees After Deletion ---");
        manager.traverse();
    }
}