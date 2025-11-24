"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { FileCode } from "lucide-react";

export default function CodeEditor({ language, code, onChange, theme = "vs-dark" }) {
    const handleEditorChange = (value) => {
        onChange(value);
    };

    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "var(--bg-secondary)",
            borderRight: "1px solid var(--border-color)"
        }}>
            <div className="panel-header">
                <FileCode size={14} />
                <span>main.{language === "python" ? "py" : language === "javascript" ? "js" : language === "typescript" ? "ts" : "txt"}</span>
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
                <Editor
                    height="100%"
                    language={language}
                    value={code}
                    theme={theme}
                    onChange={handleEditorChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        fontLigatures: true,
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        padding: { top: 16, bottom: 16 },
                        smoothScrolling: true,
                        cursorBlinking: "smooth",
                        cursorSmoothCaretAnimation: "on",
                        renderLineHighlight: "all",
                        lineNumbersMinChars: 3,
                        glyphMargin: false,
                        folding: true,
                        bracketPairColorization: { enabled: true },
                    }}
                />
            </div>
        </div>
    );
}
