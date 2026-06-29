package Module_2_DSA.Exercise_7;

public class FinancialTool {

    public static double predictValue(double presentValue, double growthRate, int periods) {
        if (periods == 0) {
            return presentValue;
        }
        
        double nextValue = presentValue * (1 + growthRate);
        return predictValue(nextValue, growthRate, periods - 1);
    }
}