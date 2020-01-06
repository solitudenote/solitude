import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../codeBlock/CodeBlock";

const ResultPane = ({ markdownValue }) => {
  return (
    <div className="result-pane">
      <ReactMarkdown
        source={markdownValue}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
};

export default ResultPane;
