import { useState } from "react";

export default function Form() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const formstyle = {
fontSize : "1.6rem"

    }
    return (
        <>
            <div style={formstyle}>
                <button onClick={handleClick}>Click Me</button>
                <span>Count Value: {count}</span>
                <br />
                <span>There is new count: {count}</span>
            </div>
        </>
    );
}
