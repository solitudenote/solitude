import { combineReducers } from "redux";
import editor from "./editor.js";
import splitPane from "./splitPane.js";
import markdownValue from "./markdown.js";
import auth from "./auth.js";
import modal from "./modal.js";
import repository from "./repository.js";

export default combineReducers({
  markdownValue,
  editor,
  splitPane,
  modal,
  auth,
  repository
});
