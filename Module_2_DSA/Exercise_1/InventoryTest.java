package Module_2_DSA.Exercise_1;

public class InventoryTest {
    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();

        Product p1 = new Product("P001", "Gaming Laptop", 15, 1200.00);
        Product p2 = new Product("P002", "Wireless Mouse", 50, 25.50);
        Product p3 = new Product("P003", "Mechanical Keyboard", 30, 85.00);

        manager.addProduct(p1);
        manager.addProduct(p2);
        manager.addProduct(p3);

        manager.showInventory();

        manager.updateProduct("P002", 45, 22.00);
        
        manager.deleteProduct("P003");

        manager.showInventory();
    }
}