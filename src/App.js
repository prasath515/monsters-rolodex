import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component'

import { Profile } from './components/profile/profile.component'

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
            profileSet: 2
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({ monsters: users }))
            .catch(err => console.log('found error in Users API'));
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value }, () => console.log(this.state.searchField))
    }

    handleClick = () => {
        this.setState(prevState => {
            return { profileSet: prevState.profileSet < 6 ? prevState.profileSet + 1 : 2 }
        })
    }

    render() {

        const { monsters, searchField, profileSet } = this.state;
        const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>

                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />

                <Profile
                    handleClick={this.handleClick}
                />

                <CardList
                    profSet={profileSet}
                    monsters={filteredMonster}
                />

            </div>
        );
    }
}

export default App;
