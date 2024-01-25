import React, { useReducer } from 'react'

function reducer(state,action)
{
    switch(action.type){
        case "changeName":
        return {...state,name:action.value};

        case "changeAge":
        return {...state,age:action.value};

        default :
        throw new Error("Unknown action");
    }  
}

function ReducerHooke() 
{
    const[{name,age},dispatch] =useReducer(reducer,{name:"",age:""});
    
    return (
        <>
            <input type="text" value={name} onChange={(e)=> dispatch({type:"changeName",value:e.target.value})} /><br/>{name}<br/><br/><br/>
            <input type="number" value={age} onChange={(e)=> dispatch({type:"changeAge",value:e.target.value})} /><br/>{age}
        </>
    )
}

export default ReducerHooke
