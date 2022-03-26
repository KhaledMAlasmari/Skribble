import CSS from 'csstype';
import { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import React from 'react';

const SidePanel: React.FC<props> = ({
  selectColor,
  setErasingState,
  erasingState,
  canvasRef
}) => {
  const erase = () => {
    setErasingState(!erasingState);
  };

  const buttonStyle: CSS.Properties = {
    color: erasingState ? 'red' : 'gray'
  };
  return (
    <div>
      <input
        onChange={(event) => {
          selectColor(event.target.value);
        }}
        type="color"
      />
      <button style={buttonStyle} onClick={erase}>
        Eraser
      </button>
      <button onClick={() => canvasRef.current?.clear()}>Clear canvas</button>
    </div>
  );
};

interface props {
  selectColor: React.Dispatch<React.SetStateAction<string>>;
  setErasingState: React.Dispatch<React.SetStateAction<boolean>>;
  erasingState: boolean;
  canvasRef: React.RefObject<CanvasDraw>;
}

export default SidePanel;
