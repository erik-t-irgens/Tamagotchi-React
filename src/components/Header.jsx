import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => {
    return (
        <div>
            <h1>Tamagotchi!</h1>
            <Link to="/">Home</Link> | <Link to="/TamagotchiList">Your Tamagotchis</Link>  | <Link to="/NewTamagotchi">Create Tamagotchi</Link>
        </div>
    );
}
export default Header;