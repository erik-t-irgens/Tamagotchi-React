import React from 'react';
import PropTypes from 'prop-types';


const Tamagotchi = () => {
    return (
        <div>
            <h2>{props.name} - {props.formattedAge} old.</h2>
            <h5>A {props.gender} tamagotchi.</h5>
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