import { useContext } from "react";
import { dataFirst } from "./MainChild";
import { dataSecond } from "./MainChild";


export default function ChildC() {
  const fname = useContext(dataFirst)
  const lname = useContext(dataSecond)
  return (
    <>
    <h1> FirstName: {fname} <br /> LastName: {lname} </h1>
    </> 
  );
}
