import * as React from "react";
class MyList1 extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <>
            <u>
             {
                items.map((i)=>(
                    <li key={i}>{i}</li>
                ))
             }   
             </u>
                </>
        )
    }
}
export default MyList1;