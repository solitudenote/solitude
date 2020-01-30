import React from "react";
import Toolbar from "./Toolbar.js";
import { connect } from "react-redux";
import { updateMarkdownValue, showModal, hideModal } from "../../actions";

const mapDispatchToProps = dispatch => ({
  handleNewFileUpload: value => dispatch(updateMarkdownValue(value)),
  handleModalOpen: modalState => dispatch(showModal(modalState))
  //handleModalClose: modalState => dispatch(hideModal(modalState))
});

const mapStateToProps = state => ({
  editorState: state.editor,
  token: state.auth.token
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
