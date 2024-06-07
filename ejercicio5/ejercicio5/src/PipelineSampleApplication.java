import java.util.List;
import java.util.Scanner;

public class PipelineSampleApplication {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("Ingrese texto:");
        String input=scanner.next();

        Pipeline<String, List<Character>> filters = new Pipeline<>(new RemoveNumericsHandler())
                .addHandler(new ToLowerCaseHandler())
                .addHandler(new StringToListHandler());
        List<Character> response=filters.execute(input);
        response.stream().forEach(System.out::print);
    }
}
