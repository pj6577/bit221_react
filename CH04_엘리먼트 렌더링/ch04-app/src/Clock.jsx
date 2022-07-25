import React from 'react';

const Clock = () => {
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <div>
      Time
      <br />
      <span>{now + time}</span>
    </div>
  );
};

export default Clock;