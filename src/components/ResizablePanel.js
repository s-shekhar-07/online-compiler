"use client";
import React, { useState, useEffect, useRef } from "react";

export default function ResizablePanel({ left, right }) {
    const [width, setWidth] = useState(60); // Percentage
    const isResizing = useRef(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isResizing.current) return;
            const newWidth = (e.clientX / window.innerWidth) * 100;
            if (newWidth > 20 && newWidth < 80) {
                setWidth(newWidth);
            }
        };

        const handleMouseUp = () => {
            isResizing.current = false;
            document.body.style.cursor = "default";
            document.body.style.userSelect = "auto";
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const startResizing = () => {
        isResizing.current = true;
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    };

    return (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
            <div style={{ width: `${width}%`, height: "100%" }}>{left}</div>
            <div
                onMouseDown={startResizing}
                style={{
                    width: "4px",
                    height: "100%",
                    background: "var(--border-color)",
                    cursor: "col-resize",
                    transition: "background 0.2s",
                    zIndex: 10
                }}
                className="resizer"
            />
            <div style={{ width: `${100 - width}%`, height: "100%" }}>{right}</div>
            <style jsx global>{`
        .resizer:hover {
          background: var(--accent-primary) !important;
        }
      `}</style>
        </div>
    );
}
