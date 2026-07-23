"use client"

import React, { useRef } from "react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
    const preRef = useRef<HTMLPreElement>(null)

    const getCodeText = () => {
        if (preRef.current) {
            const codeElement = preRef.current.querySelector("code")
            return codeElement?.textContent || ""

        }
        return ""
    }

    return (
        <div className="relative group">
            <pre ref={preRef} data-line-numbers className={className} {...props}>
                {children}
            </pre>

        </div>
    )
}