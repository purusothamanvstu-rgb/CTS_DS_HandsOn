package Module_1.Exercise_2;

public class WordFactory extends DocFactory {
    @Override
    public Doc create() {
        return new WordDoc();
    }
}