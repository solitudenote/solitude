import React, { useState, useEffect } from "react";
import AppbarContainer from "./components/appbar/AppbarContainer.js";
import SplitViewContainer from "./components/splitView/SplitViewContainer.js";
import ToolbarContainer from "./components/toolbar/ToolbarContainer.js";
import RootModalContainer from "./components/modal/RootModalContainer.js";
import { updateToken } from "./actions";

import { ApolloProvider } from "@apollo/react-hooks";
import authClient from "./auth/AuthClient.js";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import "./styles/App.css";
import "./styles/Resizer.css";
import "./styles/ResultPane.css";

function App({ onTokenChange, authToken }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    let code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      fetch(`https://solitudenote-gitkeeper.glitch.me/authenticate/${code}`)
        .then(response => response.json())
        .then(({ error, access_token }) => {
          if (error) {
            throw Error(error);
          }
          // Debug
          // console.log(access_token);
          setToken(access_token);
          // Store token in redux
          onTokenChange(access_token);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const client = authClient(token);
  return (
    <div>
      <ApolloProvider client={client}>
        <AppbarContainer />
        <ToolbarContainer />
        <SplitViewContainer />
        <RootModalContainer />
      </ApolloProvider>
    </div>
  );
}

const mapStateToProps = state => ({
  authToken: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onTokenChange: token => dispatch(updateToken(token))
});

export default connect(null, mapDispatchToProps)(App);
