// Create a react component which will show one button
// initial text on button should be :CliCk me
// as use click on button it shoulde be
// replaced with "Count {number}".

import React, { useState } from 'react';

export default function Exercise1()
{
    const [count,setCount]= useState(0);
    return (
        <>
        <button onClick={()=>setCount(count+1)}>
            {count==0?"Click Me":"Count "+count}
        </button>
        </>
    )
}
// const ClickButton = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <button onClick={handleClick}>
//       {count === 0 ? 'Click me' : `Count ${count}`}
//     </button>
//   );
// };

// export default ClickButton;
