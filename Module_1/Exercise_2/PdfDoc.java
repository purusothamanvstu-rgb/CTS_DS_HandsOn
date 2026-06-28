package Module_1.Exercise_2;

public class PdfDoc implements Doc {
    @Override
    public void open() {
        System.out.println("PDF Doc: Initializing read-only viewer.");
    }
}