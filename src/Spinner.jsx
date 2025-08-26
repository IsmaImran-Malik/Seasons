import React from "react";


const Spinner = (props) =>{
    return(
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message /*|| "Loading..."*/}</div>  {/* default props  */}
        </div>
    );
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TODO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Spinner.defaultProp = {
    message : "Loading..."
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TODO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default Spinner;