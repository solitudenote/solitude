import React from "react";
import { connect } from "react-redux";
import Toolbar from "./Toolbar.js";

const mapStateToProps = state => ({
  editorState: state.editor,
  token: state.auth.token
});

export default connect(mapStateToProps)(Toolbar);
