package Module_1.Exercise_2;

public class DocTest {
    public static void main(String[] args) {
        DocFactory wordFactory = new WordFactory();
        Doc wordDoc = wordFactory.create();
        wordDoc.open();

        DocFactory pdfFactory = new PdfFactory();
        Doc pdfDoc = pdfFactory.create();
        pdfDoc.open();

        DocFactory excelFactory = new ExcelFactory();
        Doc excelDoc = excelFactory.create();
        excelDoc.open();
    }
}
