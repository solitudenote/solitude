import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Avatar } from "antd";

const LIST_REPO_QUERY = gql`
  {
    viewer {
      login
      avatarUrl
    }
  }
`;

const ListRepository = () => {
  const { loading, error, data } = useQuery(LIST_REPO_QUERY);

  //return <>{data && data.viewer.login}</>
  return <Avatar src={data && data.viewer.avatarUrl} size="small" />;
};

export default ListRepository;
