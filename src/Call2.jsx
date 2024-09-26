import  { memo } from 'react';

const Call2 = ({ todo, data }) => {
console.log("todo function rendered");

  return (
    <>
      {
        data.map((curVal, index) => (
          <h1 key={index}>{curVal + " " + index}</h1>  // Use a more unique key if available
        ))
      }
      <button onClick={todo}>Add todo</button>
    </>
  );
};

export default memo(Call2);
