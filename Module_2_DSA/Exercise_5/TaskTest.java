package Module_2_DSA.Exercise_5;

public class TaskTest {
    public static void main(String[] args) {
        TaskList list = new TaskList();

        list.addTask(new Task(1, "Design Database Schema", "Pending"));
        list.addTask(new Task(2, "Implement Auth API", "In Progress"));
        list.addTask(new Task(3, "Deploy to Production", "Pending"));

        System.out.println("--- All Tasks ---");
        list.traverse();

        System.out.println("\n--- Searching for Task 2 ---");
        Task found = list.search(2);
        System.out.println(found != null ? "Found: " + found : "Not found");

        System.out.println("\n--- Deleting Task 2 ---");
        list.delete(2);

        System.out.println("\n--- Tasks After Deletion ---");
        list.traverse();
    }
}