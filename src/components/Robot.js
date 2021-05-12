import "./Robot.css";

export default function Robot({ title, url, id }) {
  return (
    <div className="ml-10">
      <div className="ag-space">
        <div className="ag-format-container">
          <div className="ag-robot_platform">
            <div className="ag-robot"></div>
          </div>

          <div className="ag-planet"></div>
        </div>
      </div>
    </div>
  );
}
