import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMarkdownValue, hideModal, loadNote } from "../../actions";
import { buildRestUrl } from "../../utils/utils.js";
import NoteList from "./NoteList.js";

const NoteListContainer = ({ refetchList }) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const repository = useSelector(state => state.repository);
  const auth = useSelector(state => state.auth);

  const editNote = item => {
    dispatch(loadNote(item));
    dispatch(hideModal());
  };

  const deleteNote = item => {
    const URI = buildRestUrl(
      "DELETE_FILE",
      repository.nameWithOwner.split("/")[0],
      repository.nameWithOwner.split("/")[1],
      `notes/${item.name}/index.md`
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
        refetchList();
        //console.log(result);
      })
      .catch(error => console.log("error", error));
  };

  const saveNote = item => {
    console.log("SaveNote");
  };

  const createNote = noteName => {
    // TODO
    // Validate whether the note name already exists
    const URI = buildRestUrl(
      "CREATE_FILE",
      repository.nameWithOwner.split("/")[0],
      repository.nameWithOwner.split("/")[1],
      `notes/${noteName}/index.md`
    );

    const createBody = {
      message: `Create Note ${noteName}.(solitude-bot)`,
      content: btoa("# " + noteName)
    };

    const headers = {
      Authorization: `Bearer ${auth.token}`,
      "Content-Type": "application/json"
    };

    fetch(URI, {
      method: "PUT",
      body: JSON.stringify(createBody),
      headers: headers
    })
      .then(response => response.text())
      .then(result => {
        refetchList();
        //console.log(result);
      })
      .catch(error => console.log("error", error));
  };

  return (
    <NoteList
      notes={notes}
      editNote={editNote}
      deleteNote={deleteNote}
      saveNote={saveNote}
      createNote={createNote}
    />
  );
};

export default NoteListContainer;
