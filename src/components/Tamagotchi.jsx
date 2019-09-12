import React from 'react';
import PropTypes from 'prop-types';
import fox from '../images/fox.png';
import glob from '../images/glob.png';
import scarecrow from '../images/scarecrow.png';
import giphy from '../images/giphy.gif';
import franco from '../images/franco.gif';
import something from '../images/something.gif';

let Tamagotchi = (props) => {

    const imageArray = [fox, glob, scarecrow, giphy, franco, something];
    const tamagotchiImageStyle = {
        width: "auto",
        height: "20vw",
        margin: "5px"
    }
    const tamagotchiBoxStyle = {
        width: "20vw",
        height: "auto",
        textAlign: "center",
        border: "1px solid black",
        padding: '5px'

    }
    return (
        <div className ='card' style={tamagotchiBoxStyle}>
            <button className="btn btn-outline-dark btn-lg" onClick={() => props.removeTamagotchi(props.id)}>Delete</button>
            <h2>{props.name} - {props.formattedAge} old.</h2>
            <h5>A {props.gender} tamagotchi.</h5>
            <img style={tamagotchiImageStyle} src={imageArray[Math.floor(Math.random() * (5 - 0))]} />
            <p>{props.description}</p>
        </div>
    )
}

Tamagotchi.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    description: PropTypes.string,
    formattedAge: PropTypes.string.isRequired
    // sleep: PropTypes.int.isRequired,
    // hunger: PropTypes.int.isRequired,
    //  fun: PropTypes.int.isRequired
}

export default Tamagotchi;