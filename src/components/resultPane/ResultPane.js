import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../codeBlock/CodeBlock";

const ResultPane = ({ markdownValue }) => {
  return (
    <ReactMarkdown
      source={markdownValue}
      escapeHtml={false}
      renderers={{ code: CodeBlock }}
    />
  );
};

export default ResultPane;
