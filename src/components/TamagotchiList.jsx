import React from 'react';
import PropTypes from 'prop-types';
import Tamagotchi from './Tamagotchi';
import { v4 } from 'uuid';

let TamagotchiList = (props) => {
    return (
        <div>
            {props.tamagotchiList.map((tamagotchi) =>
                <Tamagotchi name={tamagotchi.name}
                
                    gender={tamagotchi.gender}
                    description={tamagotchi.description}
                    formattedAge={tamagotchi.formattedAge}
                    key={tamagotchi.id}
                    removeTamagotchi={props.removeTamagotchi} 
                    />
                    
            )}
        </div>
    );

}

export default TamagotchiList;