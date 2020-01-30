import React from "react";
import { connect } from "react-redux";
import CustomModal from "../../shared/customModal/CustomModal.js";
import CustomButton from "../../shared/customButton/CustomButton.js";
import { hideModal } from "../../actions";
import config from "../../data/config.json";
import ListRepository from "../../shared/listRepository/ListRepository.js";

const GitModalContainer = ({ isOpen, modalProps, hideModal, token }) => {
  const onGitConnectClick = e => {
    e.preventDefault();
    const gitHubLink = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_APP_CLIENT_ID}&scope=repo`;

    window.location.href = gitHubLink;
  };

  return (
    <CustomModal
      isModalOpen={isOpen}
      modalTitle={"Your notes"}
      modalBody={
        token ? (
          <div>
            <h4> All Repos </h4>
            <ListRepository />
          </div>
        ) : (
          <CustomButton
            label="Connect to GitHub"
            onClick={e => onGitConnectClick(e)}
          />
        )
      }
      onModalClose={hideModal}
    />
  );
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(GitModalContainer);
