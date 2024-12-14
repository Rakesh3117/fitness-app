import "../css/ChartPlaceholder.css";

const ChartPlaceholder = () => {
  return (
    <>
      <div className="col-12 d-flex gap-1 empty-container">
        <div className="col-3 bar1"></div>
        <div className="col-6 bar2"></div>
        <div className="col-3 bar3"></div>
        <div className="placeholder-text">
          Drag and drop your activities here
        </div>
      </div>
    </>
  );
};

export default ChartPlaceholder;
