public class ToLowerCaseHandler implements Handler<String, String>{

    @Override
    public String process(String input) {
        return input.toLowerCase();
    }
}
