public class RemoveNumericsHandler implements Handler<String, String>{

    @Override
    public String process(String input) {
        return input.replaceAll("\\d", "");
    }
}
