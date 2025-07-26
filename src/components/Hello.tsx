import React from 'react';

export const Hello: React.FC<{ name: string }> = ({ name }) => {
  return <div>Hello {name}</div>;
};
