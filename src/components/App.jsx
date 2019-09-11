import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunger: 100,
            sleep: 100,
            play: 100,
            masterTamagotchiList: []
        };
        this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
    }

    handleAddingNewTamagotchiToList(newTamagotchi) {
        var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
        //age from birth/creation
        newTamagotchi.formattedAge = (newTamagotchi.timeOpen).fromNow(true)
        newMasterTamagotchiList.push(newTamagotchi);
        this.setState({ masterTamagotchiList: newMasterTamagotchiList });
    }


    componentDidMount() {
        this.ageTimeUpdateTimer = setInterval(() =>
            this.updateTamagotchiAge(),
            60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.ageTimeUpdateTimer);
    }

    updateTamagotchiAge() {
        let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
        newMasterTamagotchiList.forEach((tamagotchi) =>
            tamagotchi.formattedAge = (tamagotchi.TimeOpen).fromNow(true)
        );
        this.setState({ masterTamagotchiList: newMasterTamagotchiList })
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <TamagotchiList tamagotchiList={this.state.masterTamagotchiList} />} />
                    <Route path='/newtamagotchi' />
                </Switch>>
            </div>

        )
    }
}