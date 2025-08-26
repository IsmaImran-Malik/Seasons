import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from " SeasonDisplay.css";
import "./SeasonDisplay.css"


const seasonConfig = {
    summer: {
        text : "Let's hit the beach!" ,
        iconName : 'sun'
    },
    winter: {
        text : "Burr, It's chilly!" ,
        iconName : 'snowflake'
    }
};


const getSeason = (lat, month) =>{
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}

const SeasonsDisplay = (props) =>{
    // console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? "Burr, It's chilly! " : "Let's hit the beach!";
    // const icon = season === 'winter' ? "snowflake" : "sun";
    const {text, iconName} =seasonConfig[season];
    console.log(season);

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>

    );
    
}

export default SeasonsDisplay;


//<i class="snowflake icon"></i>