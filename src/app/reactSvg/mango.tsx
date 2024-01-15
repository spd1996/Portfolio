import React from 'react';

const MangoTree = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
      {/* Tree trunk */}
      <rect x="90" y="80" width="20" height="50" fill="#8B4513" />

      {/* Tree canopy */}
      <circle cx="100" cy="50" r="40" fill="#228B22" />

      {/* Mango */}
      <ellipse cx="100" cy="30" rx="12" ry="8" fill="#FFA500" />

      {/* Leaves */}
      <circle cx="85" cy="40" r="15" fill="#228B22" />
      <circle cx="95" cy="30" r="15" fill="#228B22" />
      <circle cx="105" cy="40" r="15" fill="#228B22" />
      <circle cx="115" cy="30" r="15" fill="#228B22" />
      <circle cx="100" cy="20" r="15" fill="#228B22" />
    </svg>
  );
};

export default MangoTree;
