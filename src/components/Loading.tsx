import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-300 z-50">
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-lg animate-pulse">
        <span className="text-5xl font-bold text-dark-300">B</span>
      </div>
    </div>
  );
};

export default Loading;