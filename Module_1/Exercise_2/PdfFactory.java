package Module_1.Exercise_2;

public class PdfFactory extends DocFactory {
    @Override
    public Doc create() {
        return new PdfDoc();
    }
}