/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import EachActivity from "./EachActivity";
import "../css/EachActivity.css";

const Activities = ({ chartsData }) => {
  const totalDistance = chartsData.reduce((total, item) => {
    if (item.sizes) {
      return total + item.sizes.reduce((sum, size) => sum + size.distance, 0);
    }
    return total + item.distance;
  }, 0);

  return (
    <div className="activities-container">
      {chartsData?.map((item, index) => (
        <div key={index}>
          {item.sizes ? (
            <div>
              {item.sizes.map((size, idx) => (
                <EachActivity
                  key={idx}
                  distance={size.distance}
                  task={item.task}
                  subTask={size.subTask}
                />
              ))}
            </div>
          ) : (
            <EachActivity
              key={index}
              distance={item.distance}
              task={item.task}
            />
          )}
        </div>
      ))}
    </div>
  );
};

Activities.propTypes = {
  chartsData: PropTypes.array.isRequired,
};

export default Activities;
