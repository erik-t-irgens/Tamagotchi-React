import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

const newTamagotchiForm = (props) => {
    let _name = null;
    let _gender = null;
    let _description = null;

    function handleNewTamagotchiFormSubmission(e) {
        e.preventDefault();
        props.onNewTamagotchiCreation({ name: _name.value, gender: _gender.value, description: _description.value, id: v4(), timeOpen: new Moment() });
        _name.value = '';
        _gender.value = '';
        _description.value = '';
    }

    return (
        <div>
            <form onSubmit={}>
                <input
                    type='text'
                    id='name'
                    placeholder='Name your Tamagotchi!'
                    ref={(input) => { _name = input; }} />
                <input
                    type='text'
                    id='gender'
                    placeholder='What gender is your Tamagotchi?'
                    ref={(input) => { _gender = input; }} />
                <input
                    type='text'
                    id='description'
                    placeholder='Describe your Tamagotchi!'
                    ref={(input) => { _description = input; }} />
            </form>
        </div>
    )
}

export default newTamagotchiForm;