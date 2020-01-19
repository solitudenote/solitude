import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIST_REPO_QUERY = gql`
  {
    viewer {
      repositories(first: 100) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
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
  const { loading, error, data } = useQuery(LIST_REPO_QUERY);

  console.log(loading, error, data);
  return (
    <>
      {data && (
        <span>Total repositories: {data.viewer.repositories.totalCount}</span>
      )}
    </>
  );
};

export default ListRepository;
