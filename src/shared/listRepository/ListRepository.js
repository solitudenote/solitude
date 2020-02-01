import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  fetchAllRepositories,
  findSolitudeRepository
} from "../../utils/utils.js";

const LIST_REPO_QUERY = gql`
  query Repositories($cursor: String) {
    viewer {
      login
      repositories(first: 50, after: $cursor) {
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

const ListRepository = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [solitudeRepo, setSolitudeRepo] = useState();

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
      setSolitudeRepo(findSolitudeRepository(data));
    }
  }, [data]);
  /*
  const { loading, error, data } = useQuery(LIST_REPO_QUERY, {
    fetchPolicy: "no-cache"
  });

  console.log(loading, error, data);
  let repositories = !loading ? data.viewer.repositories : {};
  */

  return (
    <>
      {!loading && data && (
        <div>
          <span>{data.viewer.repositories.totalCount}</span>
          <ul>
            {data.viewer.repositories.nodes &&
              data.viewer.repositories.nodes.map(repo => (
                <li key={repo.id}>{repo.name}</li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ListRepository;
