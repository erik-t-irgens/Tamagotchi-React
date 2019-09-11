import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import NewTamagotchiForm from './NewTamagotchiForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // hunger: 100,
            // sleep: 100,
            // play: 100,
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
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.ageTimeUpdateTimer);
    }

    updateTamagotchiAge() {
        let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
        newMasterTamagotchiList.forEach((tamagotchi) =>
            tamagotchi.formattedAge = (tamagotchi.timeOpen).fromNow(true)
        );
        this.setState({ masterTamagotchiList: newMasterTamagotchiList })
    }


    render() {
        return (
            <div>
                <Header />
                <Switch>

                    <Route exact path='/' />
                    <Route exact path='/TamagotchiList' render={() => <TamagotchiList tamagotchiList={this.state.masterTamagotchiList} />} />
                    <Route exact path='/NewTamagotchi' render={() => <NewTamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchiToList} />} />
                </Switch>
            </div>

        );
    }
}

export default App;