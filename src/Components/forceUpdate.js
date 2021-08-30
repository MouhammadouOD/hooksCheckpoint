import React, { useState } from 'react'

// Create a custom useForceUpdate hook with useState
const useForceUpdate = () => useState()[1];

// Call it inside your component
const Hooks = () => {
  const forceUpdate = useForceUpdate();

  return (
    <button onClick={forceUpdate}>
      Update me
    </button>
  );
};