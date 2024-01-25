import ReactDOM from 'react-dom/client';
// import Fun1 from './MyFunctionalComponent1';
// import MyContainer from './MyContainer1';
// import Fun2 from './MyFC2';
// import App from './App.jsx';
// import MyList1 from './MyList1.jsx';
// import MyComponent4 from './MyComponent4.jsx';
// import MyComponent5 from './MyComponent5.jsx';


// import MyComponent5 from './MyComponent5.jsx';
// import MyContainer from './MyContainer1.jsx';
// import Exercise1 from './Exercise1.jsx';
// import Exe2 from './Exe2.jsx';
// import Exe30 from "./Exe30";
// import Exe3 from './Exe3.jsx';
// import Exe4 from './Exe4.jsx';
import ReducerEx1 from './ReducerHooke.jsx';
import ReducerHooke2 from "./ReducerHooke2";


const root=ReactDOM.createRoot(document.getElementById('root'));
function render() {
    root.render(
        <main>
            {/* <Exercise1/> */}
            {/* <Exe3/>
            <Exe30/>
            <Exe4/> */}

{/* <ReducerEx1/> */}
<ReducerHooke2/>
            {/* <MyContainer/> */}
        </main>
    );
}
render();
// function render({first,second}){
//     root.render(
//         <main>
//             <MyComponent5 disabled={first.disabled} text={first.text}/>
//             <MyComponent5 disabled={second.disabled} text={first.text}/>
//         </main>
//     );
// }
// render({
//     first:{text:"Button1",disabled:false},
//     secom:{text:"Button1",disabled:true},
// });

// const root=ReactDOM.createRoot(document.getElementById('root'));
// function render({first,second}){
//     root.render(
//         <main>
//             <MyComponent5 disabled={first.disabled} text={first.text}/>
//             <MyComponent5 disabled={second.disabled} text={first.text}/>
//         </main>
//     );
// }
// render({
//     first:{text:"Button1",disabled:false},
//     secom:{text:"Button1",disabled:true},
// })
