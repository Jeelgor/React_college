import * as React from "react";
class MyComponent3 extends React.Component {
    state = {
        first: "Loading...",
        second: "loading...",
        third: "loading...",
        fourth: "loading...",
        fifth: "loading done...!!!",
    };
    constructor() {
        super();
        setTimeout(() => {
            this.setState({ first: "done..." });
        }, 1000);
        setTimeout(() => {
            this.setState({ second: "done..." });
        }, 2000);
        setTimeout(() => {
            this.setState({ third: "done..." });
        }, 3000);
        setTimeout(() => {
            // this.setState({ fourth: "done..." });
            this.setState((state)=>({
                ...state,
                fourth:state.finished,
                first:"100%",
                second:"100%",
                third:"100%",
            }));
        }, 4000);

    }  
    render() {
        return (
            <>
                {
                    <ul>
                        {
                            Object.keys(this.state).filter((key) => key != "finished").map((key) => (
                                <li key={key}>

                                    <p>
                                        {key} : {this.state[key]}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>

                    /* <p>{this.state["first"]}</p>
                    <p>{this.state["second"]}</p>
                    <p>{this.state["third"]}</p>
                    <p>{this.state["fourth"]}</p> */

                }
            </>
        )
    }
}
export default MyComponent3;