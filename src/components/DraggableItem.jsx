import { Draggable } from "@hello-pangea/dnd";
import "../css/Draggable.css";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { topBars, bottomBars } from "../data/bars";

const DraggableItem = () => {
  return (
    <div className="draggable-container">
      <div className="d-flex justify-content-between align-items-center draggable-text-container">
        <p>Click or drag the block to build workout</p>
        <IoMdHelpCircleOutline size={20} />
      </div>
      <hr />
      <div className="row">
        {topBars.map((item, index) => (
          <Draggable key={item.id} draggableId={`top-${item.id}`} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="col-4 default-bar"
              >
                <div className="bar-graph-container">
                  <div
                    className="inner-bar"
                    style={{ height: `${item.size}%` }}
                  ></div>
                </div>
              </div>
            )}
          </Draggable>
        ))}
        {bottomBars.map((item, index) => (
          <Draggable
            key={item.id}
            draggableId={`bottom-${item.id}`}
            index={index + topBars.length}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="col-4 default-bottom-bar d-flex flex-column justify-content-end"
              >
                <div className="bar-graph-bottom-container d-flex justify-content-between gap-1">
                  {item?.sizes.map((inner, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="inner-bars "
                      style={{
                        height: `${inner.size}%`,
                        width: `${100 / item?.sizes.length}%`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DraggableItem;
