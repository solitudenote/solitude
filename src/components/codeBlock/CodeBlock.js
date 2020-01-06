import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  ghcolors,
  hopscotch,
  pojoaque,
  vs,
  xonokai,
  base16AteliersulphurpoolLight,
  cb,
  prism
} from "react-syntax-highlighter/dist/esm/styles/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter
        language={language}
        style={base16AteliersulphurpoolLight}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
