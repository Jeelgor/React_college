import * as  React from "react";
class MyComponent4 extends React.Component {
    render() {
        const  { disabled,text}=this.props;
        return (
            <>
            <button disabled={disabled}>{text}</button>
            </>
        );
    }
}
 export default MyComponent4;


//  Main.jsx file code

/*
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import MyList1 from './MyList1.jsx';
import MyComponent4 from './MyComponent4.jsx';

const appstate ={
    text:"MyButton",
    disabled:true,
    items:["One","Tow","Three","Four","Five"],
};
const root=ReactDOM.createRoot(document.getElementById('root'));
function render(props){
    root.render(
        <main>
            <MyComponent4 text={props.text} disabled={props.disabled}/>
            <MyList1 items={props.items}/>
        </main>
    );
}
render(appstate);
setTimeout(()=>{
    appstate.disabled=false;
    appstate.text="Button1";
    appstate.items=[];
    render(appstate);
},2000);
*/ 