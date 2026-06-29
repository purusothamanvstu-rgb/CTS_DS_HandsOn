package Module_2_DSA.Exercise_7;

public class ForecastTest {
    public static void main(String[] args) {
        double initialInvestment = 10000.00;
        double annualGrowthRate = 0.05; 
        int years = 10;

        System.out.println("--- Financial Forecast ---");
        System.out.println("Initial Investment: $" + initialInvestment);
        System.out.println("Annual Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecasting for " + years + " years...\n");

        double futureValue = FinancialTool.predictValue(initialInvestment, annualGrowthRate, years);

        System.out.printf("Predicted Future Value: $%.2f\n", futureValue);
    }
}