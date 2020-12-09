import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField : ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({ monsters: users }))
            .catch(err => console.log('found error in Users API'));
    }


    render() {

        const {monsters , searchField} = this.state;
        const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">

                <SearchBox              
                    placeholder= 'search monsters'
                    handleChange= {e => this.setState({ searchField: e.target.value })}
                />

                <CardList 
                monsters= {filteredMonster} 
                />

            </div>
        );
    }
}

export default App;
