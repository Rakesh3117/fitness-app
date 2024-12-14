/* eslint-disable no-unused-vars */
import "../css/Droppable.css";
import PropTypes from "prop-types";
import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import ChartPlaceholder from "./ChartPlaceholder";
import Activities from "./Activities";
import { RxCross1 } from "react-icons/rx";

let distanceScale = [];
let dummyDistanceScale = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log("widths", widths);

const DroppableItem = ({ chartsData, setChartsData }) => {
  const calculateTotalDistance = () => {
    distanceScale.length = 0; // Clear existing distances
    return chartsData.reduce((total, item) => {
      if (item.sizes) {
        const sizesTotal = item.sizes.reduce((sum, size) => {
          distanceScale.push(size.distance);
          return sum + size.distance;
        }, 0);
        return total + sizesTotal;
      }
      distanceScale.push(item.distance);
      return total + item.distance;
    }, 0);
  };

  calculateTotalDistance();
  const totalDistance = distanceScale.reduce((acc, curr) => acc + curr, 0);

  const handleClear = () => {
    setChartsData([]);
  };

  const deleteBarGraph = (index) => {
    const updatedChartsData = [...chartsData];
    updatedChartsData.splice(index, 1);
    setChartsData(updatedChartsData);
  };

  return (
    <div className="droppable-container">
      <div className="d-flex justify-content-end mb-2">
        <button className="button-clear" onClick={handleClear}>
          Clear All
        </button>
      </div>
      <div className="chart-container">
        <div className="drop-zone d-flex flex-row flex-nowrap gap-3">
          {chartsData.length === 0 && <ChartPlaceholder />}

          {chartsData?.map((item, index) => {
            return (
              <Draggable
                key={item.id}
                draggableId={`chart-${item.id}-${index}`}
                index={index}
                axis="x"
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="dropped-item"
                    style={{
                      ...provided.draggableProps.style,
                      width: `${Math.floor(
                        (100 / totalDistance) *
                          (item.sizes
                            ? item.sizes.reduce(
                                (sum, size) => sum + size.distance,
                                0
                              )
                            : item.distance)
                      )}%`,
                    }}
                  >
                    {/* <button className="hover-button">Edit</button> */}
                    {/* {item?.sizes ? (
                      <div className="bar-graph-bottom-container-chart d-flex justify-content-between gap-2 p-0">
                        <button className="hover-button">Edit</button>
                        {item?.sizes.map((inner, idx) => (
                          <div
                            key={idx}
                            className="inner-bars-chart d-flex justify-content-center align-items-center"
                            style={{
                              height: `${inner.size}%`,
                              width: `${Math.floor(
                                (100 / item.sizes.length) * inner.distance
                              )}%`,
                            }}
                          >
                            {inner.size}%
                          </div>
                        ))}
                        <button className="hover-button">Edit</button>
                      </div>
                    ) : (
                      <div
                        className="bar-graph-container-chart"
                        style={{
                          width: `100%`,
                        }}
                      >
                        <div
                          className="inner-bar-chart d-flex justify-content-center align-items-center"
                          style={{
                            height: `${item.size}%`,
                            width: `100%`,
                          }}
                        >
                          {item.size}%
                        </div>
                      </div>
                    )} */}
                    {item?.sizes ? (
                      <div className="position-relative">
                        <button
                          onClick={() => deleteBarGraph(index)}
                          className="hover-button position-absolute top-0 end-0"
                        >
                          <RxCross1 />
                        </button>
                        <div className="bar-graph-bottom-container-chart d-flex justify-content-between gap-2 p-0">
                          {item?.sizes.map((inner, idx) => (
                            <div
                              key={idx}
                              className="inner-bars-chart d-flex justify-content-center align-items-center"
                              style={{
                                height: `${inner.size}%`,
                                width: `${Math.floor(
                                  (100 / item.sizes.length) * inner.distance
                                )}%`,
                              }}
                            >
                              {inner.size}%
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="position-relative">
                        <button
                          onClick={() => deleteBarGraph(index)}
                          className="hover-button position-absolute top-0 end-0"
                        >
                          <RxCross1 />
                        </button>
                        <div
                          className="bar-graph-container-chart"
                          style={{
                            width: `100%`,
                          }}
                        >
                          <div
                            className="inner-bar-chart d-flex justify-content-center align-items-center"
                            style={{
                              height: `${item.size}%`,
                              width: `100%`,
                            }}
                          >
                            {item.size}%
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      </div>
      <div className="d-flex scale-container" style={{ paddingLeft: "20px" }}>
        {distanceScale.length > 0 && <div style={{ color: "#9a95f2" }}>0</div>}
        {distanceScale.map((item, index) => (
          <div
            key={index}
            className="distance-scale-item"
            style={{
              width: `${Math.floor((100 / totalDistance) * item)}%`,
            }}
          >
            {distanceScale
              .slice(0, index + 1)
              .reduce((sum, curr) => sum + curr, 0)}
          </div>
        ))}

        {distanceScale.length <= 0 &&
          dummyDistanceScale.map((item, index) => (
            <div
              key={index}
              className="distance-scale-item"
              style={{
                width: `${index === 0 ? "0%" : "10%"}`,
              }}
            >
              {item}
            </div>
          ))}
      </div>

      <div className="activities-container">
        <Activities chartsData={chartsData} />
      </div>
    </div>
  );
};

DroppableItem.propTypes = {
  chartsData: PropTypes.array,
  setChartsData: PropTypes.func.isRequired,
};

export default DroppableItem;
