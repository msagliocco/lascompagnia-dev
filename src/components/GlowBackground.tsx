import React from 'react';

const GlowBackground: React.FC = () => {
  return (
    <div className="glow-container absolute inset-0 overflow-hidden -z-10">
      <div className="ball" style={{"--delay": "0s", "--size": "0.4", "--speed": "20s"} as React.CSSProperties}></div>
      <div className="ball" style={{"--delay": "-12s", "--size": "0.35", "--speed": "25s"} as React.CSSProperties}></div>
      <div className="ball" style={{"--delay": "-10s", "--size": "0.3", "--speed": "15s"} as React.CSSProperties}></div>
    </div>
  );
};

export default GlowBackground;