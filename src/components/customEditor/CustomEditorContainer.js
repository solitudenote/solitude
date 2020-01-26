import { connect } from "react-redux";
import { updateMarkdownValue, updateEditorState } from "../../actions";
import CustomEditor from "./CustomEditor.js";

const mapStateToProps = state => ({
  markdownValue: state.markdownValue
});

const mapDispatchToProps = dispatch => ({
  onValueChange: value => dispatch(updateMarkdownValue(value)),
  onSelectedEditorChange: editor => dispatch(updateEditorState(editor))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomEditor);
