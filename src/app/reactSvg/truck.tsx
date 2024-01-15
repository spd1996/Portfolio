import React from 'react';

const Truck = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
      {/* Car Body */}
      <rect x="10" y="30" width="180" height="40" fill="#3498db" />

      {/* Car Roof */}
      <rect x="30" y="10" width="140" height="20" fill="#2980b9" />

      {/* Car Windows */}
      <rect x="40" y="20" width="30" height="20" fill="#2c3e50" />
      <rect x="90" y="20" width="80" height="20" fill="#2c3e50" />

      {/* Wheels */}
      <circle cx="50" cy="70" r="10" fill="#2c3e50" />
      <circle cx="150" cy="70" r="10" fill="#2c3e50" />
    </svg>
  );
};

export default Truck;
