import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import CustomEditorContainer from "./shared/customEditor/CustomEditorContainer.js";
import ResultPane from "./components/resultPane/ResultPane.js";
import AppbarContainer from "./components/appbar/AppbarContainer.js";
import AccessComponent from "./auth/AccessComponent.js";
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
  const [token, setToken] = useState("");

  const handleMarkdownValueChange = value => {
    setMarkdownValue(value);
  };

  useEffect(() => {
    let code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    console.log(code);
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

  const client = authClient(token);
  return (
    <div>
      <ApolloProvider client={client}>
        <AppbarContainer onViewModeChange={handleViewModeChange} />
        {/*
          <AccessComponent />
          {token && <ListRepository />}
        */}
        <SplitPane split="vertical" defaultSize={paneSize} size={paneSize}>
          <div className="editor-pane">
            {paneSize !== "0%" && (
              <CustomEditorContainer
                onMarkdownValueChange={handleMarkdownValueChange}
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
