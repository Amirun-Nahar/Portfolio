import React from 'react';

const Aurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="aurora-container absolute inset-0" aria-hidden="true">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
        <div className="aurora-4"></div>
      </div>
      <div className="aurora-glass absolute inset-0 backdrop-blur-[100px]"></div>
    </div>
  );
};

export default Aurora;