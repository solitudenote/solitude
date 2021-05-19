import React, { useState } from "react";
import { List } from "antd";
import CustomTag from "../../shared/customTag/CustomTag.js";
import { Input } from "antd";
const { Search } = Input;

const NoteList = ({ notes, editNote, deleteNote, saveNote, createNote }) => {
  const [noteName, setNoteName] = useState("");
  return (
    <div>
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
                onClick={() => editNote(item)}
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
      <br />
      <Search
        enterButton="Add Note"
        size="medium"
        value={noteName}
        onChange={event => setNoteName(event.target.value)}
        onSearch={value => {
          value && createNote(value);
          setNoteName("");
        }}
      />
    </div>
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
