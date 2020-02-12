import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { gql } from "apollo-boost";
import { calculateSolitudeRepoName, buildNoteList } from "../../utils/utils.js";
import NoteListContainer from "../noteList/NoteListContainer.js";
import { isEmpty } from "lodash";

const FIND_SOLITUDE_NOTE_REPO = gql`
  query LoadNote($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      nameWithOwner
      notes: object(expression: $expression) {
        ... on Tree {
          entries {
            name
            oid
            object {
              ... on Tree {
                entries {
                  name
                  oid
                  object {
                    id
                    ... on Blob {
                      text
                    }
                  }
                }
              }
              commitUrl
            }
          }
        }
      }
    }
  }
`;

const FindSolitudeRepository = ({ updateRepository, updateNotesList }) => {
  const owner = useSelector(state => state.auth.userName);
  const dispatch = useDispatch();
  const repoName = calculateSolitudeRepoName(owner);
  const variables = {
    owner,
    name: repoName,
    expression: "master:notes/"
  };

  const { loading, error, data } = useQuery(FIND_SOLITUDE_NOTE_REPO, {
    variables,
    fetchPolicy: "no-cache"
  });

  useEffect(() => {
    const onCompleted = data => {
      const { id, name, nameWithOwner, notes } = data.repository;
      let noteList = [];
      if (!isEmpty(notes)) {
        noteList = buildNoteList(notes["entries"]);
      }
      updateNotesList(noteList);
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
              <NoteListContainer />
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

// Old list github list
/*
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
                commitUrl
              }
            }
            name
          }
        }
      }
    }
  }
`;
*/
