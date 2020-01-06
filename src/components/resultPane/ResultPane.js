import React from "react";
import ReactMarkdown from "react-markdown";

const ResultPane = ({ markdownValue }) => {
  return (
    <div className="result-pane">
      <ReactMarkdown source={markdownValue} escapeHtml={false} />
    </div>
  );
};

export default ResultPane;
