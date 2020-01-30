import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIST_REPO_QUERY = gql`
  {
    viewer {
      login
    }
  }
`;

const ListRepository = () => {
  const { loading, error, data } = useQuery(LIST_REPO_QUERY);

  return <>{data && data.viewer.login}</>;
};

export default ListRepository;
