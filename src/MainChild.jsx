import { createContext } from "react";
import ChildA from "./ChildA";

const dataFirst = createContext();
const dataSecond = createContext();
export default function MainChild() {
  return (
    <div>
      <dataFirst.Provider value={"Niraj"}>
        <dataSecond.Provider value={"Chaudhary"}>
          <ChildA />
        </dataSecond.Provider>
      </dataFirst.Provider>
    </div>
  );
}

export { dataFirst,dataSecond };
