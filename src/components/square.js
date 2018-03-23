import React from "react";

import $ from "jquery";




const border = {
    border : "10px red solid",
    width : "100px",
    height : "100px"
};


class Square extends React.Component {

    constructor(props){
        super(props);
    }

    render(){


        console.log(this.props);




        return(
            <div style={border} ky={this.props.ky} onClick={this.props.clk}>
                Test
            </div>
        )
    }
}

export default Square;