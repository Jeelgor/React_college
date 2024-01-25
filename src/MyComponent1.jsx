import * as React from "react";
class MyComponent1 extends React.Component {
    state ={
        first:true,
        second:false,
        str1:"this is a string",
    };
    render() {
        const {first,second,str1} = this.state;
        return (
            <>
        <section>
            <button disabled={first}>Disabled Button</button>
            <button disabled={second}>Enable Button</button>
            {str1}

        </section>
            </>
        )
    }
}
export default MyComponent1;