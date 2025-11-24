"use client";
import React, { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import LanguageSelector from "../components/LanguageSelector";
import OutputConsole from "../components/OutputConsole";
import InputArea from "../components/InputArea";
import ResizablePanel from "../components/ResizablePanel";
import { executeCode } from "../lib/piston";
import { CODE_SNIPPETS } from "../lib/constants";
import { Play, Terminal, Sparkles, Loader2 } from "lucide-react";

export default function Home() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSelectLanguage = (lang) => {
    setLanguage(lang);
    setCode(CODE_SNIPPETS[lang]);
    setOutput(null);
    setIsError(false);
  };

  const runCode = async () => {
    if (!code) return;
    setIsLoading(true);
    try {
      const { run: result } = await executeCode(language, code, input);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.error(error);
      setOutput(["Error executing code", error.message]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", background: "var(--bg-primary)" }}>
      {/* Header */}
      <header className="glass-panel" style={{
        height: "64px",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px var(--accent-glow)"
          }}>
            <Terminal size={20} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              letterSpacing: "-0.025em",
              lineHeight: 1.2
            }}>
              Universal Compiler
            </h1>
            <p style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              fontWeight: "500"
            }}>
              Professional Online IDE
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <LanguageSelector language={language} onSelect={onSelectLanguage} />

          <button
            onClick={runCode}
            disabled={isLoading}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.5rem",
              background: isLoading ? "var(--bg-tertiary)" : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontSize: "0.9rem",
              fontWeight: "600",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: isLoading ? "none" : "0 4px 12px var(--accent-glow)",
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Play size={18} fill="currentColor" />
            )}
            {isLoading ? "Running..." : "Run Code"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <ResizablePanel
          left={
            <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CodeEditor language={language} code={code} onChange={setCode} />
            </div>
          }
          right={
            <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--bg-secondary)" }}>
              <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
                <OutputConsole output={output} isError={isError} isLoading={isLoading} />
              </div>
              <div style={{ height: "35%", minHeight: "150px", borderTop: "1px solid var(--border-color)" }}>
                <InputArea input={input} onChange={setInput} />
              </div>
            </div>
          }
        />
      </div>
    </main>
  );
}
