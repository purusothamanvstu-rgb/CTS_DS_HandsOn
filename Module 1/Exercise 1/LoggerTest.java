public class LoggerTest {
    public static void main(String[] args) {
        Logger firstLoggerReference = Logger.getInstance();
        Logger secondLoggerReference = Logger.getInstance();

        if (firstLoggerReference == secondLoggerReference) {
            System.out.println("Verification Success: Both references point to the same instance.");
        } else {
            System.out.println("Verification Failure: Different instances exist.");
        }
    }
}