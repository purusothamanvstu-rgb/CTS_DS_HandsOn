package Module_1.Exercise_2;

public class ExcelFactory extends DocFactory {
    @Override
    public Doc create() {
        return new ExcelDoc();
    }
}