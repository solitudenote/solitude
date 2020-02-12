import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMarkdownValue, hideModal } from "../../actions";
import { buildRestUrl } from "../../utils/utils.js";

import NoteList from "./NoteList.js";

const NoteListContainer = () => {
  const [noteList, setNoteList] = useState([]);
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const repository = useSelector(state => state.repository);
  const auth = useSelector(state => state.auth);

  const loadNote = item => {
    dispatch(updateMarkdownValue(item.text));
    dispatch(hideModal());
  };

  const deleteNote = item => {
    const URI = buildRestUrl(
      "DELETE",
      repository.nameWithOwner.split("/")[0],
      repository.nameWithOwner.split("/")[1],
      `notes/${item.name}/index.md`
    );

    const fileURI = buildRestUrl(
      "DELETE",
      repository.nameWithOwner.split("/")[0],
      repository.nameWithOwner.split("/")[1],
      `notes/${item.name}`
    );

    const deleteBody = {
      message: "Delete Note(solitude-bot)",
      sha: item.sha
    };

    const headers = {
      Authorization: `Bearer ${auth.token}`,
      "Content-Type": "application/json"
    };

    fetch(URI, {
      method: "DELETE",
      body: JSON.stringify(deleteBody),
      headers: headers
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log("error", error));
  };

  const saveNote = item => {
    console.log("SaveNote");
  };

  const createNote = item => {
    console.log("createNote");
  };

  return (
    <NoteList
      notes={notes}
      loadNote={loadNote}
      deleteNote={deleteNote}
      saveNote={saveNote}
    />
  );
};

export default NoteListContainer;
