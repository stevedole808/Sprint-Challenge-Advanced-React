import React from 'react';
import axios from "axios";

class Display extends React.Component {
    constructor() {
        super();
        this.state = {
           players: [] 
        };
    }

    componentDidMount() {
        console.log('cDM is running')
        axios.get('http://localhost:5000/api/players')
        .then(response => this.setState({ players: response.data}))
        .catch(error => {
            console.log("No data returned", error)
        })
        // fetch('http://localhost:5000/api/players')
        //     .then(res => res.json())
        //     .then(players => {
        //         console.log(players)
        //     })
        // .catch(error => {
        //     console.log("No data returned", error)
        //   })
    }

    fetchPlayersData () {
        return this.state.players.map((index, key) => {
            return (
                <div>
                    <h1>Player: {index.name}</h1>
                    <h2>Country: {index.country}</h2>
                    <h2>Searches: {index.seacrhes}</h2>

                </div>
            )
        })
    }

    render() {
        return (
            <div data-testid='players' >
                {this.fetchPlayersData()}
            </div>
        );
    }
}
export default Display;
