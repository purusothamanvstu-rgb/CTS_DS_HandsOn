package Module_2_DSA.Exercise_6;

import java.util.Arrays;

public class LibraryTest {
    public static void main(String[] args) {
        Book[] library = {
            new Book(3, "The Great Gatsby", "F. Scott Fitzgerald"),
            new Book(1, "1984", "George Orwell"),
            new Book(4, "To Kill a Mockingbird", "Harper Lee"),
            new Book(2, "Pride and Prejudice", "Jane Austen"),
            new Book(5, "Moby Dick", "Herman Melville")
        };

        System.out.println("--- Linear Search (Unsorted Data) ---");
        Book foundLinear = LibraryManager.linearSearchByTitle(library, "Moby Dick");
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Not found");

        Arrays.sort(library);

        System.out.println("\n--- Binary Search (Sorted Data) ---");
        Book foundBinary = LibraryManager.binarySearchByTitle(library, "1984");
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Not found");
    }
}