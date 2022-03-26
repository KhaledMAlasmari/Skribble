import CanvasDraw from 'react-canvas-draw'
import CSS from 'csstype';
import { createRef, useRef, useState } from 'react';
import SidePanel from './SidePanel';
import React from 'react';

const Canvas: React.FC = () => {
  const [color, setColor] = useState('#000000');
  const [isErasing, setErasingState] = useState(false);
  const canvasRef = createRef<CanvasDraw>();

  return (
    <div style={containerStyle} className="canvas">
      <CanvasDraw
        ref={canvasRef}
        style={canvasStyle}
        canvasWidth={850}
        canvasHeight={500}
        hideGrid={true}
        brushColor={isErasing ? '#ffffff' : color}
      />
      <SidePanel
        canvasRef={canvasRef}
        selectColor={setColor}
        setErasingState={setErasingState}
        erasingState={isErasing}
      />
    </div>
  );
};

const canvasStyle: CSS.Properties = {
  border: 'solid 1px',
  borderColor: 'black'
};
const containerStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

interface props {
  onChange: null;
  loadTimeOffset: 5;
  lazyRadius: 30;
  brushRadius: 12;
  brushColor: '#444';
  catenaryColor: '#0a0302';
  gridColor: 'rgba(150,150,150,0.17)';
  hideGrid: true;
  canvasWidth: 400;
  canvasHeight: 400;
  disabled: false;
  imgSrc: '';
  saveData: null;
  immediateLoading: false;
  hideInterface: false;
  gridSizeX: 25;
  gridSizeY: 25;
  gridLineWidth: 0.5;
  hideGridX: false;
  hideGridY: false;
  enablePanAndZoom: false;
  mouseZoomFactor: 0.01;
  zoomExtents: { min: 0.33; max: 3 };
}

export default Canvas;
