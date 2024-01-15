import React from 'react';

const ShaolinMonk = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
      {/* Body */}
      <rect x="90" y="90" width="20" height="40" fill="#A52A2A" />

      {/* Head */}
      <circle cx="100" cy="80" r="15" fill="#F5DEB3" />

      {/* Eyes */}
      <circle cx="95" cy="78" r="2" fill="#000" />
      <circle cx="105" cy="78" r="2" fill="#000" />

      {/* Mouth */}
      <path d="M98 82 Q100 85 102 82" fill="none" stroke="#000" />

      {/* Robe */}
      <rect x="85" y="90" width="30" height="20" fill="#000" />

      {/* Belt */}
      <rect x="85" y="100" width="30" height="2" fill="#A52A2A" />

      {/* Legs */}
      <rect x="90" y="130" width="10" height="30" fill="#A52A2A" />
      <rect x="100" y="130" width="10" height="30" fill="#A52A2A" />

      {/* Arms */}
      <rect x="80" y="100" width="5" height="25" fill="#A52A2A" />
      <rect x="115" y="100" width="5" height="25" fill="#A52A2A" />

      {/* Staff */}
      <rect x="115" y="90" width="5" height="40" fill="#8B4513" />
    </svg>
  );
};

export default ShaolinMonk;
