import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  fetchAllRepositories,
  findSolitudeRepository
} from "../../utils/utils.js";

const LIST_REPO_QUERY = gql`
  query Comments($cursor: String) {
    viewer {
      login
      repositories(first: 10, after: $cursor) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          owner {
            login
          }
        }
      }
    }
  }
`;

const FindSolitudeRepository = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [solitudeRepo, setSolitudeRepo] = useState();

  let solitude_repo = null;

  const client = useApolloClient();

  useEffect(() => {
    fetchAllRepositories({
      client,
      setData,
      setLoading,
      query: LIST_REPO_QUERY
    });
  }, []);

  useEffect(() => {
    if (data) {
      //console.log(data);
      setSolitudeRepo(findSolitudeRepository(data));
      console.log(solitude_repo);
    }
  }, [data]);

  return (
    <div>
      {!loading && data && solitudeRepo ? (
        <>
          <span>{solitudeRepo.name}</span>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default FindSolitudeRepository;

/*
          <ul>
            {data.viewer.repositories.nodes &&
              data.viewer.repositories.nodes.map(repo => (
                <li key={repo.id}>{repo.name}</li>
              ))}
          </ul>
          */
