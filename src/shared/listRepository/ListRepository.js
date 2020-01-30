import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIST_REPO_QUERY = gql`
  {
    viewer {
      login
      repositories(first: 100) {
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
  const { loading, error, data } = useQuery(LIST_REPO_QUERY);

  console.log(loading, error, data);
  let repositories = !loading ? data.viewer.repositories : {};
  //return <>{data && data.viewer.repositories.totalCount}</>;
  //debugger;
  return (
    <>
      {!loading && (
        <ul>
          {repositories.nodes &&
            repositories.nodes.map(repo => <li key={repo.id}>{repo.name}</li>)}
        </ul>
      )}
    </>
  );
};

export default ListRepository;

//repositories.nodes.map(repo => {<li key={repo.id}> {repo.name}></li>})
