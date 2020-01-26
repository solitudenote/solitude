import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import CustomEditorContainer from "./shared/customEditor/CustomEditorContainer.js";
import ResultPane from "./components/resultPane/ResultPane.js";
import AppbarContainer from "./components/appbar/AppbarContainer.js";
import Toolbar from "./components/toolbar/Toolbar.js";
import ListRepository from "./shared/listRepository/ListRepository.js";
import "./styles/App.css";
import "./styles/Resizer.css";
import "./styles/ResultPane.css";

import { ApolloProvider } from "@apollo/react-hooks";
import authClient from "./auth/AuthClient.js";

function App() {
  const [paneSize, setPaneSize] = useState("50%");

  // Remove global states in APP and use redux
  const [markdownValue, setMarkdownValue] = useState("");
  const [editorState, setEditorState] = useState();
  const [token, setToken] = useState("");

  const handleMarkdownValueChange = value => {
    setMarkdownValue(value);
  };

  useEffect(() => {
    let code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      fetch(`https://prose-gatekeeper.glitch.me/authenticate/${code}`)
        .then(response => response.json())
        .then(({ error, token }) => {
          if (error) {
            throw Error(error);
          }
          console.log(token);
          setToken(token);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const handleViewModeChange = value => {
    if (value === "editor") {
      setPaneSize("100%");
    } else if (value === "split") {
      setPaneSize("50%");
    } else if (value == "view") {
      setPaneSize("0%");
    }
  };

  const handleRichTextButtonClick = ({ type = "" }) => {
    // As we don't have the editor state initialized, return null
    if (!editorState) return null;
    let selectedText = editorState.getSelection();
    let cursor = editorState.getCursor();

    switch (type) {
      case "header":
        editorState.setCursor(cursor.line, 0);
        const A1 = editorState.getCursor().line;
        const A2 = editorState.getCursor().ch;
        const B1 = editorState.findWordAt({ line: A1, ch: A2 }).anchor.ch;
        const B2 = editorState.findWordAt({ line: A1, ch: A2 }).head.ch;

        editorState.setSelection({ line: A1, ch: B1 }, { line: A1, ch: B2 });
        selectedText = editorState.getSelection();

        // If header in range of h1-h5
        if (/^#{1,5}$/.test(selectedText)) {
          editorState.replaceSelection(selectedText + "#");
        }
        // If header is h6
        else if (/^#{6,}$/.test(selectedText)) {
          break;
        } else {
          editorState.replaceSelection("# " + selectedText);
        }
        editorState.focus();
        break;
      case "bold":
        editorState.replaceSelection("**" + (selectedText || " ") + "**");
        editorState.focus();
        break;
      case "italic":
        editorState.replaceSelection("*" + (selectedText || " ") + "*");
        editorState.focus();
        break;
      case "strikethrough":
        editorState.replaceSelection("~~" + (selectedText || " ") + "~~");
        editorState.focus();
        break;
      case "hr":
        editorState.setCursor(cursor.line + 1, 0);
        editorState.replaceSelection("\n\n---\n");
        editorState.focus();
        break;
      case (type.match(/h[1-6]{1}/) || {}).input:
        editorState.setCursor(cursor.line, 0);
        editorState.replaceSelection("#".repeat(Number(type[1])) + " ");
        editorState.focus();
        break;
      case "table":
        const sampleTable =
          "\n| Tables        | Are           | Cool  |\n" +
          "| ------------- |:-------------:| -----:|\n" +
          "| col 3 is      | right-aligned | $1600 |\n" +
          "| col 2 is      | centered      |   $12 |\n" +
          "| zebra stripes | are neat      |    $1 |\n";
        editorState.setCursor(cursor.line, 0);
        editorState.replaceSelection(sampleTable);
        editorState.focus();
        break;
      case "code":
        editorState.replaceSelection(
          `\n\`\`\`language\n${selectedText}\n\`\`\`\n`
        );
        editorState.focus();
        break;
      default:
        editorState.replaceSelection(selectedText);
    }
  };

  const client = authClient(token);
  return (
    <div>
      <ApolloProvider client={client}>
        <AppbarContainer onViewModeChange={handleViewModeChange} />
        <Toolbar
          onRichTextButtonClick={handleRichTextButtonClick}
          token={token}
        />
        <SplitPane split="vertical" defaultSize={paneSize} size={paneSize}>
          <div className="editor-pane">
            {paneSize !== "0%" && (
              <CustomEditorContainer
                onMarkdownValueChange={handleMarkdownValueChange}
                onSelectedEditorChange={setEditorState}
                initialvalue={markdownValue}
              />
            )}
          </div>
          <div className="result-pane">
            <ResultPane markdownValue={markdownValue} />
          </div>
        </SplitPane>
      </ApolloProvider>
    </div>
  );
}

export default App;

//{token && <ListRepository />}
