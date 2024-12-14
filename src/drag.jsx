import React, { useState } from "react";

const DragDropWorkoutWithGraphs = () => {
  const [workout, setWorkout] = useState([]);
  const [steps, setSteps] = useState([]); 
  const [blocks, setBlocks] = useState(generateGraphBlocks(5)); 
  function generateGraphBlocks(count) {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      height: Math.floor(Math.random() * 100) + 50, 
    }));
  }

  const handleDragStart = (e, block, from) => {
    e.dataTransfer.setData(
      "block",
      JSON.stringify({ ...block, from })
    );
    e.target.style.transform = "scale(1.2)"; 
  };

  const handleDragEnd = (e) => {
    e.target.style.transform = "scale(1)";
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const { id, height, from } = JSON.parse(e.dataTransfer.getData("block"));

    if (from === "sidebar") {
      const newBlock = { id, height };
      const newWorkout = [...workout];
      newWorkout.splice(index, 0, newBlock); 
      setWorkout(newWorkout);

      setSteps([
        ...steps,
        { name: `Block ${id}`, duration: `${(height / 10).toFixed(1)} km` },
      ]);
    } else {
      const newWorkout = [...workout];
      const [draggedBlock] = newWorkout.splice(from, 1);
      newWorkout.splice(index, 0, draggedBlock); 
      setWorkout(newWorkout);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const handleClick = (block) => {
    const newBlock = { id: block.id, height: block.height };
    setWorkout([...workout, newBlock]);
    setSteps([
      ...steps,
      { name: `Block ${block.id}`, duration: `${(block.height / 10).toFixed(1)} km` },
    ]);
  };

  const clearWorkout = () => {
    setWorkout([]);
    setSteps([]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Workout</h1>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c5ce7",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save Workout
        </button>
      </header>

      <div className="row" style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div
          className="col-sm-4"
          style={{ width: "20%", height: "40%", border: "1px solid #ccc", padding: "10px" }}
        >
          <h3>Click or drag the blocks to build workout</h3>
          {blocks.map((block) => (
            <div
              className="btn m-1 text-start"
              key={block.id}
              draggable
              onDragStart={(e) => handleDragStart(e, block, "sidebar")}
              onDragEnd={handleDragEnd}
              onClick={() => handleClick(block)}
              style={{
                width: "50px",
                height: `${block.height}px`,
                backgroundColor: "#6c5ce7",
                margin: "10px auto",
                cursor: "grab",
              }}
              title={`Block ${block.id}`}
            ></div>
          ))}
        </div>

        <div className="col-sm-8 h-50">
          <div
            onDrop={(e) => handleDrop(e, workout.length)}
            onDragOver={handleDragOver}
            style={{
              position: "relative",
              height: "300px",
              border: "2px dashed #ccc",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              display: "flex",
              alignItems: "flex-end",
              gap: "5px", 
            }}
          >
            {workout.map((block, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, block, index)}
                onDragEnd={handleDragEnd}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
                style={{
                  width: "150px",
                  height: `${block.height}px`,
                  backgroundColor: "#74b9ff",
                }}
                title={`Block ${block.id}`}
              ></div>
            ))}

            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "20px",
                borderTop: "2px solid #333",
              }}
            >
              <p style={{ position: "absolute", bottom: "-20px", left: "10px" }}>0 km</p>
              <p style={{ position: "absolute", bottom: "-20px", right: "10px" }}>
                {workout.reduce((acc, block) => acc + block.height / 10, 0).toFixed(1)} km
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "20px",
                height: "100%",
                borderRight: "2px solid #333",
              }}
            >
              <p style={{ position: "absolute", top: "0", left: "-30px" }}>10 min</p>
              <p style={{ position: "absolute", bottom: "0", left: "-30px" }}>0 min</p>
            </div>
          </div>

          <button
            onClick={clearWorkout}
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#d63031",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clear Blocks
          </button>
        </div>

        <div style={{ width: "100%", marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Steps</h3>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#f1f1f1",
                borderRadius: "5px",
              }}
            >
              <p>{step.name}</p>
              <p>{step.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragDropWorkoutWithGraphs;
