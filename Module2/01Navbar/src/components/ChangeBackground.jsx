import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackgroundColor } from "../redux/Actions/BgActions";

const ChangeBackground = () => {
  let bgColor = useSelector((state) => state.color.backgroundColor);
  let dispatch = useDispatch();

  return (
    <>
      <div className="bg-container" style={{ backgroundColor: bgColor }}>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              dispatch(setBackgroundColor("black"));
            }}
          >
            BLACK
          </button>
          <button
            className="btn"
            style={{backgroundColor:'red'}}
            onClick={() => {
              dispatch(setBackgroundColor("red"));
            }}
          >
            RED
          </button>
          <button
            className="btn"
            style={{backgroundColor:'green'}}
            onClick={() => {
              dispatch(setBackgroundColor("green"));
            }}
            >
            GREEN
          </button>
          <button
            className="btn"
            style={{backgroundColor:'pink'}}
            onClick={() => {
              dispatch(setBackgroundColor("pink"));
            }}
          >
            PINK
          </button>
          <button
            className="btn"
            style={{backgroundColor:'grey'}}
            onClick={() => {
              dispatch(setBackgroundColor("grey"));
            }}
          >
            GREY
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeBackground;
