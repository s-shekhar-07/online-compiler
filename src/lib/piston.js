import { LANGUAGE_VERSIONS } from "./constants";

export const executeCode = async (language, sourceCode, stdin = "") => {
    const version = LANGUAGE_VERSIONS[language];
    if (!version) {
        throw new Error(`Unsupported language: ${language}`);
    }

    try {
        const response = await fetch("/api/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                language: language,
                version: version,
                files: [
                    {
                        content: sourceCode,
                    },
                ],
                stdin: stdin,
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error executing code:", error);
        throw error;
    }
};
