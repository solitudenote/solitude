import React from "react";
import { connect } from "react-redux";
import GitModalContainer from "./GitModalContainer.js";

const MODAL_COMPONENTS = {
  GIT_MODAL: GitModalContainer
};

const RootModalContainer = ({ modal }) => {
  console.log(modal.modalType);
  if (!modal.modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modal.modalType];
  return <SpecificModal {...modal} />;
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(RootModalContainer);
