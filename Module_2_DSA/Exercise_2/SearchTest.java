package Module_2_DSA.Exercise_2;

import java.util.Arrays;

public class SearchTest {

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midId = products[mid].getProductId();

            if (midId == targetId) {
                return products[mid];
            }
            if (midId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] inventory = {
            new Product(105, "Bluetooth Speaker", "Electronics"),
            new Product(101, "Running Shoes", "Apparel"),
            new Product(109, "Coffee Maker", "Home Goods"),
            new Product(103, "Novel - Dune", "Books"),
            new Product(107, "Yoga Mat", "Fitness")
        };

        System.out.println("--- Linear Search (Unsorted Data) ---");
        Product foundLinear = linearSearch(inventory, 109);
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Product not found");

        Arrays.sort(inventory);

        System.out.println("\n--- Binary Search (Sorted Data) ---");
        Product foundBinary = binarySearch(inventory, 107);
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Product not found");
    }
}