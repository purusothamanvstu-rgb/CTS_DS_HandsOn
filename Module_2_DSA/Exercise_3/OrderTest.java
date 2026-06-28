package Module_2_DSA.Exercise_3;

import java.util.Arrays;

public class OrderTest {
    public static void main(String[] args) {
        Order[] orders = {
            new Order(1, "Alice", 250.50),
            new Order(2, "Bob", 50.00),
            new Order(3, "Charlie", 150.75),
            new Order(4, "David", 300.00)
        };

        System.out.println("Original: " + Arrays.toString(orders));

        OrderSorter.bubbleSort(orders);
        System.out.println("Bubble Sorted: " + Arrays.toString(orders));

        OrderSorter.quickSort(orders, 0, orders.length - 1);
        System.out.println("Quick Sorted: " + Arrays.toString(orders));
    }
}