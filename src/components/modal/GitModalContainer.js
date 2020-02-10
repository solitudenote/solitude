import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../actions";
import config from "../../data/config.json";
import CustomModal from "../../shared/customModal/CustomModal.js";
import CustomButton from "../../shared/customButton/CustomButton.js";
import FindSolitudeRepository from "../../components/findSolitdueRepository/FindSolitudeRepository.js";
import CreateRepository from "../../components/createRepository/CreateRepository.js";
import { registerSolitudeRepo } from "../../actions";
import { buildGitHubLink } from "../../utils/utils.js";

const GitModalContainer = ({
  auth,
  isOpen,
  modalProps,
  hideModal,
  updateRepository,
  repository
}) => {
  const onGitConnectClick = e => {
    e.preventDefault();
    const gitHubLink = buildGitHubLink(config.GITHUB_APP_CLIENT_ID);
    window.location.href = gitHubLink;
  };

  useEffect(() => {
    // Set loading true on every time we open the modal
    updateRepository({ loading: true });
  }, []);

  // Create a repository if doesn't exist already

  return (
    <CustomModal
      isModalOpen={isOpen}
      modalTitle={"Your notes"}
      modalBody={
        auth.token ? (
          <div>
            <FindSolitudeRepository updateRepository={updateRepository} />
            {!repository.loading && !repository.name && (
              <CreateRepository
                auth={auth}
                updateRepository={updateRepository}
              />
            )}
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
  auth: state.auth,
  repository: state.repository
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  updateRepository: repo => dispatch(registerSolitudeRepo(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(GitModalContainer);