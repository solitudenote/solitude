import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { gql } from "apollo-boost";
import { calculateSolitudeRepoName } from "../../utils/utils.js";
import NotesList from "../notesList/NoteList.js";

const FIND_SOLITUDE_NOTE_REPO = gql`
  query SolitudeNoteRepo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      nameWithOwner
      templateRepository {
        id
        name
      }
      notes: object(expression: "master:notes/") {
        ... on Tree {
          entries {
            oid
            object {
              ... on Blob {
                text
              }
            }
            name
          }
        }
      }
    }
  }
`;

const FindSolitudeRepository = ({ updateRepository }) => {
  const owner = useSelector(state => state.auth.userName);
  const repoName = calculateSolitudeRepoName(owner);
  const variables = {
    owner,
    name: repoName
  };

  const { loading, error, data } = useQuery(FIND_SOLITUDE_NOTE_REPO, {
    variables,
    fetchPolicy: "no-cache"
  });

  useEffect(() => {
    const onCompleted = data => {
      const { id, name, nameWithOwner } = data.repository;
      updateRepository({ id, name, nameWithOwner, loading });
    };
    const onError = error => {
      updateRepository({ loading });
      console.log(error);
    };
    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data);
      } else if (onError && !loading && error) {
        onError(error);
      }
    }
  }, [loading, data, error]);

  return (
    <div>
      {!loading ? (
        <>
          {!data ? (
            <p>No solitude managed repository exists!</p>
          ) : (
            <div>
              <h3>{data.repository.nameWithOwner}</h3>
              <NotesList notes={data.repository.notes.entries} />
            </div>
          )}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default FindSolitudeRepository;
