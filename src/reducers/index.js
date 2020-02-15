import { combineReducers } from "redux";
import editor from "./editor.js";
import splitPane from "./splitPane.js";
import editorValue from "./editorValue.js";
import auth from "./auth.js";
import modal from "./modal.js";
import repository from "./repository.js";
import notes from "./notes.js";

export default combineReducers({
  editorValue,
  editor,
  splitPane,
  modal,
  auth,
  repository,
  notes
});
