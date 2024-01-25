import * as React from "react";
import MyList1 from "./MyList1";
function fetchData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["First","Second","Third","Fourth","Fifth","Sixth"]);
        },5000);
    })
}
class MyContainer extends React.Component {
    state = {items: ["test"] };
    componentDidMount(){
        fetchData().then((items)=>this.setState({items}));

    }
    render(){
        return <MyList1{...this.state}/>    
    }
    
}
export default MyContainer;