import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import CustomButton from "../../shared/customButton/CustomButton.js";
import config from "../../data/config.json";
import { buildRepositoryCreationInput } from "../../utils/utils.js";

const CREATE_SOLITUDE_NOTES_REPOSITORY = gql`
  mutation CreateSolitudeNotesRepository(
    $repoName: String!
    $templateRepositoryId: String!
    $ownerId: String!
  ) {
    cloneTemplateRepository(
      input: {
        name: $repoName
        repositoryId: $templateRepositoryId
        ownerId: $ownerId
        visibility: PRIVATE
      }
    ) {
      repository {
        name
      }
    }
  }
`;

const CreateRepository = ({ auth, updateRepository }) => {
  const [createRepo, { data }] = useMutation(CREATE_SOLITUDE_NOTES_REPOSITORY);
  const variables = buildRepositoryCreationInput(
    config.TEMPLATE_REPOSITORY_ID,
    auth.id,
    auth.userName
  );

  useEffect(() => {
    console.log(data);
    data &&
      data.cloneTemplateRepository &&
      updateRepository(data.cloneTemplateRepository.repository);
  }, [data]);

  return (
    <CustomButton
      label="Create"
      onClick={e => {
        createRepo({ variables: variables });
      }}
    />
  );
};

export default CreateRepository;
