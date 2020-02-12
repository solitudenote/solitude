import React, { useState, useEffect } from "react";
import { List } from "antd";
import CustomButton from "../../shared/customButton/CustomButton.js";
import CustomTag from "../../shared/customTag/CustomTag.js";

const NoteList = ({ notes, loadNote, deleteNote, saveNote }) => {
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
              onClick={() => loadNote(item)}
              label="edit"
            />,
            <CustomTag
              key="note-sync"
              color="green"
              key="note-save"
              onClick={() => saveNote(item)}
              label="save"
            />,
            <CustomTag
              key="note-sync"
              color="red"
              key="note-delete"
              onClick={() => deleteNote(item)}
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

/*
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
*/
