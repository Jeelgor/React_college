import * as React from "react";
const MyComponent5=({disabled,text})=>(
    <button disabled={disabled}>{text}</button>
);
MyComponent5.defaultProps={
    disabled:false,
    text:"Default",
};
export default MyComponent5;
