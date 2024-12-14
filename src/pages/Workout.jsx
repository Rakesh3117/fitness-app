import { FaArrowLeft } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import "./../css/Workout.css";
import DraggableItem from "../components/DraggableItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { topBars, bottomBars } from "../data/bars";
import { useEffect, useState } from "react";
import DroppableItem from "../components/DroppableItem";

const Workout = () => {
  const [chartsData, setChartsData] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("chartData"));
      return data || [];
    } catch (error) {
      console.error("Error parsing chartData from localStorage:", error);
      return [];
    }
  });

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (draggableId.startsWith("chart-")) {
      const newChartsData = Array.from(chartsData);
      const [removed] = newChartsData.splice(source.index, 1);
      newChartsData.splice(destination.index, 0, removed);
      setChartsData(newChartsData);
      return;
    }

    const [itemType, itemId] = draggableId.split("-");
    let draggedData;
    if (itemType === "top") {
      draggedData = topBars.find((item) => item.id === parseInt(itemId));
    } else if (itemType === "bottom") {
      draggedData = bottomBars.find((item) => item.id === parseInt(itemId));
    }

    if (destination.droppableId === "chart") {
      const newChartsData = Array.from(chartsData);
      newChartsData.splice(destination.index, 0, draggedData);
      setChartsData(newChartsData);
    }
  };

  useEffect(() => {
    localStorage.setItem("chartData", JSON.stringify(chartsData));
  }, [chartsData]);

  return (
    <>
      <h1 className="page-heading">Workouts</h1>
      <div className="container-fluid app-container">
        <div className="col-12 d-flex justify-content-between page-heading-bar-container">
          <div className="d-flex align-items-center gap-2 ">
            <FaArrowLeft className="page-heading-bar-container-icon" />
            <h1>Run Workout</h1>
            <GoPencil className="page-heading-bar-container-icon" />
          </div>
          <div>
            <button>save workout</button>
          </div>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="row">
            <div className="col-12 col-md-4">
              <Droppable droppableId="draggable-list">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <DraggableItem />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <Droppable droppableId="chart">
              {(provided) => (
                <div
                  className="col-12 col-md-8"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <DroppableItem
                    chartsData={chartsData}
                    setChartsData={setChartsData}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Workout;
