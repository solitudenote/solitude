import { connect } from "react-redux";
import { updatePaneSize } from "../../actions";
import Appbar from "./Appbar.js";

const mapDispatchToProps = dispatch => ({
  onViewModeChange: value => dispatch(updatePaneSize(value))
});

export default connect(null, mapDispatchToProps)(Appbar);
