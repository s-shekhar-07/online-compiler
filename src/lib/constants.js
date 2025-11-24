export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
    cpp: "10.2.0", // GCC
    go: "1.16.2",
    rust: "1.68.2",
    ruby: "3.0.1",
    swift: "5.3.3",
};

export const CODE_SNIPPETS = {
    javascript: `function greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\ngreet("World");\n`,
    typescript: `type Params = {\n  name: string;\n}\n\nfunction greet(data: Params) {\n  console.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "World" });\n`,
    python: `def greet(name):\n    print("Hello, " + name + "!")\n\ngreet("World")\n`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n`,
    csharp: `using System;\n\nnamespace HelloWorld\n{\n    class Hello \n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello World!");\n        }\n    }\n}\n`,
    php: `<?php\n\n$name = "World";\necho "Hello, " . $name . "!";\n`,
    cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}\n`,
    go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello World")\n}\n`,
    rust: `fn main() {\n    println!("Hello World");\n}\n`,
    ruby: `def greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("World")\n`,
    swift: `import Foundation\n\nprint("Hello World")\n`,
};
