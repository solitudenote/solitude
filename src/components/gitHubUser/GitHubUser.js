import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import { gql } from "apollo-boost";
import { Avatar } from "antd";
import { updateUser } from "../../actions";

const LIST_REPO_QUERY = gql`
  {
    viewer {
      id
      login
      avatarUrl
    }
  }
`;

const ListRepository = () => {
  const { loading, error, data } = useQuery(LIST_REPO_QUERY);
  const dispatch = useDispatch();

  // Update git user name in redux store
  if (data && data.viewer.login) {
    dispatch(updateUser(data.viewer));
  }

  return <Avatar src={data && data.viewer.avatarUrl} size="small" />;
};

export default ListRepository;
