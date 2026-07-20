package Module_2_DSA.Exercise_1;

import java.util.HashMap;
import java.util.Map;

public class InventoryManager {
    private Map<String, Product> inventory;

    public InventoryManager() {
        this.inventory = new HashMap<>();
    }

    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Added: " + product.getProductId());
    }

    public void updateProduct(String productId, int newQuantity, double newPrice) {
        if (inventory.containsKey(productId)) {
            Product p = inventory.get(productId);
            p.setQuantity(newQuantity);
            p.setPrice(newPrice);
            System.out.println("Updated: " + productId);
        } else {
            System.out.println("Product not found: " + productId);
        }
    }

    public void deleteProduct(String productId) {
        if (inventory.remove(productId) != null) {
            System.out.println("Deleted: " + productId);
        } else {
            System.out.println("Product not found: " + productId);
        }
    }

    public void showInventory() {
        System.out.println("\n--- Current Inventory ---");
        for (Product p : inventory.values()) {
            System.out.println(p);
        }
        System.out.println("-------------------------\n");
    }
}