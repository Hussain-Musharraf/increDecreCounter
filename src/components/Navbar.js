import React from "react"
class Navbar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{heigh:20,background:"blue"}}>{this.props.counterValue}</div>
        )
    }
}
export default Navbar;  