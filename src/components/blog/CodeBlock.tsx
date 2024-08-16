"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { CodingLanguage } from "@/models/enums";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";

interface Props {
  heading?: string;
  body: string;
  language: CodingLanguage;
}

export default function CodeBlock({ heading, body, language }: Props) {
  // Hooks
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(localStorage.theme === "dark");
  }, []);

  // Render
  return (
    <div className="flex flex-col gap-4 lg:gap-6 md:w-[600px]">
      <h3 className="text-neutral-900 dark:text-neutral-100">{heading}</h3>
      <div className="w-[calc(100vw-32px)] md:w-[600px]">
        <SyntaxHighlighter
          language={language}
          style={isDark ? monokai : vs}
          showLineNumbers
          wrapLines
          customStyle={{
            padding: "16px",
            backgroundColor: isDark ? "#454E47" : "#FEFDFB",
            fontSize: "14px",
          }}
        >
          {body}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
