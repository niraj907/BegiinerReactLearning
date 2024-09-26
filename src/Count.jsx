import { useState } from "react";

export default function Count(pops) {
  // console.log(pops)
  const [count, setcount] = useState("Hello world");
    return (
      <div>
        <h1>Welcome to my app <br /> {pops.name} </h1>
      </div>
    );
  }