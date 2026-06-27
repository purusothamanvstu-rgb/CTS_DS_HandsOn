public class Logger {
    private static Logger uniqueLoggerInstance;

    private Logger() {
    }

    public static Logger getInstance() {
        if (uniqueLoggerInstance == null) {
            uniqueLoggerInstance = new Logger();
        }
        return uniqueLoggerInstance;
    }
}