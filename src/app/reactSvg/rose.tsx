import React from 'react';

const Rose = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
      {/* Stem */}
      <rect x="95" y="30" width="10" height="70" fill="#228B22" />

      {/* Leaves */}
      <circle cx="100" cy="70" r="15" fill="#228B22" />
      <circle cx="90" cy="50" r="15" fill="#228B22" />
      <circle cx="110" cy="50" r="15" fill="#228B22" />

      {/* Rose Petals */}
      <circle cx="100" cy="30" r="20" fill="#FF69B4" />
      <circle cx="85" cy="40" r="20" fill="#FF69B4" />
      <circle cx="115" cy="40" r="20" fill="#FF69B4" />
      <circle cx="100" cy="50" r="20" fill="#FF69B4" />
      <circle cx="85" cy="30" r="20" fill="#FF69B4" />
      <circle cx="115" cy="30" r="20" fill="#FF69B4" />
      <circle cx="95" cy="20" r="20" fill="#FF69B4" />
      <circle cx="105" cy="20" r="20" fill="#FF69B4" />
    </svg>
  );
};

export default Rose;
