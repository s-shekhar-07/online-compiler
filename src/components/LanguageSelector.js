"use client";
import React from "react";
import { LANGUAGE_VERSIONS } from "../lib/constants";
import { ChevronDown } from "lucide-react";

const languages = Object.entries(LANGUAGE_VERSIONS);

export default function LanguageSelector({ language, onSelect }) {
    return (
        <div style={{ position: "relative" }}>
            <select
                value={language}
                onChange={(e) => onSelect(e.target.value)}
                style={{
                    appearance: "none",
                    padding: "0.5rem 2.5rem 0.5rem 1rem",
                    borderRadius: "8px",
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-color)",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.2s",
                    minWidth: "150px"
                }}
            >
                {languages.map(([lang, version]) => (
                    <option key={lang} value={lang}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </option>
                ))}
            </select>
            <div style={{
                position: "absolute",
                right: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "var(--text-secondary)"
            }}>
                <ChevronDown size={14} />
            </div>
        </div>
    );
}
