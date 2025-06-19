import React from 'react'

export const ChildButton = React.memo(({onClick,label})=>{
console.log("ChildButton");
 
  return <button onClick={onClick}>{label}</button>;
});
