package Module_1.Exercise_5;

public class NotifierTest {
    public static void main(String[] args) {
        Notifier emailNotifier = new EmailNotifier();
        
        Notifier smsNotifier = new SMSNotifierDecorator(emailNotifier);
        
        Notifier allNotifier = new SlackNotifierDecorator(smsNotifier);

        System.out.println("--- Basic Notification ---");
        emailNotifier.send("Server is starting up.");

        System.out.println("\n--- Multi-Channel Notification (Email + SMS) ---");
        smsNotifier.send("Warning: High CPU usage.");

        System.out.println("\n--- Urgent Notification (Email + SMS + Slack) ---");
        allNotifier.send("CRITICAL: Server went down!");
    }
}