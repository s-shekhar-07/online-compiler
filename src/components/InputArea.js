"use client";
import React from "react";
import { Keyboard } from "lucide-react";

export default function InputArea({ input, onChange }) {
    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "var(--bg-secondary)",
            borderLeft: "1px solid var(--border-color)"
        }}>
            <div className="panel-header">
                <Keyboard size={14} />
                <span>Input (Stdin)</span>
            </div>
            <textarea
                value={input}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter input here..."
                style={{
                    flex: 1,
                    width: "100%",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    border: "none",
                    padding: "1rem",
                    resize: "none",
                    outline: "none",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    lineHeight: "1.5"
                }}
            />
        </div>
    );
}
