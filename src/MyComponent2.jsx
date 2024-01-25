import * as React from "react";
class MyComponent2 extends React.Component {
    state ={
        heading:"This is Heading",
        content:"This is Content",
        btn:false,
        color1:"green",
    };
    constructor(){
        super();
        setTimeout(()=>{
            this.setState({
                heading:"this is new heading",
                content:"this is new content",
                btn:true,      
                color1:"blue",
        });
        },3000);
        setInterval(()=>{this.setState({
            color1:!this.state.color1,
        });
    },1000);
        
    }
    render() {
        const {heading,content,color1,btn} = this.state;
        return (
            <>
        <section>
                  <h1>{heading}</h1>
                 <p style={{background:color1 ? "green" : "red"}}>{content}</p>
                 <button disabled={btn}>Button1</button>
        </section>
            </>
        )
    }
}
export default MyComponent2;