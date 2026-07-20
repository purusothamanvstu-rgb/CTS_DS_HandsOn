package Module_1.Exercise_2;

public class ExcelDoc implements Doc {
    @Override
    public void open() {
        System.out.println("Excel Doc: Initializing spreadsheet grid.");
    }
}