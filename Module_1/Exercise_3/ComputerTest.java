package Module_1.Exercise_3;

public class ComputerTest {
    public static void main(String[] args) {
        Computer officePC = new Computer.Builder("Intel Core i3", "8GB", "256GB SSD")
                                        .build();
        
        System.out.println("Basic Office PC Configuration:");
        officePC.showSpecs();

        System.out.println("---------------------------------------------------");

        Computer gamingPC = new Computer.Builder("AMD Ryzen 9", "32GB", "2TB NVMe SSD")
                                        .setGraphicsCard(true)
                                        .setBluetooth(true)
                                        .build();
        
        System.out.println("High-End Gaming PC Configuration:");
        gamingPC.showSpecs();
    }
}