import { combineReducers } from "redux";
import editor from "./editor.js";
import splitPane from "./splitPane.js";
import markdownValue from "./markdown.js";
import auth from "./auth.js";

export default combineReducers({
  markdownValue,
  editor,
  splitPane,
  auth
});
