import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../codeBlock/CodeBlock";

import { connect } from "react-redux";

const ResultPane = ({ markdownValue }) => {
  return (
    <ReactMarkdown
      className={"react-markdown"}
      source={markdownValue}
      //source={""}
      escapeHtml={false}
      renderers={{ code: CodeBlock }}
    />
  );
};

const mapStateToProps = state => ({
  markdownValue: state.markdownValue
});

export default connect(mapStateToProps)(ResultPane);
