import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import CustomButton from "../../shared/customButton/CustomButton.js";

const CREATE_SOLITUDE_NOTES_REPOSITORY = gql`
  mutation CreateSolitudeNotesRepository {
    cloneTemplateRepository(
      input: {
        name: "rudrabot-solitude-notes"
        repositoryId: "MDEwOlJlcG9zaXRvcnkyMzc2ODIwOTE="
        ownerId: "MDQ6VXNlcjM1MDI2MTM0"
        visibility: PRIVATE
      }
    ) {
      repository {
        name
      }
    }
  }
`;

const CreateRepository = ({}) => {
  const [createRepo, { data }] = useMutation(CREATE_SOLITUDE_NOTES_REPOSITORY);
  return (
    <CustomButton
      label="Create"
      onClick={e => {
        createRepo();
        console.log("Clicked");
      }}
    />
  );
};

export default CreateRepository;
