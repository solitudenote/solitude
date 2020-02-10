import React, { useState, useEffect } from "react";
import { List, Typography } from "antd";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { updateMarkdownValue, hideModal } from "../../actions";
import { calculateSolitudeRepoName } from "../../utils/utils.js";

const LOAD_NOTE = gql`
  query LoadNote($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      nameWithOwner
      note: object(expression: $expression) {
        ... on Blob {
          text
          byteSize
        }
      }
    }
  }
`;

const NoteList = ({ notes }) => {
  const [selectedNote, setSelectedNote] = useState({ name: "" });

  const owner = useSelector(state => state.auth.userName);
  const dispatch = useDispatch();
  const repoName = calculateSolitudeRepoName(owner);
  const variables = {
    owner,
    name: repoName,
    expression: `master:notes/${selectedNote.name}/index.md`
  };

  const { loading, error, data } = useQuery(
    LOAD_NOTE,
    {
      variables,
      fetchPolicy: "no-cache"
    },
    [selectedNote]
  );

  useEffect(() => {
    const onCompleted = data => {
      const { note } = data.repository;
      note && dispatch(updateMarkdownValue(note.text)) && dispatch(hideModal());
    };
    const onError = error => {
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
    <List
      bordered={true}
      split={true}
      dataSource={notes}
      renderItem={item => (
        <List.Item
          key={item.oid}
          onClick={() => setSelectedNote(item)}
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </List.Item>
      )}
    />
  );
};

export default NoteList;

/*
    <List
      renderItem={item => (
        <List.Item
          key={item.oid}
          onClick={() => console.log(item.name)}
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </List.Item>
      )}
    />

    <CustomList
      bordered={true}
      split={true}
      dataSource={notes}
      listItemKeyValueKey="name"
      listItemKeyId="oid"
      listItemStyles={{ cursor: "pointer" }}
      onListItemClick={() => alert("clicked")}
    />
*/
