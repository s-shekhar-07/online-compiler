"use client";
import React from "react";
import { TerminalSquare, AlertCircle, Loader2 } from "lucide-react";

export default function OutputConsole({ output, isError, isLoading }) {
    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "var(--bg-secondary)",
            borderLeft: "1px solid var(--border-color)"
        }}>
            <div className="panel-header" style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <TerminalSquare size={14} />
                    <span>Output</span>
                </div>
                {isError && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--error)", fontSize: "0.75rem" }}>
                        <AlertCircle size={12} />
                        <span>Error</span>
                    </div>
                )}
            </div>
            <div style={{
                flex: 1,
                padding: "1rem",
                overflowY: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                lineHeight: "1.6",
                color: isError ? "var(--error)" : "var(--text-primary)",
                background: "var(--bg-primary)",
                position: "relative"
            }}>
                {isLoading ? (
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "var(--text-secondary)"
                    }}>
                        <Loader2 className="animate-spin" size={24} />
                        <span>Running code...</span>
                    </div>
                ) : (
                    output ? (
                        output.map((line, i) => <div key={i}>{line}</div>)
                    ) : (
                        <div style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-tertiary)",
                            fontStyle: "italic"
                        }}>
                            Run code to see output
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
