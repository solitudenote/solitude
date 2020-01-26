import { connect } from "react-redux";
import { updatePaneSize } from "../../actions";
import SplitView from "./SplitView.js";

const mapStateToProps = state => ({
  paneSize: state.splitPane.size
});

const mapDispatchToProps = dispatch => ({
  onPaneSizeChange: value => dispatch(updatePaneSize(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplitView);
