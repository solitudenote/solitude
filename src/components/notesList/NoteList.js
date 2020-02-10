import React, { useState, useEffect } from "react";
import { List, Typography } from "antd";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { updateMarkdownValue, hideModal } from "../../actions";
import { calculateSolitudeRepoName } from "../../utils/utils.js";
import CustomButton from "../../shared/customButton/CustomButton.js";
import CustomTag from "../../shared/customTag/CustomTag.js";

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
          commitUrl
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
          actions={[
            <CustomTag
              color="cyan"
              key="note-edit"
              onClick={() => setSelectedNote(item)}
              label="edit"
            />,
            <CustomTag
              key="note-sync"
              color="green"
              key="note-save"
              onClick={() => setSelectedNote(item)}
              label="save"
            />,
            <CustomTag
              key="note-sync"
              color="red"
              key="note-delete"
              onClick={() => setSelectedNote(item)}
              label="delete"
            />
          ]}
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>{item.name}</div>
        </List.Item>
      )}
    />
  );
};

export default NoteList;
