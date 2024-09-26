import { useState } from "react";

export default function TextInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div>The value is {value}</div>
    </div>
  );
}
