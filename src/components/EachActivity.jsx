/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "../css/EachActivity.css";
import { RxDragHandleDots2 } from "react-icons/rx";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";

const EachActivity = ({ distance, task, subTask = task }) => {
  return (
    <div className="each-activity-container">
      <div className="d-flex justify-content-between align-items-center">
        <h4>{task}</h4>
        <HiOutlineDotsVertical className="each-activity-container-dots" />
      </div>
      <hr />
      <div className="each-activity-container-setup d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-1">
          <RxDragHandleDots2 />
          <div className="each-activity-container-setup-image-container">
            <CiImageOn className="each-activity-container-setup-image" />
          </div>
          <h7>{subTask}</h7>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <button>{distance} KMS</button>
          <div className="each-activity-container-setup-dots">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <hr style={{ width: "40%" }} />
        <button className="mx-2 setup-button">Add SubStep</button>
        <hr style={{ width: "40%" }} />
      </div>
    </div>
  );
};

EachActivity.propTypes = {
  distance: PropTypes.number.isRequired,
};

export default EachActivity;
