import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class StringToListHandler implements Handler<String, List<Character>>{

    @Override
    public List<Character> process(String input) {
        return Arrays.stream(input.split(""))
                .filter(Objects::nonNull)
                .map(it -> it.charAt(0))
                .collect(Collectors.toList());
    }
}
