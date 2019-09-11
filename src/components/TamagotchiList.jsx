import React from 'react';
import PropTypes from 'prop-types';
import Tamagotchi from './Tamagotchi';

const TamagotchiList = props => {
    return (
        <div>
            {props.TamagotchiList.map((tamagotchi, index) =>
                <Tamagotchi name={tamagotchi.name}
                    gender={tamagotchi.gender}
                    description={tamagotchi.description}
                    formattedAge={tamagotchi.formattedAge}
                    key={tamagotchi.index} />
            )}
        </div>
    );

}

export default TamagotchiList;